import React, { useEffect, useRef } from 'react';

function Features() {
  const gridRef = useRef(null);

  useEffect(() => {
    const nodes = gridRef.current?.querySelectorAll('[data-fade]');
    if (!nodes?.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
    );

    nodes.forEach((node, i) => {
      node.style.transitionDelay = `${i * 120}ms`;
      io.observe(node);
    });

    return () => io.disconnect();
  }, []);

  return (
    <section className=' py-20 sm:py-24 lg:py-20'>
      <div
        className='grid lg:grid-cols-2 md:grid-cols-2 text-left'
        ref={gridRef}
      >
        <div
          className='mx-[6%] fade-item'
          data-fade
        >
          <img
            className='border-1 md:h-[60%] '
            src='https://img.freepik.com/premium-vector/futuristic-background-concept_23-2148473541.jpg'
            alt='futuristic vector image'
          />
          <h2 className='font-bold text-3xl my-8'>Long heading</h2>
          <p className='mt-10'>
            Stream responses under 300ms with conversational memory, tools, and
            function calling. Drop in our SDK and get typing indicators, retries
            with jitter, and version pinning out of the box.
          </p>
          <button
            href='#'
            type='button'
            className=' group inline-flex items-center  gap-2 font-semibold my-4'
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

        <div
          className='mx-[6%] fade-item'
          data-fade
        >
          <img
            className='border-1 md:h-[60%]'
            src='https://www.creativefabrica.com/wp-content/uploads/2021/09/14/Abstract-futuristic-blue-background-Graphics-17251979-1.jpg'
            alt='futuristic vector imag2'
          />
          <h2 className='font-bold text-3xl my-8'>Long heading</h2>
          <p className='mt-10'>
            SOC 2–ready controls, SSO/SAML, audit logs, and regional data
            residency. Your prompts and outputs never train our foundation
            models unless you opt in. Ship confidently with per-env keys and
            rate-limit guarantees.
          </p>
          <button
            type='button'
            href='#'
            className=' group inline-flex items-center gap-2 font-semibold  my-4'
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

export default Features;
