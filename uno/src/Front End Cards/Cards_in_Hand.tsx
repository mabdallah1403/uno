import { player } from './frontEndPlayerClass.ts';
import.meta.glob<{ default: string }>('../assets/Cards/Generated_Cards/*.png', { eager: true });

import './Cards_in_Hand.css'

function CardsInHand() {
  const cards = player.get_cards();
  return (
    <div className="unselectable">
      {cards.map((cardUrl, index) => ( // generated didn't write this line, may need to change "root" on previous line
        <img key={index} src={cardUrl} alt={`Card ${index + 1}`} className="card_image" draggable={false} /> // added draggable={false} to prevent dragging
      ))}
    </div>
  );
}

export default CardsInHand;
