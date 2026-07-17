'use client';

import Lottie from 'lottie-react';
import animationData from '../../public/bike.json';

const LoadingBike = () => {
  return (
    <div className='h-screen overflow-hidden flex justify-center items-center'>
      <Lottie className='w-40' animationData={animationData} />
    </div>
  );
};

export default LoadingBike;
