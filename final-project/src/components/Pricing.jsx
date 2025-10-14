import React from 'react';
import PricingBox from './PricingBox';

function Pricing() {
  return (
    <section className='hero-wrap h-[70vh]'>
      <div className='text-center font-semibold my-10 text-xl'>Tagline</div>
      <h1 className='text-3xl font-bold'>Pricing plan</h1>
      <p className='text-xl font-light mt-3 mb-4'>Some text about pricing</p>

      {/* BOXES */}
      <div className='grid grid-cols-2 gap-4 mt-10 items-stretch'>
        {/* <div className='border-1 col-1 flex flex-col justify-between  '>
          <p className='my-[4%] font-bold'>Baisc plan</p>
          <h1 className='text-4xl font-bold'>19$/mo</h1>
          <ul className='my-2 mx-[10%]'>
            <li class='flex items-center  mt-2 text-lg'>
              <svg
                class='w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
              </svg>
              Some text1
            </li>
            <li class='flex items-center mt-2 text-lg'>
              <svg
                class='w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
              </svg>
              Some text2
            </li>
            <li class='flex items-center mt-2 text-lg'>
              <svg
                class='w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
              </svg>
              Some text3
            </li>
          </ul>
          <div className='justify-center'>
            <button className='bg-black  text-white w-[90%] my-[5%] mt-[20%] py-3'>
              <a
                href=''
                target='_blank'
                className='mx-5 '
              >
                Get Started
              </a>
            </button>
          </div>
        </div> */}
        <PricingBox
          price={'19$/mo'}
          features={['Sometext1', 'Sometext2', 'Sometext3']}
          plan={'Baisc plan'}
        />
        <PricingBox
          price={'26$/mo'}
          features={[
            'Sometext1',
            'Sometext2',
            'Sometext3',
            'Sometext3',
            'Sometext3',
          ]}
          plan={'Expert plan'}
        />

        {/* <div className='border-1 col-2'>
          <p className='my-[4%] font-bold'>Expert plan</p>
          <h1 className='text-4xl font-bold'>26$/mo</h1>
          <ul className='my-2 mx-[10%]'>
            <li className='flex items-center mt-2 text-lg'>
              <svg
                className='w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
              </svg>
              Some text1
            </li>
            <li className='flex items-center mt-2 text-lg'>
              <svg
                className='w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
              </svg>
              Some text2
            </li>
            <li className='flex items-center mt-2 text-lg'>
              <svg
                className='w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
              </svg>
              Some text3
            </li>
            <li className='flex items-center mt-2 text-lg'>
              <svg
                className='w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
              </svg>
              Some text1
            </li>
            <li className='flex items-center mt-2 text-lg'>
              <svg
                className='w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400shrink-0'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
              </svg>
              Some text1
            </li>
          </ul>
          <button className='bg-black text-white w-[90%] my-[5%] mt-[20%] py-3'>
            <a
              href=''
              target='_blank'
              className='mx-5 '
            >
              Get Started
            </a>
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default Pricing;
