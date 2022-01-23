import {CardNumber, CardSuit} from './constants';


export type GameStatus = 'ready' | 'play' | 'done'

export type GamePlayer = 'user' | 'robot'

export interface ICard {
  number: CardNumber;
  suit: CardSuit;
};

export interface GameData {
  userPile: ICard[];
  robotPile: ICard[];
  centerPile: ICard[];
  status: GameStatus;
  turn: GamePlayer;
}
