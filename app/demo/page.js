'use client';
import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';

const page = () => {
  const [selected, setSelected] = useState([]);

  const handleSubmit = (values) => {
    fetch('https://formspree.io/f/xqkvkwdd', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(values),
    }).then((res) => {
      console.log(res.json());
    });
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    city: yup.string().required('City is required'),
    country: yup.string().required('Country is required'),
    numberOfVehicles: yup.string().required('Number of vehicles is required'),
    vehicleTypes: yup
      .array()
      .min(1, 'Vehicle types are required')
      .of(yup.string())
      .required('Vehicle types are required')
      .required('Vehicle types are required'),
    email: yup.string().email().required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    stage: yup.string().required(),
    more: yup.string(),
  });

  const handleClick = (vehicle, setFieldValue) => {
    let copy = [...selected];
    if (copy.includes(vehicle)) {
      copy = copy.filter((item) => item !== vehicle);
      setSelected(copy);
    } else {
      copy.push(vehicle);
      setSelected(copy);
    }
    setFieldValue('vehicleTypes', copy);
  };

  return (
    <main className='bg-bbSurface flex justify-center py-16 sm:py-24 px-4'>
      <div className='bb-card w-full max-w-xl px-5 sm:px-10 py-12 sm:py-14 text-bybikeBlack'>
        <p className='bb-label mb-3'>Demo request</p>
        <h2 className='bb-title text-3xl sm:text-4xl mb-8'>
          Let&apos;s get <span className='text-bybikeBlue'>going.</span>
        </h2>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            city: '',
            country: '',
            numberOfVehicles: '',
            email: '',
            phone: '',
            stage: '',
            vehicleTypes: null,
            more: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <div className='flex flex-col md:grid gap-4 grid-cols-2'>
                <div>
                  <h2>
                    First Name<span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.firstName}
                    name='firstName'
                    type='text'
                    className='bb-input w-full md:w-56'
                  />
                </div>
                <div>
                  <h2>
                    Last Name<span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.lastName}
                    name='lastName'
                    type='text'
                    className='bb-input w-full md:w-56'
                  />
                </div>
                <div>
                  <h2>
                    City<span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.city}
                    name='city'
                    type='text'
                    className='bb-input w-full md:w-56'
                  />
                </div>
                <div>
                  <h2>
                    Country<span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.country}
                    name='country'
                    type='text'
                    className='bb-input w-full md:w-56'
                  />
                </div>
                <div className='md:col-span-2'>
                  <h2>
                    How many vehicles will you start with?
                    <span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.numberOfVehicles}
                    name='numberOfVehicles'
                    type='text'
                    className='bb-input w-full'
                  />
                </div>
                <div>
                  <h2>
                    Email<span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    name='email'
                    type='text'
                    className='bb-input w-full md:w-56'
                  />
                </div>
                <div>
                  <h2>
                    Phone Number<span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.phone}
                    name='phone'
                    type='text'
                    className='bb-input w-full md:w-56'
                  />
                </div>
                <div className='md:col-span-2'>
                  <h2>
                    Describe the stage you are currently in
                    <span className='text-red-500'>*</span>
                  </h2>
                  <input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.stage}
                    name='stage'
                    type='text'
                    className='bb-input w-full'
                  />
                </div>
                <div className='col-span-2'>
                  <h2 className='mb-2'>
                    Which types of vehicle are you interested in?
                    <span className='text-red-500'>*</span>
                  </h2>
                  <button
                    type='button'
                    onClick={() =>
                      handleClick('E-Scooter', props.setFieldValue)
                    }
                    className={`bb-pill mb-2 w-full md:w-56 justify-start ${
                      selected.includes('E-Scooter') ? 'bb-pill-active' : ''
                    }`}
                  >
                    E-Scooter
                  </button>
                  <button
                    type='button'
                    onClick={() => handleClick('E-Bike', props.setFieldValue)}
                    className={`bb-pill mb-2 w-full md:w-56 justify-start ${
                      selected.includes('E-Bike') ? 'bb-pill-active' : ''
                    }`}
                  >
                    E-Bike
                  </button>
                  <button
                    type='button'
                    onClick={() => handleClick('Mix', props.setFieldValue)}
                    className={`bb-pill mb-2 w-full md:w-56 justify-start ${
                      selected.includes('Mix') ? 'bb-pill-active' : ''
                    }`}
                  >
                    Mix
                  </button>
                </div>
                <div className='md:col-span-2'>
                  <h2>Tell us more about your business</h2>
                  <textarea
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.more}
                    name='more'
                    rows={3}
                    className='bb-input w-full resize-none'
                  ></textarea>
                </div>
              </div>
              {props.isSubmitting ? (
                <div className='flex gap-4 items-center mt-6'>
                  <div className='flex px-10 rounded-sm justify-center bg-bybikeBlue items-center'>
                    <svg className='w-9' viewBox='0 -0.5 25 25' fill='none'>
                      <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                      <g
                        id='SVGRepo_tracerCarrier'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></g>
                      <g id='SVGRepo_iconCarrier'>
                        <path
                          d='M5.5 12.5L10.167 17L19.5 8'
                          stroke='#ffffff'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <h2 className='text-bybikeBlack text-xs'>
                    We will contact you as soon as possible
                  </h2>
                </div>
              ) : (
                <button
                  disabled={props.isSubmitting || !props.isValid}
                  type='submit'
                  className='bb-btn bb-btn-primary disabled:opacity-40 mt-6'
                >
                  Submit
                </button>
              )}
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default page;
