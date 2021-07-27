import React from 'react';
import { motion } from 'framer-motion';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

//TODO: Show places and adresses with google maps link

const PlacesToStay: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Nav />
      <section className='font-body flex justify-center items-center h-screen'>
        <div className='text-5xl'>Coming Soon!</div>
      </section>
      <Footer />
    </motion.main>
  );
};

export default PlacesToStay;
