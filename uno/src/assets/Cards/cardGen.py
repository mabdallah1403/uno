# should there be a flag for the type of card? like the wildcards?
import random
from random import choices



numberCards = ['0'] + ['1'] + ['2'] + ['3'] + ['4'] + ['5'] + ['6'] + ['7'] + ['8'] + ['9']
wildCard = ['reverse'] + ['skip'] + ['+2'] + ['Swap Color'] + ['+4 Swap Color'] 
colorCards = ['red'] + ['blue'] + ['green'] + ['yellow'] 
drawPiles = [wildCard] + [colorCards] + [numberCards]
# max 7 cards per player,
# 108 total cards,
# numbers 0-9
# 8 skips (2 of each color),
# 8 reverse, 8 draw 2,
# 4 draw 4 change color, 4 change color
def generator():
   i = 0
   while i < 7:
      print(choices(list(drawPiles),k=7))
      print("\nnext player\n")
      i += 1

generator()

class Cards(object):
   redCount, blueCount, greenCount, yellowCount = 0,0,0,0
   fullDeck = 108



class playerCards(object):
   def __init__(self):
       self.cardsInHand = []