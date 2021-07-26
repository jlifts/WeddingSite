import React from 'react';
import { Link } from 'react-router-dom';

import LowerSection from '../components/LowerSection';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Nav from '../components/Nav';
import { REGISTRY_GUEST } from '../key';

//TODO: Add in the proposal story and pictures before footer

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <section className='bg-hero-image bg-cover bg-right bg-no-repeat bg-fixed h-screen w-screen'>
        <div className='h-full sm:h-screen w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-start bg-white bg-opacity-70 font-body'>
          <h1 className='mx-4 sm:mx-16 flex flex-col uppercase'>
            <span className='text-3xl sm:text-6xl mt-1'>The Next Step</span>
            <span className='text-3xl sm:text-6xl sm:ml-2 sm:mt-1'>
              In Our Journey
            </span>
            <p className='text-md sm:text-3xl sm:ml-2 mt-1'>
              Olivia Blakeslee &amp; Josh Burgess
            </p>
          </h1>
          <div className='flex sm:ml-16 mt-9'>
            <Link
              to='/rsvp'
              className='flex text-sm ml-4 sm:ml-2 justify-evenly sm:mr-12 px-4 py-3 bg-primary hover:bg-primaryAccent md:w-40 rounded font-items'
            >
              RSVP
            </Link>
            <Link
              to={{ pathname: REGISTRY_GUEST }}
              target='blank'
              className='flex justify-evenly ml-14 px-4 py-3 bg-primary hover:bg-primaryAccent md:w-40 rounded font-items'
            >
              Registry
            </Link>
          </div>
        </div>
      </section>
      <Info />
      <LowerSection />
      <Footer />
    </>
  );
};

export default Home;
