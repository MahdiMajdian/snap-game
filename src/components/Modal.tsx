import React from 'react';


interface Props {
  buttonText: string;
  onSubmit: () => void;
}

const Modal = ({buttonText, onSubmit, children}: React.PropsWithChildren<Props>): React.ReactElement => {
  return (
    <div
      className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50'>
      <div className='max-w-xl w-full px-8 pt-8 rounded-lg flex flex-col justify-center items-center bg-white'>
        <p className='mb-12 tracking-tighter leading-tight text-6xl text-violet-600'>
          {children}
        </p>
        <button
          className='button my-8 w-full'
          onClick={onSubmit}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
