import React, { useState } from 'react';
import PricingBox from './PricingBox';

function Pricing() {
  const [active, setActive] = useState('monthly');

  return (
    <section className='hero-wrap py-12 sm:py-16 lg:py-20'>
      <div className='text-center font-semibold my-6 text-xl'>Tagline</div>
      <h1 className='text-3xl font-bold'>Pricing plan</h1>
      <p className='text-xl font-light mt-3 mb-4'>Some text about pricing</p>

      {/* BOXES */}
      <div className=' border-2 p-2 flex lg:w-[20%] md:w-[40%] mx-auto '>
        <div className=' flex items-center justify-center mx-auto '>
          <button
            className={`px-4 py-2 font-semibold transition 
            ${
              active === 'monthly'
                ? 'bg-accent text-white border-2 border-black'
                : 'bg-transparent text-gray-600'
            }
          `}
            onClick={() => setActive('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 font-semibold transition 
            ${
              active === 'yearly'
                ? 'bg-accent text-white border-2 border-black'
                : 'bg-transparent text-gray-600'
            }
          `}
            onClick={() => setActive('yearly')}
          >
            Yearly
          </button>

          {/* <div className='border-1'>Monthly</div>
          <div className='border-1'>Yearly</div> */}
        </div>
      </div>
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
