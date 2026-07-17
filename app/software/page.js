'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Carousel from '../_components/Carousel';

const page = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeIndexWithDelay, setActiveIndexWithDelay] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexWithDelay(activeIndex);
    }, 200);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const frontRef = useRef();
  const backRef = useRef();

  return (
    <main className='overflow-x-hidden'>
      <section className='flex justify-center bg-gradient-to-b from-[#00A29D] to-white'>
        <div className='relative w-[96%] md:w-11/12 xl:w-[80rem] h-[34rem] sm:h-[40rem] pt-12'>
          <div className='text-3xl sm:text-5xl lg:text-6xl text-center md:text-start font-medium'>
            <h1 className='underline decoration-bybikeRed md:no-underline'>
              FROM <br className='hidden md:block' />
              <span className='underline decoration-bybikeRed'>BACKSTAGE</span>
            </h1>
            <p className='underline flex justify-center md:block decoration-bybikeBlue md:no-underline'>
              <span className='ml-[5px]'>TO </span>
              <span className='md:hidden'>&nbsp;</span>
              <span className='underline decoration-bybikeBlue'>
                FRONTSTAGE
              </span>
            </p>
          </div>
          <h3 className='italic text-center md:text-start lg:text-xl tracking-wider mt-4'>
            <span className='font-semibold'>Turnkey</span> solution for your
            brand.
          </h3>

          <div className='absolute flex justify-center right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 top-52 lg:top-32 bg-[url(/platform_stage.png)] bg-no-repeat bg-contain w-full sm:w-9/12 md:w-[40rem] lg:w-[50rem] h-full'>
            <div className='relative flex justify-between h-min w-[40%]'>
              <div
                onClick={() =>
                  frontRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }
                className='bg-bybikeBlue cursor-pointer ring mt-28 sm:mt-44 ring-white w-8 max-h-8 aspect-square rounded-[50%]'
              ></div>
              <div
                onClick={() =>
                  backRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }
                className='bg-bybikeRed cursor-pointer ring mt-16 sm:mt-28 ring-white w-8 max-h-8 aspect-square rounded-[50%]'
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* FRONT STAGE */}
      <div ref={frontRef} className='h-[5rem]'></div>
      <p className='bb-label text-center pt-6'>Platform</p>
      <h2 className='bb-title text-center text-3xl sm:text-4xl mt-2'>
        Front-stage
      </h2>
      <div className='h-px bg-bybikeBlue/40 mt-4 max-w-xs mx-auto' />
      <section className='mt-10 sm:mt-14 flex justify-center px-4 pb-8'>
        <div className='w-full max-w-6xl xl:max-w-7xl grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 xl:gap-20 items-center'>
          <div className='order-2 lg:order-1 flex flex-col items-center lg:items-start'>
            <p className='bb-label mb-2'>Product</p>
            <h2 className='bb-title text-3xl sm:text-4xl mb-6 sm:mb-8'>
              <span className='text-bybikeBlue'>Rider</span> App
            </h2>

            <div
              className='rider-tabs flex flex-wrap justify-center lg:justify-start gap-2 mb-8 sm:mb-10'
              role='tablist'
              aria-label='Rider App features'
            >
              {[
                'Tailor made',
                'Online Invoice',
                'Vehicle',
                'Payment',
              ].map((label, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={label}
                    type='button'
                    role='tab'
                    aria-selected={isActive}
                    onClick={() => setActiveIndex(index)}
                    className={`bb-pill rider-tab ${
                      isActive ? 'bb-pill-active' : ''
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <Carousel
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>

          <div className='order-1 lg:order-2 rider-phones relative flex justify-center items-end min-h-[22rem] sm:min-h-[34rem]'>
            <div
              aria-hidden
              className='absolute inset-[12%] sm:inset-[8%] rounded-[2rem] bg-gradient-to-br from-bybikeBlue/15 via-[#F3F6F6] to-transparent'
            />
            <div
              className={`relative z-[1] flex items-end justify-center gap-3 sm:gap-5 transition-[opacity,filter,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                activeIndex === activeIndexWithDelay
                  ? 'opacity-100 blur-0 translate-y-0'
                  : 'opacity-0 blur-[2px] translate-y-2'
              }`}
            >
              <img
                className='rider-phone w-[7.5rem] sm:w-[12rem] md:w-[13.5rem] h-auto drop-shadow-xl -rotate-2'
                src={`/software_ss${activeIndexWithDelay}_1.png`}
                alt='Rider app map and vehicle selection screen'
              />
              <img
                className='rider-phone w-[7.5rem] sm:w-[12rem] md:w-[13.5rem] h-auto drop-shadow-xl rotate-2 translate-y-4 sm:translate-y-8'
                src={`/software_ss${activeIndexWithDelay}_2.png`}
                alt='Rider app active ride screen'
              />
            </div>
          </div>
        </div>
      </section>

      {/* BACK STAGE */}
      <div ref={backRef} className='h-[5rem]'></div>
      <p className='bb-label text-center mt-8 pt-6'>Operations</p>
      <h2 className='bb-title text-center text-3xl sm:text-4xl mt-2'>
        Back-stage
      </h2>
      <div className='h-px bg-bbBorder mt-4 mb-16 max-w-xs mx-auto' />
      <section className='flex justify-center'>
        <div className='w-[96%] sm:w-[90%] lg:w-[40rem] flex md:block flex-col items-center xl:w-[60rem]'>
          <h2 className='text-2xl sm:text-3xl text-center md:text-start md:text-4xl mb-2 font-semibold'>
            <span className='text-bybikeRed'>Control Your </span>Fleet
          </h2>
          <p className='text-sm sm:text-xl font-medium text-center md:text-start mb-16'>
            Track your fleet{' '}
            <span className='italic text-bybikeRed'>second to second, </span>
            without delay, and{' '}
            <span className='italic text-bybikeRed'>maximize </span>your
            operational efficiency with our fleet management software.
          </p>

          <img src='/fleet_management.png' alt='ss3' />
        </div>
      </section>
      <section className='flex justify-center'>
        <div className='w-[96%] sm:w-[90%] flex flex-col items-center gap-12 sm:gap-0 lg:gap-12 sm:items-start sm:flex-row justify-between lg:w-[46rem] xl:w-[60rem] mt-36 lg:mt-52 '>
          <div>
            <h2 className='text-2xl text-center sm:text-start md:text-4xl font-semibold mb-6'>
              <span className='text-bybikeRed'>Operation</span> Apps
            </h2>

            <h3 className='text-base text-center sm:text-start md:text-xl font-medium mb-6'>
              Specially <span className='text-bybikeRed italic'>designed </span>
              for your field team.
            </h3>
            <ul className='list-disc text-sm md:text-lg lg:text-xl flex flex-col ml-4 gap-6'>
              <li>Easy to Use</li>
              <li>Multi Authorization for Each Team</li>
              <li>Designed for Tracktion</li>
            </ul>
          </div>
          <div className='flex justify-center md:gap-4 lg:gap-2 h-[20rem] xl:h-[36rem]'>
            <img src='/operation_1.png' className='h-full' alt='ss1' />
            <img src='/operation_2.png' className='h-full' alt='ss2' />
          </div>
        </div>
      </section>

      <section className='flex justify-center'>
        <div className='w-[96%] sm:w-[90%] flex sm:block flex-col items-center lg:w-[46rem] xl:w-[60rem] mt-36 lg:mt-52'>
          <h2 className='text-2xl text-center sm:text-start md:text-4xl font-semibold mb-8'>
            <span className='text-bybikeRed'>CRM</span> Dashboard
          </h2>
          <h3 className=' text-center sm:text-start text-sm md:text-xl mb-10'>
            Your customer support team will be able to manage all complaints
            from a <span className='text-bybikeRed italic'>single</span> panel.
            Your customer satisfaction will{' '}
            <span className='text-bybikeRed italic'>skyrocket</span>.
          </h3>
          <img src='/software_ss3.png' alt='ss3' />
        </div>
      </section>

      <section className='flex justify-center gap-4 mt-36 lg:mt-52'>
        <div className='w-[96%] sm:w-[94%] flex flex-col md:flex-row gap-8 items-center justify-between lg:w-[55rem] xl:w-[60rem]'>
          <div className='w-[26rem] flex md:block flex-col items-center'>
            <h2 className='text-2xl md:text-4xl text-center md:text-start font-semibold mb-8'>
              <span className='text-bybikeRed'>CMS</span> Dashboard
            </h2>
            <h3 className='text-sm md:text-lg lg:text-xl font-medium mb-6'>
              Manage your campains{' '}
              <span className='text-bybikeRed italic'>easily </span>
              from a <span className='text-bybikeRed italic'>single</span>{' '}
              panel.
            </h3>
            <ul className='list-disc flex lg:text-xl flex-col ml-4 gap-4'>
              <li>Sales Management</li>
              <li>Marketing Management</li>
            </ul>
          </div>
          <div className='bb-card p-6 md:p-8 py-10 md:py-12'>
            <p className='bb-label text-center mb-2'>Waitlist</p>
            <h2 className='bb-title text-2xl md:text-3xl text-center mb-1'>
              Coming soon
            </h2>
            <h3 className='bb-subtitle text-sm md:text-base text-center mb-6'>
              Notify me when it&apos;s ready
            </h3>
            <div className='flex flex-col sm:flex-row gap-2 items-stretch justify-center'>
              <input
                type='email'
                placeholder='Enter a valid e-mail address'
                className='bb-input w-full sm:w-[16rem] text-sm'
              />
              <button type='button' className='bb-btn bb-btn-primary text-sm'>
                Notify me
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-3 my-24 items-center px-4'>
        <p className='bb-label'>Support</p>
        <h2 className='bb-title text-xl md:text-3xl text-center'>
          Our team is here to <span className='text-bybikeBlue'>help</span>
        </h2>
        <Link href='/demo' className='bb-btn bb-btn-primary'>
          Get in touch
        </Link>
      </section>
    </main>
  );
};

export default page;
