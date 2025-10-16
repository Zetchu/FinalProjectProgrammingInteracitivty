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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    const { style } = document.body;
    const prev = style.overflow;
    style.overflow = open ? 'hidden' : prev || '';
    return () => {
      style.overflow = prev || '';
    };
  }, [open]);

  return (
    <header className='sticky top-0 inset-x-0 z-50 bg-bg/85 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-[color-mix(in_srgb,var(--color-fg)_12%,transparent)]'>
      {' '}
      <div className='mx-auto max-w-7xl pi-fluid py-4 flex items-center justify-between'>
        {/* Brand */}
        <a
          href='#'
          aria-label='FutureSite home'
          className='font-bold text-lg tracking-tight'
        >
          FutureSite
        </a>

        {/* Desktop nav (right-aligned) */}
        <nav className='hidden sm:block'>
          <ul className='flex items-center gap-8'>
            <li>
              <a
                className='hover:underline nav-link'
                href='#features'
              >
                Features
              </a>
            </li>
            <li>
              <a
                className='hover:underline nav-link'
                href='#pricing'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className='hover:underline nav-link'
                href='#faq'
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          ref={btnRef}
          onClick={() => setOpen((v) => !v)}
          className='sm:hidden inline-flex items-center gap-2 px-3 py-2 rounded-md border border-[color-mix(in_srgb,var(--color-fg)_18%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]'
          aria-controls='primary-navigation'
          aria-expanded={open}
        >
          <span className='sr-only'>Toggle navigation</span>
          {/* hamburger / close */}
          {open ? (
            <svg
              width='22'
              height='22'
              viewBox='0 0 24 24'
              fill='none'
              aria-hidden='true'
            >
              <path
                d='M6 6l12 12M18 6L6 18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>
      {/* Mobile menu: animated panel */}
      <nav
        id='primary-navigation'
        aria-label='Primary'
        ref={menuRef}
        className='sm:hidden'
      >
        <div
          className={[
            // panel container
            'overflow-hidden bg-bg border-b border-[color-mix(in_srgb,var(--color-fg)_12%,transparent)] shadow-md',
            // animation
            'transition-[max-height,opacity,transform] duration-300 ease-out',
            open
              ? 'max-h-96 opacity-100 translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-1',
          ].join(' ')}
        >
          <ul className='flex flex-col gap-4 pi-fluid py-4'>
            <li>
              <a
                className='py-1 hover:underline'
                href='#features'
                onClick={() => setOpen(false)}
              >
                Features
              </a>
            </li>
            <li>
              <a
                className='py-1 hover:underline'
                href='#about'
                onClick={() => setOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className='py-1 hover:underline'
                href='#contact'
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
