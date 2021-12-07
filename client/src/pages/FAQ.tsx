import React from 'react';
import { Accordian } from '../components/accordian';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

const FAQ: React.FC = () => {
  return (
    <>
      <Nav />
      <section className="font-body flex flex-col  h-screen">
        <div className="flex justify-center text-4xl my-12 cursor-default">
          FAQ
        </div>
        <Accordian title={'How is it Done?'}>
          This is my example answer, wow?
        </Accordian>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
