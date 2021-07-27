import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { REGISTRY_GUEST } from '../key';

const MobileNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [rotateReverse, setRotateReverse] = useState(false);
  const [disapear, setDisapear] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    setRotate(!rotate);
    setRotateReverse(!rotateReverse);
    setDisapear(!disapear);
  };

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const variant = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div className='sm:hidden'>
      <div className='flex items-center justify-end w-screen z-40 mb-2'>
        <button
          className='p-3 pr-8 text-white w-10 h-10 relative focus:outline-none outline-none'
          onClick={handleOpen}
        >
          <div className='block w-5 absolute left-1/2 top-3 transform  -translate-x-1/2 -translate-y-1/2'>
            <motion.span
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                rotate ? 'rotate' : ''
              }`}
            ></motion.span>
            <motion.span
              className={`block absolute mt-2 h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                disapear ? 'disapear' : ''
              }`}
            ></motion.span>
            <motion.span
              className={`block absolute  mt-4 h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                rotateReverse ? 'rotateReverse' : ''
              }`}
            ></motion.span>
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <div className='grid grid-cols-2 w-screen overflow-hidden'>
            <motion.div
              className='bg-black cursor-pointer outline-none'
              onClick={handleOpen}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.6,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
            />
            <motion.div
              className='z-40 bg-bg2 h-screen text-black space-y-10'
              initial={{ x: '100%' }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '100%',
              }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            >
              <motion.ul
                className='z-50 flex flex-col space-y-10 mt-10'
                initial={false}
                variants={variants}
                animate={open ? 'open' : 'closed'}
              >
                <motion.li
                  variants={variant}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link className='px-3 hover:text-primary' to='/'>
                    Home
                  </Link>
                </motion.li>

                <motion.li
                  variants={variant}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link className='px-3 hover:text-primary' to='/rsvp'>
                    RSVP
                  </Link>
                </motion.li>

                <motion.li
                  variants={variant}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className='px-3 hover:text-primary'
                    to={{ pathname: REGISTRY_GUEST }}
                    target='blank'
                  >
                    Registry
                  </Link>
                </motion.li>

                <motion.li
                  variants={variant}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link className='px-3 hover:text-primary' to='/photos'>
                    Photos
                  </Link>
                </motion.li>

                <motion.li
                  variants={variant}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link className='px-3 hover:text-primary' to='/faq'>
                    FAQ
                  </Link>
                </motion.li>

                <motion.li
                  variants={variant}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className='px-3 hover:text-primary'
                    to='/places-to-stay'
                  >
                    Places To Stay
                  </Link>
                </motion.li>

                <motion.li
                  variants={variant}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link className='px-3 hover:text-primary' to='/login'>
                    Bridal Party Login
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
