'use client';
import React from 'react';

const page = () => {
  return (
    <main className='bg-white'>
      <section className='bg-[url(/products_banner.png)] w-screen mb-12 md:mb-20 relative bg-center bg-cover h-[14rem] sm:h-[20rem] md:h-[30rem] lg:h-[36rem]'>
        <div className='absolute flex pl-8 sm:pl-16 lg:pl-40 items-center inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent'>
          <div>
            <p className='bb-label text-white/80 mb-2'>Hardware</p>
            <h1 className='text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-md'>
              Unleash{' '}
              <span className='text-bybikeBlue'>green power</span>
            </h1>
          </div>
        </div>
      </section>

      <section className='px-4 sm:px-10 lg:px-40 mb-16'>
        <div className='bb-card p-6 sm:p-8 items-center flex flex-col md:flex-row gap-4'>
          <img src='/products_frame1.png' className='md:w-1/2 rounded-2xl' alt='One charge campus' />
          <div className='py-3 sm:py-6 md:px-4 lg:px-10'>
            <p className='bb-label mb-2'>Feature 01</p>
            <h2 className='bb-title text-xl sm:text-3xl lg:text-4xl'>
              One charge
            </h2>
            <h3 className='text-bybikeBlue text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight'>
              rules campus
            </h3>
            <p className='mt-4 bb-subtitle text-sm sm:text-base'>
              Discover the convenience of campus commuting with our e-bikes and
              charging stations. Go the extra mile on a single charge, reaching
              distances of up to 80km effortlessly. Enjoy smooth rides at speeds
              up to 25km/h, making your journeys quick and enjoyable.
            </p>
          </div>
        </div>
      </section>

      <section className='px-4 sm:px-10 lg:px-40 mb-16'>
        <div className='bb-card p-6 sm:p-8 items-center flex flex-col md:flex-row-reverse gap-4'>
          <img src='/products_frame2.png' className='md:w-1/2 rounded-2xl' alt='Lock and charge' />
          <div className='py-3 sm:py-6 md:px-4 lg:px-10'>
            <p className='bb-label mb-2'>Feature 02</p>
            <h2 className='bb-title text-xl sm:text-3xl lg:text-4xl'>
              Lock & charge
            </h2>
            <h3 className='text-bybikeBlue text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight'>
              ready to go
            </h3>
            <p className='mt-4 bb-subtitle text-sm sm:text-base'>
              Our smart lock ensures the safety of your e-bike, while our
              conveniently located charging stations offer fast and easy
              recharging.
            </p>
          </div>
        </div>
      </section>

      <section className='px-4 sm:px-10 lg:px-40 mb-20'>
        <div className='bb-card p-6 sm:p-8 items-center flex flex-col md:flex-row gap-4'>
          <img src='/products_frame3.png' className='md:w-1/2 rounded-2xl' alt='Sustainable energy' />
          <div className='py-3 sm:py-6 md:px-4 lg:px-10'>
            <p className='bb-label mb-2'>Feature 03</p>
            <h2 className='bb-title text-xl sm:text-3xl lg:text-4xl'>
              Sustainable
            </h2>
            <h3 className='text-bybikeBlue text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight'>
              energy
            </h3>
            <p className='mt-4 bb-subtitle text-sm sm:text-base'>
              By leveraging sustainable energy sources and promoting
              eco-friendly transportation, we aim to reduce carbon emissions and
              create a greener future. Together, let&apos;s make a positive
              impact on the environment while enjoying the convenience and
              efficiency of our innovative micromobility solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
