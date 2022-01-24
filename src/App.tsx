import {useState} from 'react';

import {initialGameData} from './app/constants';
import {startGame} from './app/modules/game-logic';
import {GameData} from './app/types';
import Modal from './components/Modal';
import GamePage from './pages/Game';
import StartPage from './pages/Start';


const App = (): React.ReactElement => {
  const [gameData, setGameData] = useState<GameData>(initialGameData);

  const handleGameStart = (): void => {
    setGameData(startGame());
  };

  return (
    <div>
      { gameData.status === 'ready' && 
        <StartPage
          handleGameStart={handleGameStart}
        />
      }
      { gameData.status !== 'ready' && 
        <GamePage
          gameData={gameData}
          handleGameStart={handleGameStart}
          setGameData={setGameData}
        />
      }
      { gameData.status === 'done' &&
        <Modal
          buttonText='Restart the game'
          onSubmit={handleGameStart}>
          {gameData.userPile.length === 0 ? 'Robot Won!' : 'You Won!'}
        </Modal>
      }
    </div>
  );
};

export default App;
