import React from 'react';

function Images() {
  return (
    <section className=' py-20 sm:py-24 lg:py-2'>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 text-left'>
        <div className='mx-[6%]'>
          <img
            className='border-1 md:h-[60%] '
            src='https://img.freepik.com/premium-vector/futuristic-background-concept_23-2148473541.jpg'
            alt='futuristic vector image'
          />
          <h2 className='font-bold text-3xl my-8'>Long heading</h2>
          <p className='mt-10'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sint
            expedita nostrum architecto deserunt eos minus eveniet odit, tenetur
            dignissimos repellendus quisquam error ad incidunt totam qui quasi
            quod dolor!
          </p>
          <button
            href='#'
            type='button'
            className=' inline-flex items-center  gap-2 font-semibold my-4'
          >
            See more
            <svg
              className='w-4 h-4 transition-transform group-hover:translate-x-0.5'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden='true'
            >
              <path d='M9 18l6-6-6-6' />
            </svg>
          </button>
        </div>

        <div className='mx-[6%]'>
          <img
            className='border-1 md:h-[60%]'
            src='https://www.creativefabrica.com/wp-content/uploads/2021/09/14/Abstract-futuristic-blue-background-Graphics-17251979-1.jpg'
            alt='futuristic vector imag2'
          />
          <h2 className='font-bold text-3xl my-8'>Long heading</h2>
          <p className='mt-10'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sint
            expedita nostrum architecto deserunt eos minus eveniet odit, tenetur
            dignissimos repellendus quisquam error ad incidunt totam qui quasi
            quod dolor!
          </p>
          <button
            type='button'
            href='#'
            className=' inline-flex items-center gap-2 font-semibold  my-4'
          >
            See more
            <svg
              className='w-4 h-4 '
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              aria-hidden='true'
            >
              <path d='M9 18l6-6-6-6' />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Images;
