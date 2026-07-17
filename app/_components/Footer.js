'use client';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-bbSurface border-t border-bbBorder text-bybikeBlack relative'>
      <button
        type='button'
        onClick={() => {
          window.open('https://www.eiturbanmobility.eu/', '_blank')?.focus();
        }}
        className='absolute cursor-pointer w-[18rem] sm:w-[22rem] lg:w-[28rem] h-11 lg:h-12 flex justify-end bg-white border border-bbBorder bottom-28 sm:bottom-8 py-2 pr-6 rounded-r-2xl shadow-sm'
      >
        <img src='/footer_eit.png' className='h-full' alt='EIT Urban Mobility' />
      </button>

      <div className='bb-section flex flex-col gap-10 md:flex-row md:gap-8 py-12 lg:py-14'>
        <div className='md:max-w-xs'>
          <h2 className='mb-3 font-azonix text-2xl'>
            BY<span className='text-bybikeBlue'>BIKE</span>
          </h2>
          <p className='bb-subtitle text-sm'>
            All-in-one micromobility solutions for modern cities.
          </p>
        </div>

        <div className='flex gap-12 sm:gap-16 grow'>
          <div className='flex flex-col gap-2'>
            <p className='bb-label mb-2'>Company</p>
            <Link href='/about-us' className='text-sm text-bbMuted hover:text-bybikeBlue'>
              About Us
            </Link>
            <Link href='/demo' className='text-sm text-bbMuted hover:text-bybikeBlue'>
              Contact
            </Link>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='bb-label mb-2'>Social</p>
            <a
              href='https://www.linkedin.com/company/bybiketr/'
              className='text-sm text-bbMuted hover:text-bybikeBlue'
            >
              LinkedIn
            </a>
            <a
              href='https://instagram.com/bybiketurkiye/'
              className='text-sm text-bbMuted hover:text-bybikeBlue'
            >
              Instagram
            </a>
          </div>
        </div>

        <div className='w-full md:max-w-sm'>
          <h2 className='bb-title text-xl mb-1'>Get the latest news</h2>
          <p className='bb-subtitle text-sm mb-4'>Join our newsletter</p>
          <div className='flex gap-2 mb-8'>
            <input
              type='email'
              placeholder='Your e-mail address'
              className='bb-input text-sm'
            />
            <button type='button' className='bb-btn bb-btn-teal shrink-0 text-sm px-5'>
              Subscribe
            </button>
          </div>
          <div className='flex justify-between text-xs text-bbMuted pb-24 sm:pb-0'>
            <span>© 2023 ByBike</span>
            <div className='text-end flex flex-col gap-1'>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
