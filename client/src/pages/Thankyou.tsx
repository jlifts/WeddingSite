import React from 'react';
import { motion } from 'framer-motion';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Thankyou: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Nav />
      <section className='font-body flex flex-col justify-center items-center h-screen max-w-screen text-xl sm:text-5xl sm:mx-24'>
        <span>Thank You For Celebrating Our Special Day</span>{' '}
        <span>We Cannot Wait To See You There!</span>
      </section>
      <Footer />
    </motion.main>
  );
};

export default Thankyou;
