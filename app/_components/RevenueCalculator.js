'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import Reveal from './Reveal';

const parseNonNegative = (value) => {
  const n = Number(value);
  if (!Number.isFinite(n) || n < 0) return 0;
  return n;
};

const formatUsd = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

const RevenueCalculator = () => {
  const [fleet, setFleet] = useState('100');
  const [ridesPerDay, setRidesPerDay] = useState('3');
  const [avgPrice, setAvgPrice] = useState('2.50');

  const { monthly, yearly } = useMemo(() => {
    const f = parseNonNegative(fleet);
    const r = parseNonNegative(ridesPerDay);
    const p = parseNonNegative(avgPrice);
    const monthlyTotal = f * r * p * 30;
    return {
      monthly: monthlyTotal,
      yearly: monthlyTotal * 12,
    };
  }, [fleet, ridesPerDay, avgPrice]);

  const fields = [
    {
      id: 'fleet',
      label: 'Fleet size',
      value: fleet,
      onChange: setFleet,
      step: '1',
      hint: 'Vehicles in operation',
    },
    {
      id: 'rides',
      label: 'Rides per day',
      value: ridesPerDay,
      onChange: setRidesPerDay,
      step: '0.1',
      hint: 'Average per vehicle',
    },
    {
      id: 'price',
      label: 'Avg. ride price',
      value: avgPrice,
      onChange: setAvgPrice,
      step: '0.1',
      hint: 'USD per ride',
    },
  ];

  return (
    <Reveal delay={80}>
      <div className='pricing-calculator'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5'>
          {fields.map((field) => (
            <label key={field.id} className='flex flex-col gap-2' htmlFor={field.id}>
              <span className='text-sm font-medium text-bybikeBlack'>
                {field.label}
              </span>
              <input
                id={field.id}
                type='number'
                min='0'
                step={field.step}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                className='pricing-input'
              />
              <span className='text-xs text-bbMuted'>{field.hint}</span>
            </label>
          ))}
        </div>

        <div className='mt-8 pt-8 border-t border-bbBorder flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6'>
          <div>
            <p className='text-sm text-bbMuted mb-1'>Estimated monthly revenue</p>
            <p className='text-4xl sm:text-5xl font-semibold tracking-tight text-bybikeBlack tabular-nums'>
              {formatUsd(monthly)}
            </p>
            <p className='mt-2 text-base text-bybikeBlue tabular-nums'>
              {formatUsd(yearly)}{' '}
              <span className='text-bbMuted text-sm'>per year</span>
            </p>
            <p className='mt-3 text-xs text-bbMuted'>
              Estimate only — not a quote.
            </p>
          </div>

          <Link href='/demo' className='pricing-cta bb-btn bb-btn-primary shrink-0'>
            Contact Us
          </Link>
        </div>
      </div>
    </Reveal>
  );
};

export default RevenueCalculator;
