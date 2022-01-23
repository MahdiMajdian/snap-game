import React from 'react';


type Props = {
  className?: string;
  onClick?: () => void;
} & (
  {
    image: string;
    hidden?: boolean;
    children?: undefined;
  } |
  {
    image?: undefined;
    hidden?: undefined;
    children: React.ReactNode;
  }
)

const Card = ({className, hidden, image, onClick, children}: Props): React.ReactElement => {
  return (
    <button
      className={`rounded-2xl transition-all duration-300 ${className}`}
      onClick={onClick}>
      { image === undefined ? 
          children
          :
          <img
            alt='card'
            className={hidden ? 'invisible' : ''}
            src={image}
          />
      }
    </button>
  );
};

export default Card;
