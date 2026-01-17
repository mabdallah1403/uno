import { player } from './frontEndPlayerClass.ts';
import.meta.glob<{ default: string }>('../assets/Cards/Generated_Cards/*.png', { eager: true });
import { useState } from 'react';
import './Cards_in_Hand.css'

function CardsInHand() {
  const [selectedCardState, setSelectedCardState] = useState<string>() // initial state then setter [initial val, setter]
  const [topCardState, setTopCardState] = useState<string>()
  const [playerCards, setPlayerCards] = useState<Map<string,string>>(player.get_cards());

  function PlayButtonDisabled() { // true means disabled, false means enabled
    if (topCardState === undefined) {
      return false;
    }
    if (selectedCardState === undefined) { 
      return true;
    }
    if (topCardState.includes(selectedCardState.split('_')[0]) || topCardState.includes(selectedCardState.split('_')[1])) {
      return false;
    }
    if (selectedCardState.includes("+4") ||selectedCardState.includes("Swap")) {
      return false;
    }
    return true;
      // color is selcted on swap color 
  }

  function PlayCard() {
    return (
      <div className="play_button">
        <button disabled={(selectedCardState === undefined) || PlayButtonDisabled()} onClick={() => {
          if (selectedCardState !== undefined) {
            setTopCardState(player.getCardFromName(selectedCardState));// top card is set from the played hand 
            player.remove_card(selectedCardState);
            setPlayerCards(new Map(player.get_cards()));
          }
          if (selectedCardState?.includes("Swap")) {
            
          }    
          setSelectedCardState(undefined);
    }
  }
    >
      Play
    </button>
    </div>
    )
  }

  function TopCard() {
    return (
      <img src={topCardState} className="top_card_image" draggable={false} />
    )
  }

  function DrawCard() {
    return (
      <div className="draw_button">
        <button onClick={() => {
          player.draw_card();   
          setPlayerCards(new Map(player.get_cards()));
        }}>
          Draw
        </button>
      </div>
    )
  }

  function Uno() { 
    return (
      <div className="uno_button">
        <button disabled={playerCards.size !== 1} onClick={() => {     
            alert("UNO!");
        }}>
          UNO
      
      </button>
      </div>
    )
  }

  return (
    <div className="card_resize">
      {[...playerCards].map(([cardName, cardURL]) => ( // generated didn't write this line, may need to change "root" on previous line
        <button onClick={() => {
          setSelectedCardState(cardName);
        }
        }>
          <img key={cardName} src={cardURL} alt={`Card ${cardName}`} className="card_image" draggable={false} /> 
        </button>

      ))}

      
      <TopCard></TopCard>
      <DrawCard></DrawCard>
      <Uno></Uno>
      <PlayCard></PlayCard>
      
      

    </div>
  );
}

export default CardsInHand;
