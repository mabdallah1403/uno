import { player } from './frontEndPlayerClass.ts';
import.meta.glob<{ default: string }>('../assets/Cards/Generated_Cards/*.png', { eager: true });
import { useState } from 'react';
import './Cards_in_Hand.css'

function CardsInHand() {
  const [selectedCardState, setSelectedCardState] = useState<number>() // initial state then setter [initial val, setter]
  const [topCardState, setTopCardState] = useState<string>()

  const cards = player.get_cards();
  function PlayButtonDisabled() {
    return (
      // if (swap color or +4 swap color) {
      // return false;}

      //if(topCardState === card image number color ) // parse file name to find what card it is and compare to top card

      // top card doesn't match color or number of selected card
      // selected card isn't swap color or +4 swap color
      // color is selcted on swap color
      // button isn't disabled if topCardState is undefined
      true
    ) 
  }

  function PlayCard() {
    return (
      <div className="button_resize">
    <button disabled={(selectedCardState === undefined)} onClick={() => {
      if (selectedCardState !== undefined) {
        setTopCardState(player.getCardFromIndex(selectedCardState)) // top card is set from the played hand
        // print the top card image in the middle
        player.remove_card(selectedCardState)
      } 
      setSelectedCardState(undefined)

    }
  }
    >
      Play
    </button>
    </div>
    )
  }
  return (
    <div className="card_resize">
      {cards.map((cardUrl, index) => ( // generated didn't write this line, may need to change "root" on previous line
        <button onClick={() => {
          setSelectedCardState(index)
        }
        }>
          <img key={index} src={cardUrl} alt={`Card ${index + 1}`} className="card_image" draggable={false} /> 
        </button>

      ))}

      <PlayCard></PlayCard>
    </div>
  );
}

export default CardsInHand;
