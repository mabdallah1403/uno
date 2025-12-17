# should there be a flag for the type of card? like the wildcards?

numberCards = 0,1,2,3,4,5,6,7,8,9
wildCard = {'reverse', 'skip', '+2', 'Swap Color', '+4 Swap Color'}
# max 7 cards per player,
# 108 total cards,
# 8 skips (2 of each color),
# 8 reverse, 8 draw 2,
# 4 draw 4 change color, 4 change color
class Cards(object):
   redCount, blueCount, greenCount, yellowCount = 0,0,0,0
   fullDeck = 108



class playerCards(object):
   def __init__(self):
       self.cardsInHand = []