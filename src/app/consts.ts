import {getRandomTurn} from './modules/game-logic';
import {GameData} from './types';


export enum CardSuit {
  CLUBS = 'clubs',
  HEARTS = 'hearts',
  SPADES = 'spades',
  DIAMONDS = 'diamonds',
} 

export enum CardNumber {
  ACE = 'A',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  TEN = '10',
  JACK = 'J',
  QUEEN = 'Q',
  KING = 'K',
}

export const suits = [
  CardSuit.CLUBS,
  CardSuit.DIAMONDS,
  CardSuit.HEARTS,
  CardSuit.SPADES,
];

export const numbers = [
  CardNumber.ACE,
  CardNumber.TWO,
  CardNumber.THREE,
  CardNumber.FOUR,
  CardNumber.FIVE,
  CardNumber.SIX,
  CardNumber.SEVEN,
  CardNumber.EIGHT,
  CardNumber.NINE,
  CardNumber.TEN,
  CardNumber.JACK,
  CardNumber.QUEEN,
  CardNumber.KING,
];

export const initialGameData: GameData = {
  userPile: [],
  robotPile: [],
  centerPile: [],
  turn: getRandomTurn(),
  status: 'ready',
};


