'use client';

import React from 'react';

const data = [
  {
    title: 'Tailor Made',
    description:
      'We customize the driver application with a special color palette and designs tailored to your brand.',
  },
  {
    title: 'Online Invoice',
    description:
      'Our software infrastructure is fully integrated with Paraşüt, and users can view their invoices through the app.',
  },
  {
    title: 'Vehicle',
    description:
      'Thanks to our software infrastructure, we can quickly integrate vehicles from global manufacturers such as Segway and OKAI into the system.',
  },
  {
    title: 'Payment',
    description:
      'Instant money withdrawal is possible through our payment infrastructure. Integrations with various payment providers will be optional based on customer demand.',
  },
];

const Carousel = ({ activeIndex, setActiveIndex }) => {
  const active = data[activeIndex] ?? data[0];

  return (
    <div className='rider-features w-full max-w-md'>
      <div className='relative min-h-[9.5rem] sm:min-h-[8.5rem]'>
        {data.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={item.title}
              type='button'
              onClick={() => setActiveIndex(i)}
              aria-pressed={isActive}
              className={`rider-feature absolute inset-0 text-left transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                isActive
                  ? 'opacity-100 translate-y-0 blur-0 pointer-events-auto'
                  : 'opacity-0 translate-y-2 blur-[2px] pointer-events-none'
              }`}
            >
              <p className='bb-label mb-2'>
                Feature {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className='bb-title text-2xl sm:text-3xl mb-3'>
                {item.title}
              </h3>
              <p className='bb-subtitle text-sm sm:text-base max-w-[34ch]'>
                {item.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className='mt-8 flex items-center gap-2' aria-hidden>
        {data.map((item, i) => (
          <button
            key={`dot-${item.title}`}
            type='button'
            onClick={() => setActiveIndex(i)}
            aria-label={`Show ${item.title}`}
            className={`h-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              i === activeIndex
                ? 'w-7 bg-bybikeBlue'
                : 'w-1.5 bg-black/15 hover:bg-black/30'
            }`}
          />
        ))}
      </div>

      <p className='sr-only'>Currently viewing {active.title}</p>
    </div>
  );
};

export default Carousel;
