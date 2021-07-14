import React from 'react';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Photos: React.FC = () => {
  return (
    <>
      <Nav />
      <section className='font-body flex justify-center items-center h-screen'>
        <div className='text-5xl'>Coming Soon!</div>
      </section>
      <Footer />
    </>
  );
};

export default Photos;
