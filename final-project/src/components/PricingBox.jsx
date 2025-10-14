import React from 'react';

function PricingBox({ plan, features, price }) {
  return (
    <div className='border-1  grid grid-rows-[auto_auto_1fr_auto] gap-4 p-6  '>
      <p className='my-[4%] font-bold'>{plan}</p>
      <h1 className='text-4xl font-bold'>{price}</h1>
      <ul className='space-y-2 mx-[10%]'>
        {features.map((feature, index) => (
          <li
            key={index}
            className='flex items-center  mt-2 text-lg'
          >
            <svg
              className='w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className='justify-center'>
        <button className='bg-black  text-white font-semibold w-[90%] my-[5%] mt-[20%] py-3 hover:bg-accent transition'>
          <a
            href=''
            target='_blank'
            className='mx-5 '
          >
            Get Started
          </a>
        </button>
      </div>
    </div>
  );
}

export default PricingBox;
