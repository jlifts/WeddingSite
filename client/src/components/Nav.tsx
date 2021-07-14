import React from 'react';
import { Link } from 'react-router-dom';
import { REGISTRY_GUEST } from '../key';

const Nav: React.FC = () => {
  return (
    <nav className='bg-secondary text-white flex p-3 justify-between sticky top-0 font-items'>
      <div className='flex justify-start'>
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
      <div className='flex justify-end'>
        <Link className='px-8 hover:text-primary' to='/photos'>
          Photos
        </Link>
        <Link className='px-8 hover:text-primary' to='/faq'>
          FAQ
        </Link>
        <Link className='px-8 hover:text-primary' to='/places-to-stay'>
          Places To Stay
        </Link>
        {/* <Link className='px-8 hover:text-primary' to='/login'>
          Bridal Party Login
        </Link> */}
      </div>
    </nav>
  );
};

export default Nav;
