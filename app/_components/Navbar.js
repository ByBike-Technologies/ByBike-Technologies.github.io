'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [selected, setSelected] = useState(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();

  const handleSelection = (int) => {
    if (selected === int) {
      setSelected(null);
    } else setSelected(int);
  };

  const closeAll = () => {
    setMenuOpened(false);
    setSelected(null);
  };

  return (
    <>
      <header className='fixed z-50 w-screen select-none -mt-[5rem] bg-white/95 backdrop-blur border-b border-bbBorder h-[5rem] px-3 md:px-12 lg:px-24 flex items-center justify-between text-bybikeBlack'>
        <Link
          onClick={closeAll}
          href='/'
          className='ml-2 sm:ml-0 font-azonix text-2xl tracking-wide text-bybikeBlack'
        >
          BY<span className='text-bybikeBlue'>BIKE</span>
        </Link>

        <button
          type='button'
          aria-label='Toggle menu'
          onClick={() => setMenuOpened(!menuOpened)}
          className='mr-2 sm:hidden p-2 rounded-full border border-bbBorder'
        >
          <svg width='22' height='14' viewBox='0 0 28 16' fill='none'>
            <line
              className={`${
                menuOpened ? 'rotate-45 -translate-y-[0.3rem]' : ''
              } origin-left duration-300 transition-transform`}
              y1='1'
              x2='28'
              y2='1'
              stroke='#0B0E13'
              strokeWidth='2'
            />
            <line
              className={`${
                menuOpened ? 'opacity-0' : ''
              } duration-200 transition-opacity`}
              y1='8'
              x2='28'
              y2='8'
              stroke='#0B0E13'
              strokeWidth='2'
            />
            <line
              className={`${
                menuOpened ? '-rotate-45 translate-y-[0.3rem]' : ''
              } origin-left duration-300 transition-transform`}
              y1='15'
              x2='28'
              y2='15'
              stroke='#0B0E13'
              strokeWidth='2'
            />
          </svg>
        </button>

        <nav className='hidden sm:flex items-center gap-3 lg:gap-6 text-sm font-medium'>
          <div
            onClick={() => handleSelection(1)}
            className='relative flex items-center gap-1.5 cursor-pointer px-2 py-1 text-bbMuted hover:text-bybikeBlack'
          >
            Products
            <svg
              className={`transition-transform ${
                selected === 1 ? 'rotate-180' : ''
              }`}
              width='12'
              height='8'
              viewBox='0 0 17 10'
              fill='none'
            >
              <path
                d='M1.00008 1.00008L8.29325 8.29289M16.2932 1L8.29325 9'
                stroke='currentColor'
              />
            </svg>
            <div
              className={`absolute left-0 top-full mt-3 flex flex-col gap-1 min-w-[11rem] transition-all ${
                selected === 1
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 pointer-events-none -translate-y-1'
              }`}
            >
              <Link
                onClick={closeAll}
                href='/software'
                className={`bb-card px-4 py-3 text-sm ${
                  pathname === '/software'
                    ? 'border-bybikeBlue text-bybikeBlue'
                    : 'text-bybikeBlack'
                }`}
              >
                Software Solutions
              </Link>
              <Link
                onClick={closeAll}
                href='/e-dock'
                className={`bb-card px-4 py-3 text-sm ${
                  pathname === '/e-dock'
                    ? 'border-bybikeBlue text-bybikeBlue'
                    : 'text-bybikeBlack'
                }`}
              >
                E-Dock
              </Link>
            </div>
          </div>

          <Link
            onClick={closeAll}
            href='/pricing'
            className={`px-2 py-1 ${
              pathname === '/pricing'
                ? 'text-bybikeBlue'
                : 'text-bbMuted hover:text-bybikeBlack'
            }`}
          >
            Pricing
          </Link>

          <div
            onClick={() => handleSelection(2)}
            className='relative flex items-center gap-1.5 cursor-pointer px-2 py-1 text-bbMuted hover:text-bybikeBlack'
          >
            Company
            <svg
              className={`transition-transform ${
                selected === 2 ? 'rotate-180' : ''
              }`}
              width='12'
              height='8'
              viewBox='0 0 17 10'
              fill='none'
            >
              <path
                d='M1.00008 1.00008L8.29325 8.29289M16.2932 1L8.29325 9'
                stroke='currentColor'
              />
            </svg>
            <div
              className={`absolute left-0 top-full mt-3 flex flex-col gap-1 min-w-[10rem] transition-all ${
                selected === 2
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 pointer-events-none -translate-y-1'
              }`}
            >
              <Link
                onClick={closeAll}
                href='/about-us'
                className={`bb-card px-4 py-3 text-sm ${
                  pathname === '/about-us'
                    ? 'border-bybikeBlue text-bybikeBlue'
                    : 'text-bybikeBlack'
                }`}
              >
                About Us
              </Link>
              <Link
                onClick={closeAll}
                href='/team'
                className={`bb-card px-4 py-3 text-sm ${
                  pathname === '/team'
                    ? 'border-bybikeBlue text-bybikeBlue'
                    : 'text-bybikeBlack'
                }`}
              >
                Our Team
              </Link>
            </div>
          </div>

          <Link href='/demo' onClick={closeAll} className='bb-btn bb-btn-teal'>
            Request a Demo
          </Link>
        </nav>
      </header>

      <div
        className={`${
          menuOpened ? 'opacity-100' : 'hidden opacity-0'
        } sm:hidden transition-opacity flex justify-center items-center h-[100dvh] inset-0 z-50 mt-[5rem] fixed bg-white`}
      >
        <div className='flex flex-col text-lg font-medium items-center gap-6 text-bybikeBlack'>
          <Link onClick={closeAll} href='/software'>
            Software Solutions
          </Link>
          <Link onClick={closeAll} href='/e-dock'>
            E-Dock
          </Link>
          <Link onClick={closeAll} href='/pricing'>
            Pricing
          </Link>
          <Link onClick={closeAll} href='/about-us'>
            About Us
          </Link>
          <Link onClick={closeAll} href='/team'>
            Our Team
          </Link>
          <Link onClick={closeAll} href='/demo' className='bb-btn bb-btn-teal mt-2'>
            Request a Demo
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
