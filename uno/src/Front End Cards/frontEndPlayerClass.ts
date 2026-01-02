const cardImages = import.meta.glob('../assets/Cards/Generated_Cards/*.png', { eager: true }) as Record<string, { default: string }>;
 
class PlayerHand {
    protected cards: string[];
    protected player_id: number;
    constructor(player_id: number) {
        this.cards = [
            cardImages['../assets/Cards/Generated_Cards/Blue_2.png'].default,
            cardImages['../assets/Cards/Generated_Cards/Red_5.png'].default,
            cardImages['../assets/Cards/Generated_Cards/Green_Reverse.png'].default,
            cardImages['../assets/Cards/Generated_Cards/+4 Swap Color.png'].default
        ];
        this.player_id = player_id;
    }

    add_card(card: string) {
        this.cards.push(card);
    }

    get_cards(): string[] {
        return this.cards; // return a copy instead of the actual array RETURN MUTABLE OBJECTS
    }

    remove_card(index: number) {
        // add logic to check that played card matches previous card, 
        this.cards.splice(index, 1);
    }

    getCardFromIndex(index: number) {
        return this.cards[index];
    }

    draw_card(card: string) {
        // draw a card from the deck and add to hand
        this.cards.push(card);
    }

    
    get_playerID(): number {
        return this.player_id;
    }

} 
export const player = new PlayerHand(0);