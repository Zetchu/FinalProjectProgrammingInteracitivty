import React, { useState } from 'react';
import FaqItem from '../components/FaqItem';
import { FAQ_ITEMS } from '../constants/faqQuestions';
import useStaggeredFadeIn from '../utils/staggeredFadeIn';

function FAQ() {
  const fadeRef = useStaggeredFadeIn({ baseDeplay: 120 });
  return (
    <section
      id='faq'
      ref={fadeRef}
      className=' py-20 sm:py-24 lg:py-2'
    >
      <h1 className='text-4xl font-bold fade-item'>FAQs</h1>
      <p className='text-xl font-light mt-3 mb-4 fade-item'>
        Everything you’re wondering, explained in plain language.
      </p>
      <div className='fade-item'>
        {FAQ_ITEMS.map((item) => (
          <FaqItem
            key={item.id}
            questionText={item.questionText}
            anwserText={item.anwserText}
          />
        ))}
      </div>
      <h1 className='text-2xl font-semibold mt-[8%] fade-item'>
        Still have questions?
      </h1>
      <p className='text-xl font-light mt-3 mb-4 fade-item'>Don't hesitate!</p>
      <button
        href='#'
        className='border-1 p-4 fade-item btn-notch btn-notch--primary'
      >
        {' '}
        Contact us
      </button>
    </section>
  );
}

export default FAQ;
