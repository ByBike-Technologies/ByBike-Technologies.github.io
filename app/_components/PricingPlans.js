'use client';

import Link from 'next/link';
import Reveal from './Reveal';

const CheckIcon = () => (
  <svg width='12' height='11' viewBox='0 0 12 11' fill='none' aria-hidden>
    <path
      d='M11 1.87598L4 9.60496L1 6.70659'
      stroke='#00A29D'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Feature = ({ children }) => (
  <li className='flex items-start gap-2.5'>
    <span className='mt-1.5 shrink-0'>
      <CheckIcon />
    </span>
    <span>{children}</span>
  </li>
);

const SubFeature = ({ children }) => (
  <li className='ml-7 text-sm text-bbMuted list-disc marker:text-bbBorder'>
    {children}
  </li>
);

const plans = [
  {
    name: 'Start',
    featured: false,
    features: (
      <>
        <Feature>Rider App</Feature>
        <Feature>CRM Dashboard</Feature>
        <li>
          <div className='flex items-start gap-2.5'>
            <span className='mt-1.5 shrink-0'>
              <CheckIcon />
            </span>
            <span>CMS Dashboard</span>
          </div>
          <ul className='mt-1 space-y-1'>
            <SubFeature>Sales Management</SubFeature>
          </ul>
        </li>
        <li>
          <div className='flex items-start gap-2.5'>
            <span className='mt-1.5 shrink-0'>
              <CheckIcon />
            </span>
            <span>Operation Dashboard & Apps</span>
          </div>
          <ul className='mt-1 space-y-1'>
            <SubFeature>Basic Fleet Management</SubFeature>
          </ul>
        </li>
      </>
    ),
  },
  {
    name: 'Grow',
    featured: true,
    features: (
      <>
        <Feature>Rider App</Feature>
        <Feature>CRM Dashboard</Feature>
        <li>
          <div className='flex items-start gap-2.5'>
            <span className='mt-1.5 shrink-0'>
              <CheckIcon />
            </span>
            <span>CMS Dashboard</span>
          </div>
          <ul className='mt-1 space-y-1'>
            <SubFeature>Sales Management</SubFeature>
            <SubFeature>Marketing Management</SubFeature>
          </ul>
        </li>
        <li>
          <div className='flex items-start gap-2.5'>
            <span className='mt-1.5 shrink-0'>
              <CheckIcon />
            </span>
            <span>Operation Dashboard & Apps</span>
          </div>
          <ul className='mt-1 space-y-1'>
            <SubFeature>Basic Fleet Management</SubFeature>
          </ul>
        </li>
      </>
    ),
  },
  {
    name: 'Scale',
    featured: false,
    features: (
      <>
        <Feature>Rider App</Feature>
        <Feature>CRM Dashboard</Feature>
        <li>
          <div className='flex items-start gap-2.5'>
            <span className='mt-1.5 shrink-0'>
              <CheckIcon />
            </span>
            <span>CMS Dashboard</span>
          </div>
          <ul className='mt-1 space-y-1'>
            <SubFeature>Extended Sales Management</SubFeature>
            <SubFeature>Marketing Management</SubFeature>
          </ul>
        </li>
        <li>
          <div className='flex items-start gap-2.5'>
            <span className='mt-1.5 shrink-0'>
              <CheckIcon />
            </span>
            <span>Operation Dashboard & Apps</span>
          </div>
          <ul className='mt-1 space-y-1'>
            <SubFeature>Extended Fleet Management</SubFeature>
            <SubFeature>Workforce Management</SubFeature>
            <SubFeature>Supply Chain Management</SubFeature>
            <SubFeature>Warehouse Management</SubFeature>
          </ul>
        </li>
      </>
    ),
  },
];

const PricingPlans = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch'>
      {plans.map((plan, index) => (
        <Reveal key={plan.name} delay={100 + index * 90} className='h-full'>
          <article
            className={`pricing-card pricing-card--glass h-full flex flex-col ${
              plan.featured ? 'pricing-card--featured' : ''
            }`}
          >
            <div className='flex-1 p-6 sm:p-7'>
              {plan.featured && (
                <p className='bb-label mb-3'>Recommended</p>
              )}
              <h2 className='bb-title text-2xl sm:text-3xl'>{plan.name}</h2>
              <p className='mt-2 text-sm text-bbMuted'>Core software features</p>
              <div className='mt-5 mb-6 h-px bg-bbBorder' />
              <ul className='flex flex-col gap-2.5 text-[15px] text-bybikeBlack/85'>
                {plan.features}
              </ul>
            </div>

            <div className='p-6 sm:p-7 pt-0'>
              <Link
                href='/demo'
                className={`pricing-cta bb-btn w-full ${
                  plan.featured ? 'bb-btn-teal' : 'bb-btn-primary'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
};

export default PricingPlans;
