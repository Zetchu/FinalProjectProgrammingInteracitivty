import React, { useState } from 'react';
import FaqItem from './FaqItem';
import { FAQ_ITEMS } from '../constants/faqQuestions';

function FAQ() {
  return (
    <section className=' py-20 sm:py-24 lg:py-2'>
      <h1 className='text-4xl font-bold'>FAQs</h1>
      <p className='text-xl font-light mt-3 mb-4'>
        Everything you’re wondering, explained in plain language.
      </p>

      {FAQ_ITEMS.map((item) => (
        <FaqItem
          key={item.id}
          questionText={item.questionText}
          anwserText={item.anwserText}
        />
      ))}
      <h1 className='text-2xl font-semibold mt-[8%]'>Still have questions?</h1>
      <p className='text-xl font-light mt-3 mb-4'>Don't hesitate!</p>
      <button
        href='#'
        className='border-1 p-4'
      >
        {' '}
        Contact us
      </button>
    </section>
  );
}

export default FAQ;
