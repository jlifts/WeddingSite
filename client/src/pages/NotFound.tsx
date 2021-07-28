/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='bg-hero-image bg-cover bg-right bg-no-repeat h-screen w-screen'>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='bg-white opacity-60 p-6 sm:p-36 font-body'>
          <h3 className='text-xl sm:text-5xl mb-16 font-semibold'>
            404 - This page doesn't seem to exist!
          </h3>
          <Link to='/' className='text-md sm:text-xl'>
            Click Here To Go Back To Our Main Page!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
