import React from 'react';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Thankyou: React.FC = () => {
  return (
    <>
      <Nav />
      <section className='font-body flex flex-col justify-center items-center h-screen text-5xl mx-24'>
        <span>Thank You For Celebrating Our Special Day</span>{' '}
        <span>We Cannot Wait To See You There!</span>
      </section>
      <Footer />
    </>
  );
};

export default Thankyou;
