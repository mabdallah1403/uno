from enum import Enum
import turtle

class Color(Enum):
   RED = "Red"
   BLUE = "Blue"
   GREEN = "Green"
   YELLOW = "Yellow"

class Action(Enum):
   REVERSE = "Reverse"
   SKIP = "Skip"
   DRAW2 = "+2"

class Wild(Enum):
   SWAPCOLOR = "Swap Color"
   DRAW4SWAPCOLOR = "+4 Swap Color"

# max 7 cards per player,
# 108 total cards
# numbers 0-9 19 per color
# 8 skips (2 of each color),
# 8 reverse, 8 draw 2,
# 4 draw 4 change color, 4 change color
def generator():
 card_list = []
 for color in Color:
    for i in range(19):
      card_list.append(color.value + str(i))
    for action in Action:
      card_list.append(color.value + action.value)
      card_list.append(color.value + action.value)

 for wild in Wild:
    for i in range(4):
      card_list.append(wild.value)
    
 return card_list

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
         if color in card:
            color_dict[color] += 1

   print(color_dict)     
#validate_deck()

def draw_card():
   card_list = generator()

   draw = turtle.Turtle()
   length = 100
   width = 150

   draw.hideturtle()
   
   draw.forward(length)
   draw.left(90)

   draw.forward(width)
   draw.left(90)

   draw.forward(length)
   draw.left(90)

   draw.forward(width)

   turtle.mainloop()
draw_card()