'use client';

import PricingPlans from '../_components/PricingPlans';
import RevenueCalculator from '../_components/RevenueCalculator';
import Reveal from '../_components/Reveal';

const page = () => {
  return (
    <main className='bg-white min-h-[100dvh]'>
      <section className='bb-page-hero flex flex-col items-center justify-center px-4 pt-16 pb-10 sm:pt-20 sm:pb-14'>
        <p className='bb-label mb-3 pricing-hero-sub'>Pricing</p>
        <h1 className='pricing-hero-title bb-title text-3xl sm:text-4xl md:text-5xl text-center'>
          Plans and pricing
        </h1>
        <p className='pricing-hero-sub mt-3 text-center bb-subtitle max-w-xl text-base sm:text-lg'>
          Choose the software tier that fits your operation, then estimate
          potential revenue.
        </p>
      </section>

      <section className='px-4 py-14 sm:py-16'>
        <div className='max-w-6xl mx-auto'>
          <PricingPlans />
        </div>
      </section>

      <section className='px-4 pb-24 sm:pb-28 bg-bbSurface border-t border-bbBorder'>
        <div className='max-w-4xl mx-auto pt-16 sm:pt-20'>
          <Reveal>
            <p className='bb-label text-center mb-3'>Estimator</p>
            <h2 className='bb-title text-2xl sm:text-3xl md:text-4xl text-center'>
              Calculate <span className='text-bybikeBlue'>revenue</span>
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className='mt-3 text-center bb-subtitle text-sm sm:text-base max-w-lg mx-auto'>
              Enter your fleet numbers to predict monthly and yearly ride
              revenue.
            </p>
          </Reveal>
          <div className='mt-10'>
            <RevenueCalculator />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
