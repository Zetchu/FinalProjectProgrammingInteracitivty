import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Click outside to close (mobile)
  useEffect(() => {
    function onClick(e) {
      if (!open) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [open]);

  return (
    <header className='border-b  bg-white border-[color-mix(in_srgb,var(--color-fg)_12%,transparent)] backdrop-blur supports-[backdrop-filter]:backdrop-blur'>
      <div className='mx-auto max-w-7xl pi-fluid py-4 flex items-center justify-between '>
        <a
          href='#'
          aria-label='FutureSite home'
          className='font-bold text-lg tracking-tight'
        >
          FutureSite
        </a>

        <button
          ref={btnRef}
          onClick={() => setOpen((v) => !v)}
          className='sm:hidden inline-flex items-center gap-2 px-3 py-2 rounded-md border border-[color-mix(in_srgb,var(--color-fg)_18%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]'
          aria-controls='primary-navigation'
          aria-expanded={open ? 'true' : 'false'}
        >
          <span className='sr-only'>Toggle navigation</span>
          <svg
            width='22'
            height='22'
            viewBox='0 0 24 24'
            fill='none'
            aria-hidden='true'
          >
            <path
              d='M3 6h18M3 12h18M3 18h18'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </button>

        <nav
          id='primary-navigation'
          aria-label='Primary'
          ref={menuRef}
          className={[
            'sm:block',
            'sm:static absolute left-0 right-0 top-full',
            'bg-bg sm:bg-transparent',
            'border-b sm:border-0',
            open ? 'block' : 'hidden',
          ].join(' ')}
        >
          <ul className='sm:flex items-center gap-8 pi-fluid py-3 sm:py-0'>
            <li>
              <a
                className='hover:underline'
                href='#features'
              >
                Features
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='#about'
              >
                About
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='#contact'
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
