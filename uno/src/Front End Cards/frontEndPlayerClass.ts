const cardImages = import.meta.glob('../assets/Cards/Generated_Cards/*.png', { eager: true }) as Record<string, { default: string }>;

function parseFileNames(card: string) {
    
    return (`${card.split('/').pop()?.replace('.png', '')}`);   
}

class PlayerHand {
    protected deck = cardImages;
    protected cards: Map<string,string>;
    protected player_id: number;
    constructor(player_id: number) {
        
        this.cards = new Map<string,string>();


        // this.cards.set('Red_0', cardImages['../assets/Cards/Generated_Cards/Red_0.png'].default);
        // this.cards.set('Blue_5', cardImages['../assets/Cards/Generated_Cards/Blue_5.png'].default);
        // this.cards.set('Green_2', cardImages['../assets/Cards/Generated_Cards/Green_2.png'].default);
        // this.cards.set('Yellow_9', cardImages['../assets/Cards/Generated_Cards/Yellow_9.png'].default);
        // this.cards.set('Red_Skip', cardImages['../assets/Cards/Generated_Cards/Red_Skip.png'].default);
        // this.cards.set('Red_2', cardImages['../assets/Cards/Generated_Cards/Red_2.png'].default);
        
        for (let i = 0; i < 2; i++) { 
            this.draw_card();
        }

        this.player_id = player_id;
    }

    add_card(card: string) {
        this.cards.set(parseFileNames(card), card);
    }

    get_cards(): Map<string,string> {
        return this.cards; // return a copy instead of the actual array RETURN MUTABLE OBJECTS
    }

    remove_card(cardName: string) { // uses parsed card name   
        this.cards.delete(cardName);
    }

    getCardFromName(cardName: string) { // uses parsed card name
        return this.cards.get(cardName);
    }

    draw_card() {
        const cardNames = Object.keys(this.deck);
        const randomIndex = Math.floor(Math.random() * cardNames.length);
        const card = cardNames[randomIndex];
        this.cards.set(parseFileNames(card), cardImages[card].default);
        delete this.deck[card];
    }

    
    get_playerID(): number {
        return this.player_id;
    }

} 
export const player = new PlayerHand(0);