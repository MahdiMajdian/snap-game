import React from 'react';

import {GamePlayer} from '../app/types';


interface Props {
  turn: GamePlayer;
  userRemainingCards: number;
  robotRemainingCards: number;
}

const Header = ({turn, userRemainingCards, robotRemainingCards}: Props): React.ReactElement => {
  return (
    <>
      <div className='py-4 md:py-8 pl-4 flex justify-center items-start'>
        <div className='flex gap-2'>
          <svg className='w-12 h-12 text-violet-700 fill-current' viewBox='0 0 640 512'>
            <path d='M32,224H64V416H32A31.96166,31.96166,0,0,1,0,
            384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,
            64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,
            0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,
            256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,
            0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,
            128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,
            31.96166,0,0,1,640,256Z'
            />
          </svg>
          <div>
            <p className='font-bold text-lg text-slate-800'>Computer</p>
            <p className='font-medium text-sm text-slate-500'>{robotRemainingCards} cards left</p>
          </div>
        </div>
        <svg
          className={`w-10 h-10 ml-2 text-violet-700 fill-current ${turn !== 'robot' && 'invisible'}`}
          viewBox='0 0 24 24'>
          <path d='M6,7H18A5,5 0 0,1 23,12A5,5 0 0,1 18,17C16.36,17 14.91,16.21 14,15H10C9.09,16.21 7.64,17 6,
              17A5,5 0 0,1 1,12A5,5 0 0,1 6,7M19.75,9.5A1.25,1.25 0 0,0 18.5,10.75A1.25,1.25 0 0,0 19.75,12A1.25,
              1.25 0 0,0 21,10.75A1.25,1.25 0 0,0 19.75,9.5M17.25,12A1.25,1.25 0 0,0 16,13.25A1.25,1.25 0 0,0 17.25,
              14.5A1.25,1.25 0 0,0 18.5,13.25A1.25,1.25 0 0,0 17.25,12M5,9V11H3V13H5V15H7V13H9V11H7V9H5Z'
          />
        </svg>
      </div>
      <div className='py-4 md:py-8 pr-4 flex justify-center items-start'>
        <div className='flex gap-2'>
          <svg className='w-12 h-12 text-violet-700 fill-current' viewBox='0 0 24 24'>
            <path d='M5,1C5,3.7 6.56,6.16 9,7.32V22H11V15H13V22H15V7.31C17.44,6.16 19,3.7 19,
            1H17A5,5 0 0,1 12,6A5,5 0 0,1 7,1M12,1C10.89,1 10,1.89 10,3C10,4.11 10.89,5 12,
            5C13.11,5 14,4.11 14,3C14,1.89 13.11,1 12,1Z'
            />
          </svg>
          <div>
            <p className='font-bold text-lg text-slate-800'>User</p>
            <p className='font-medium text-sm text-slate-500'>{userRemainingCards} cards left</p>
          </div>
        </div>
        <svg
          className={`w-10 h-10 ml-2 text-violet-700 fill-current ${turn !== 'user' && 'invisible'}`}
          viewBox='0 0 24 24'>
          <path d='M6,7H18A5,5 0 0,1 23,12A5,5 0 0,1 18,17C16.36,17 14.91,16.21 14,15H10C9.09,16.21 7.64,17 6,
              17A5,5 0 0,1 1,12A5,5 0 0,1 6,7M19.75,9.5A1.25,1.25 0 0,0 18.5,10.75A1.25,1.25 0 0,0 19.75,12A1.25,
              1.25 0 0,0 21,10.75A1.25,1.25 0 0,0 19.75,9.5M17.25,12A1.25,1.25 0 0,0 16,13.25A1.25,1.25 0 0,0 17.25,
              14.5A1.25,1.25 0 0,0 18.5,13.25A1.25,1.25 0 0,0 17.25,12M5,9V11H3V13H5V15H7V13H9V11H7V9H5Z'
          />
        </svg>
      </div>
    </>
  );
};

export default Header;
