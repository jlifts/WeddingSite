import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import LowerSection from '../components/LowerSection';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Nav from '../components/Nav';
import { REGISTRY_GUEST } from '../key';

const Home: React.FC = () => {
  const heroIntro = {
    enter: { y: 0, opacity: 1 },
    initial: { y: 1000, opacity: 0 },
  };

  return (
    <AnimatePresence>
      <div>
        <Nav />
        <section className='bg-hero-image bg-cover bg-right bg-no-repeat sm:bg-fixed h-screen w-screen'>
          <motion.div
            initial='initial'
            animate='enter'
            exit='enter'
            variants={heroIntro}
            transition={{ duration: 2 }}
            className='h-full sm:h-screen w-full sm:w-1/2 flex flex-col  justify-center items-center sm:items-start bg-white bg-opacity-70 font-body sm:pb-32'
          >
            <h1 className='mx-4 sm:mx-16 flex flex-col uppercase'>
              <span className='text-3xl font-bold sm:text-6xl mb-3'>
                The Next Step
              </span>
              <span className='text-3xl font-bold sm:text-6xl mb-2 sm:ml-2 sm:mt-1'>
                In Our Journey
              </span>
              <p className='text-lg sm:text-3xl sm:ml-2 mt-1'>
                Olivia Blakeslee &amp; Josh Burgess
              </p>
            </h1>
            <div className='flex sm:ml-16 mt-12 sm:mt-20'>
              <Link
                to='/rsvp'
                className='flex text-sm -ml-20 sm:ml-2 justify-evenly sm:mr-12 px-4 py-3 bg-primary hover:bg-primaryAccent md:w-40 rounded font-items transform ease-in-out hover:scale-110'
              >
                RSVP
              </Link>
              <Link
                to={{ pathname: REGISTRY_GUEST }}
                target='blank'
                className='flex justify-evenly ml-14 px-4 py-3 bg-primary transform ease-in-out hover:bg-primaryAccent hover:scale-110 md:w-40 rounded font-items'
              >
                Registry
              </Link>
            </div>
          </motion.div>
        </section>
        <Info />
        <LowerSection />
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Home;
