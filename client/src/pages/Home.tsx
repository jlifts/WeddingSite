import React from 'react';
import { Link } from 'react-router-dom';
import { REGISTRY_GUEST } from '../key';

const Home: React.FC = () => {
  return (
    <section className='bg-hero-image h-full'>
      <div className='h-screen w-1/2 flex flex-col justify-center bg-white bg-opacity-80'>
        <h1 className='mx-16 flex flex-col uppercase'>
          <span className='text-6xl mt-1'>The Next Step</span>
          <span className='text-6xl ml-2 mt-1'>In Our Journey</span>
          <p className='text-3xl ml-2 mt-1'>
            Olivia Blakeslee &amp; Josh Burgess
          </p>
        </h1>
        <div className='flex ml-16 mt-9'>
          <Link
            to='/rsvp'
            className='flex ml-2 justify-evenly mr-12 px-4 py-3 bg-primary hover:bg-primaryAccent w-40 rounded'
          >
            RSVP
          </Link>
          <Link
            to={{ pathname: REGISTRY_GUEST }}
            target='blank'
            className='flex justify-evenly ml-14 px-4 py-3 bg-primary hover:bg-primaryAccent w-40 rounded'
          >
            Registry
          </Link>
        </div>
      </div>
      <div className='w-100'></div>
    </section>
  );
};

export default Home;
