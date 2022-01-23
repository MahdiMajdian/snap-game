import {CardNumber, CardSuit, numbers, suits} from '../constants';
import {GameData, GamePlayer, ICard} from '../types';


export const generateDeck = (): ICard[] => {
  const CardDeck: ICard[] = [];

  suits.forEach((suit: CardSuit) => numbers.forEach((number: CardNumber) => {
    CardDeck.push({suit, number});
  }));

  return CardDeck;
};

export const shuffleDeck = (CardDeck: ICard[]): ICard[] => {
  const ShuffledDeck = [];
  const indexes = Array(CardDeck.length).fill(0).map(({}, index) => index);

  while(indexes.length > 0) {
    // grab a random index of indexes array
    const randomIndex = Math.floor(Math.random() * indexes.length);
    // grab a random item from indexes and removes it from there
    const randomCardIndex = indexes.splice(randomIndex, 1)[0];
    // use the above unique index to grab an item from CardDeck
    ShuffledDeck.push(CardDeck[randomCardIndex]);
  }

  return ShuffledDeck;
};

export const getRandomTurn = (): GamePlayer => {
  const randomIndex = Math.round(Math.random());
  const turn = <GamePlayer>['user', 'robot'][randomIndex];
  return turn;
};

export const drawCard = (gameData: GameData, player: GamePlayer): GameData => {
  const newGameData = {...gameData};
  if(gameData.status === 'done'){
    return gameData;
  }
  if (player === 'user'){
    const drawnCard = newGameData.userPile.pop();
    drawnCard && newGameData.centerPile.push(drawnCard);
    newGameData.turn = 'robot';
  }else{
    const drawnCard = newGameData.robotPile.pop();
    drawnCard && newGameData.centerPile.push(drawnCard);
    newGameData.turn = 'user';
  }

  return newGameData;
};

export const snap = (gameData: GameData, player: GamePlayer): GameData => {
  const newGameData = {...gameData};
  const {centerPile} = gameData;

  if (centerPile.length < 2) {
    return gameData;
  }
  const firstCard = centerPile.at(-1);
  const secondCard = centerPile.at(-2);
  if (firstCard?.number === secondCard?.number){
    if(player === 'user'){
      newGameData.userPile.unshift(...newGameData.centerPile);
    }else {
      newGameData.robotPile.unshift(...newGameData.centerPile);
    }
    newGameData.centerPile = [];
  }
  return newGameData;
};

export const startGame = (): GameData => {
  const shuffledDeck = shuffleDeck(generateDeck());

  const gameData: GameData = {
    userPile: [...shuffledDeck.splice(0, shuffledDeck.length / 2)],
    robotPile: [...shuffledDeck],
    centerPile: [],
    turn: getRandomTurn(),
    status: 'play'
  };
  
  return gameData;
};
