import React, { useId, useState } from 'react';

function FaqItem({ questionText, anwserText }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();
  return (
    <div className='border-1 my-4 '>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        href='#'
        className='w-full flex items-center justify-between text-left px-3 py-2'
      >
        <h3 className='font-bold text-xl mx-2'>{questionText}</h3>
        <div className='px-2 py-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={`w-5 h-5 transition-transform duration-300 ${
              open ? 'rotate-45' : ''
            }`}
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
      <div
        id={contentId}
        className={`px-3 pb-3 collapsible ${open ? 'open' : ''}`}
      >
        <p className='p-2'>{anwserText}</p>
      </div>
    </div>
  );
}

export default FaqItem;
