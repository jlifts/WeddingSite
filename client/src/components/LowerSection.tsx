import React from 'react';
import { motion } from 'framer-motion';
import { IntersectionObserver } from '../helpers/IntersectionContext';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const LowerSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <section className='h-screen bg-prop-image bg-left bg-cover h-50 sm:bg-fixed overflow-hidden'>
      <div className='h-screen sm:w-1/2 flex flex-col justify-center float-right bg-white bg-opacity-70 font-body'>
        <IntersectionObserver>
          <motion.div
            className='mx-5 sm:mx-0'
            variants={container}
            transition={{ duration: 0.4 }}
            initial='hidden'
            animate='show'
          >
            <motion.h5
              variants={item}
              className='sm:mx-16 sm:ml-32 flex flex-col uppercase font-bold'
            >
              <motion.span className='text-2xl sm:text-6xl mt-1'>
                Paradise Made
              </motion.span>
              <motion.span className='text-2xl sm:text-6xl mt-1'>
                Into A Dream
              </motion.span>
            </motion.h5>
            <motion.div className='flex flex-col justify-center text-lg sm:mx-32 my-3'>
              <motion.p variants={item}>""</motion.p>
              <motion.p variants={item}> ~ Olivia</motion.p>
              <motion.p className='mt-6' variants={item}>
                "The perfect moment we will always remember happened on a mile
                hike out to Makalawena Beach. We had the beach almost all to
                ourselves, only to be surronded by palm trees, black volcanic
                rock, auqua blue water, and white powder sand. On this beach
                walk I could not stop feeling for the ring in my pocket, just to
                make sure I still had it, and on this walk I fell to my knee and
                asked her to spend forever with me."
              </motion.p>
              <motion.p variants={item}> ~ Josh</motion.p>
            </motion.div>
          </motion.div>
        </IntersectionObserver>
      </div>
    </section>
  );
};

export default LowerSection;
