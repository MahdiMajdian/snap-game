import React from 'react';


interface Props {
  handleGameStart: () => void;
};

const StartPage = ({handleGameStart}: Props): React.ReactElement => {

  return (
    <div className='absolute inset-0 flex justify-center items-center'>
      <button className='button' onClick={handleGameStart}>
        Start Game
      </button>
    </div>
  );
};

export default StartPage;
