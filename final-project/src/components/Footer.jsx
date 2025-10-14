export default function Footer() {
  return (
    <footer className='mt-24 border-t border-[color-mix(in_srgb,var(--color-fg)_12%,transparent)]'>
      <div className='mx-auto max-w-7xl pi-fluid py-8 text-sm flex items-center justify-between'>
        <p>© {new Date().getFullYear()} FutureSite</p>
        <nav aria-label='Footer'>
          <ul className='flex gap-6'>
            <li>
              <a
                className='hover:underline'
                href='#privacy'
              >
                Privacy
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
    </footer>
  );
}
