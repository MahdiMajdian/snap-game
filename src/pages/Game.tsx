import React, {useEffect, useState} from 'react';

import {drawCard, snap} from '../app/modules/game-logic';
import {GameData, GamePlayer} from '../app/types';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';


interface Props {
  gameData: GameData;
  setGameData: React.Dispatch<React.SetStateAction<GameData>>;
  handleGameStart: () => void;
}

const GamePage = ({gameData, setGameData, handleGameStart}: Props): React.ReactElement => {
  const {centerPile, userPile, robotPile, turn, status} = gameData;
  const [snapRate, setSnapRate] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSnap('robot');
    }, snapRate * 1000);
    return () => clearInterval(timer);
  }, [snapRate]);

  useEffect(() => {
    if(status === 'done'){
      return;
    }
    if(gameData.robotPile.length === 0 || gameData.userPile.length === 0){
      setGameData((data) => ({...data, status: 'done'}));
    }
  }, [gameData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleDraw('robot');
    }, Math.random() * 500 + 500);
    return () => {clearTimeout(timer);};
  }, [turn]);

  const handleDraw = (player: GamePlayer): void => {
    if(player !== turn || status === 'done'){
      return;
    }
    setGameData((gameData) => drawCard(gameData, player));
  };
  
  const handleSnap = (player: GamePlayer): void => {
    setGameData((gameData) => snap(gameData, player));
  };

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='grid grid-cols-2 md:grid-cols-3'>
        <div className='col-span-2 md:col-span-3 md:py-8 md:px-16 flex justify-between items-start'>
          <Header
            robotRemainingCards={robotPile.length}
            turn={turn}
            userRemainingCards={userPile.length}
          />
        </div>

        <div className='md:row-span-4 md:col-span-1 mx-auto md:px-16'>
          <Card
            className={`card border-4 ${ turn === 'robot' ? 'active' : 'inactive'}`}
            hidden={robotPile.length === 0}
            image='assets/back.png'
          />
        </div>
        <div className='mb-4 md:mb-0 px-20 md:px-8 col-span-2 row-start-2 md:col-span-1 md:row-start-auto'>
          <Card
            className={!centerPile.length ? 'border-4 cursor-auto' : ''}
            onClick={(): void => handleSnap('user')}>
            { centerPile.length !== 0 ?
              <img
                alt='card'
                className='cursor-pointer'
                src={`assets/${centerPile.at(-1)?.number}-${centerPile.at(-1)?.suit}.png`}
              /> : 
              <img
                alt='card'
                src={'assets/empty.png'}
              />
            }
          </Card>
        </div>
        <div className='md:row-span-4 md:col-span-1 mx-auto md:px-16'>
          <Card
            className={`card border-4 ${ turn === 'user' ? 'active' : 'inactive'}`}
            hidden={userPile.length === 0}
            image='assets/back.png'
            onClick={(): void => handleDraw('user')}
          />
        </div>
      </div>

      <Footer
        value={snapRate}
        onChange={(event): void => setSnapRate(Number(event.target.value))}
        onClick={handleGameStart}
      />
    </div>
  );
};

export default GamePage;
