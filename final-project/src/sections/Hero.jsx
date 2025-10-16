export default function Hero() {
  return (
    <section className='hero-wrap bleed-x p-0 py-16 sm:py-20 lg:py-24'>
      {/* decorative diamond line */}
      <div
        className='hero-diamond'
        aria-hidden='true'
      />

      <div className='mx-auto max-w-7xl pi-fluid py-20 sm:py-28'>
        <h1 className='font-extrabold leading-tight tracking-tight text-[clamp(2.25rem,7vw,4rem)]'>
          Build the <span className='text-[var(--color-accent)]'>Future</span>{' '}
          Today
        </h1>

        <p className='mt-5 text-center text-balance text-[clamp(1.05rem,2.5vw,1.25rem)] text-muted'>
          Launch AI features in days, not months. Connect our API, ship your
          first assistant, and scale to millions—without scaling your infra
          team.
          <br className='hidden sm:block' />
          Private by default, blazingly fast, and designed for real products.
        </p>

        <div className='mt-9 flex flex-wrap gap-4 justify-center'>
          <a
            href='#get-started'
            className='btn-notch btn-notch--primary'
          >
            Get Started
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              aria-hidden='true'
            >
              <path
                d='M5 12h14m0 0-6-6m6 6-6 6'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>

          <a
            href='#learn-more'
            className='btn-notch btn-notch--ghost'
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
