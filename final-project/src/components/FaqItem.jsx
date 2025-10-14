import React from 'react';

function FaqItem({ questionText, anwserText }) {
  return (
    <div className='border-1 '>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        href='#'
        className='w-full flex items-center justify-between text-left px-3 py-2'
      >
        <h3 className='font-bold text-xl mx-2'>Qustion text goes here</h3>
        <div className='mx-2 my-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-5 h-5'
            aria-hidden='true'
          >
            <circle
              cx='12'
              cy='12'
              r='9'
            />
            <path d='M12 8v8M8 12h8' />
          </svg>
        </div>
      </button>
      <div className={`${open ? 'mt-3' : 'mt-0 hidden'}`}>
        <p className='p-2'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      {/* <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p> */}
    </div>
  );
}

export default FaqItem;
