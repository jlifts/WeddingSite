import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { REGISTRY_GUEST } from '../key';

const MobileNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='sm:hidden'>
      <>
        {open ? (
          <div className='grid grid-cols-2 w-screen'>
            <div
              className='bg-black opacity-50 cursor-pointer'
              onClick={handleClose}
            ></div>
            <div className='z-40 bg-bg2 h-screen text-black space-y-10'>
              <button
                className='flex justify-end w-full px-12 py-3'
                onClick={handleClose}
              >
                X
              </button>
              <div className='z-50 flex flex-col space-y-10'>
                <Link className='px-8 hover:text-primary' to='/'>
                  Home
                </Link>
                <Link className='px-8 hover:text-primary' to='/rsvp'>
                  RSVP
                </Link>
                <Link
                  className='px-8 hover:text-primary'
                  to={{ pathname: REGISTRY_GUEST }}
                  target='blank'
                >
                  Registry
                </Link>
              </div>
              <div className='z-50 flex flex-col space-y-10'>
                <Link className='px-8 hover:text-primary' to='/photos'>
                  Photos
                </Link>
                <Link className='px-8 hover:text-primary' to='/faq'>
                  FAQ
                </Link>
                <Link className='px-8 hover:text-primary' to='/places-to-stay'>
                  Places To Stay
                </Link>
                <Link className='px-8 hover:text-primary' to='/login'>
                  Bridal Party Login
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className='flex items-center justify-end w-screen z-40'>
              <button className='p-3 pr-8 text-white' onClick={handleOpen}>
                Nav Button
              </button>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default MobileNav;
