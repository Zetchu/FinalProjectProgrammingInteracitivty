import React, { useState } from 'react';
import PricingBox from './PricingBox';

function Pricing() {
  const [active, setActive] = useState('monthly');

  return (
    <section className='py-12 sm:py-16 lg:py-[2%]'>
      <div className='text-center font-semibold my-6 text-xl'>Tagline</div>
      <h1 className='text-3xl font-bold'>Pricing plan</h1>
      <p className='text-xl font-light mt-3 mb-4'>Some text about pricing</p>

      {/* TOGGLE */}
      <div className='mx-auto w-[min(320px,90%)]'>
        <div className=' relative border p-1 '>
          <span
            className={`absolute inset-y-1 left-1 w-1/2  bg-[var(--color-accent)] transition-transform duration-300 ease-out`}
            style={{
              transform:
                active === 'yearly' ? 'translateX(95%)' : 'translateX(0%)',
            }}
            aria-hidden='true'
          />
          <div className='relative grid grid-cols-2'>
            <button
              type='button'
              className={`z-10 px-4 py-2 font-semibold 
                ${
                  active === 'monthly'
                    ? 'text-[var(--color-bg)]'
                    : 'text-[var(--color-fg)]'
                }
          `}
              onClick={() => setActive('monthly')}
            >
              Monthly
            </button>
            <button
              className={`z-10 px-4 py-2 font-semibold 
                  ${
                    active === 'yearly'
                      ? 'text-[var(--color-bg)]'
                      : 'text-[var(--color-fg)]'
                  }`}
              onClick={() => setActive('yearly')}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>
      {/* BOXES */}
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10  items-stretch'>
        <PricingBox
          price={active === 'monthly' ? '19$/mo' : '190$/mo'}
          features={['Sometext1', 'Sometext2', 'Sometext3']}
          plan={'Baisc plan'}
        />

        <PricingBox
          price={active === 'monthly' ? '26$/mo' : '260$/mo'}
          features={[
            'Sometext1',
            'Sometext2',
            'Sometext3',
            'Sometext3',
            'Sometext3',
          ]}
          plan={'Expert plan'}
        />
      </div>
    </section>
  );
}

export default Pricing;
