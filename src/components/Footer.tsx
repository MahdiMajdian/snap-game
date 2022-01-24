import React from 'react';


interface Props {
  onClick: () => void;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Footer = ({value, onClick, onChange}: Props): React.ReactElement => {
  return (
    <div className='p-4 md:m-8 mt-8 flex flex-col md:flex-row justify-between items-center rounded bg-purple-400'>
      <button
        className='button mb-4 md:m-0'
        onClick={onClick}>
        Restart the Game
      </button>
      <div className='flex items-center gap-4'>
        <p className='font-medium text-white'>Computer snaps every {value} seconds: </p>
        <input
          className='select'
          max={10}
          min={1}
          type={'number'} 
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Footer;
