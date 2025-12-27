from enum import Enum
import turtle
import os

class Color(Enum):
   RED = "Red"
   BLUE = "Blue"
   GREEN = "Green"
   YELLOW = "Yellow"

class Action(Enum):
   REVERSE = "Reverse"
   SKIP = "Skip"
   DRAW2 = "+2"
   NUMBERED = "Numbered"


class Wild(Enum):
   SWAPCOLOR = "Swap Color"
   DRAW4SWAPCOLOR = "+4 Swap Color"

class Abstract_Card:
   type: Action | Wild

   def __init__(self, type: Action | Wild):
      self.type = type

   def draw_card(self, draw):
         draw.speed("slowest")
         length = 100
         width = 150

         draw.hideturtle()
         draw.color("black", "black")
         draw.begin_fill()

         draw.forward(length)
         draw.left(90)

         draw.forward(width)
         draw.left(90)
        
         draw.forward(length)
         draw.left(90)

         draw.forward(width)

         draw.end_fill()

         draw.color("white")
         draw.penup()
         draw.goto(length/2, width/2 - 10)
         draw.pendown()
         draw.write(self.type.value, align = "center", font=("Arial", 10, "normal"))

         save_path = os.path.join(os.getcwd(), "uno/src/assets/Cards/Generated_Cards", f"{self.type.value}.ps")
         os.makedirs(os.path.dirname(save_path), exist_ok=True)

         turtle.save(save_path, overwrite=True)

         turtle.resetscreen()     

class Wild_Card(Abstract_Card):
   pass

class Colored_Card(Abstract_Card):
   color: Color
   def __init__(self, color: Color, type: Action):
      self.type = type
      self.color = color
   
   def draw_card(self, draw):
         draw.speed("fastest")
         length = 100
         width = 150

         draw.hideturtle()
         draw.color("black", self.color)
         draw.begin_fill()

         draw.forward(length)
         draw.left(90)

         draw.forward(width)
         draw.left(90)
         
         draw.forward(length)
         draw.left(90)

         draw.forward(width)
         draw.end_fill()

         draw.penup()
         draw.goto(length/2, width/2 - 20)
         draw.pendown()
         draw.write(self.type.value, align = "center", font=("Arial", 15, "normal"))

         save_path = os.path.join(os.getcwd(), "uno/src/assets/Cards/Generated_Cards", f"{self.color}_{self.type.value}.ps")
         os.makedirs(os.path.dirname(save_path), exist_ok=True)

         turtle.save(save_path, overwrite=True)
         
         turtle.resetscreen()

class Numbered_Card(Colored_Card):
   number: int
   def __init__(self, number: int, type: Action, color: Color):
      if number not in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]:
         raise TypeError(f"Should only be 0-9, got {number}")
      self.number = number
      self.type = type
      self.color = color
   
   def draw_card(self, draw):         
         draw.speed("fastest")
         length = 100
         width = 150

         draw.hideturtle()
         draw.color("black", self.color)
         draw.begin_fill()

         draw.forward(length)
         draw.left(90)

         draw.forward(width)
         draw.left(90)
         draw.forward(length)
         draw.left(90)

         draw.forward(width)

         draw.end_fill()

         draw.penup()
         draw.goto(length/2, width/2 - 20)
         draw.pendown()
         draw.write(self.number, align = "center", font=("Arial", 40, "normal"))

         save_path = os.path.join(os.getcwd(), "uno/src/assets/Cards/Generated_Cards", f"{self.color}_{self.number}.ps")
         os.makedirs(os.path.dirname(save_path), exist_ok=True)

         turtle.save(save_path, overwrite=True)

         turtle.resetscreen()


# max 7 cards per player,
# 108 total cards
# numbers 0-9 19 per color
# 8 skips (2 of each color),
# 8 reverse, 8 draw 2,
# 4 draw 4 change color, 4 change color
def generator() -> list[Abstract_Card]:
 card_list = []
 for color in Color:
    for i in range(10):
      num_card = Numbered_Card(i, Action.NUMBERED, color.value)
      card_list.append(num_card)

    for action in Action:
      if (action != Action.NUMBERED):
         action_card = Colored_Card(color.value, action)
         card_list.append(action_card)

 for wild in Wild:
    wild_card = Wild_Card(wild)
    card_list.append(wild_card)

 return card_list

#print([i.__dict__ for i in generator()])


def validate_deck():
   card_list = generator()
   print(len(card_list)) 
   color_dict = {
      "Red": 0,
      "Blue" : 0,
      "Green" : 0,
      "Yellow" : 0
   }

   for color in color_dict:
      for card in card_list:
         if type(card) != Wild_Card and card.color == color:
            color_dict[color] += 1

   print(color_dict)     
#validate_deck()

def draw_card():
   card_list = generator()
   draw = turtle.Turtle()
   for card in card_list:
      card.draw_card(draw)
    
draw_card()