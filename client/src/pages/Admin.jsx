/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../utils/AuthContext';
import { REGISTRY_ADMIN, GROOM, BRIDE } from '../key';
import Clock from '../components/Clock';
import Modal from '../components/Modal';

const Admin = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to Logout');
    }
  }

  return (
    <>
      <section className='h-screen p-12 bg-bg2 font-body'>
        <img
          src='img/example3.png'
          alt='corner piece'
          className='absolute bottom-0 right-0 transform -scale-x-1'
          height={200}
          width={200}
        />
        {error && (
          <div
            className='bg-red-100 border-l-4 border-red-500 text-rd-700 p-3'
            role='alert'
          >
            <p className='font-bold'>Error</p>
            <p>{error}</p>
          </div>
        )}
        <nav className='flex items-end w-full justify-between'>
          <h4 className=' text-5xl'>
            Hello{' '}
            {currentUser.uid === GROOM
              ? 'Groom!'
              : currentUser.uid === BRIDE
              ? 'My Beautiful Bride!'
              : history.push('/party')}
          </h4>
          <div className='flex'>
            <Link to='/' className=''>
              Home
            </Link>
            <Link to='/profile' className='mx-4'>
              Profile
            </Link>
            <button onClick={handleLogOut} className=''>
              Log Out
            </button>
          </div>
        </nav>
        <div className='flex mt-12 justify-center flex-col'>
          <div>
            <h5 className='flex justify-center text-4xl'>
              Coutdown to The Kiss
            </h5>
            <div className='text-6xl'>
              <Clock text='I Love You!' />
            </div>
          </div>
          <div className='flex justify-evenly mt-24'>
            <Link
              to={{ pathname: REGISTRY_ADMIN }}
              className='flex px-4 py-3 bg-primary justify-center hover:bg-primaryAccent w-40 rounded'
              target='_blank'
            >
              Manage Registry
            </Link>
            <Modal />
            <Link
              to='/rsvplist'
              className='flex px-4 py-3 bg-primary justify-center hover:bg-primaryAccent w-40 rounded'
            >
              Who RSVP'd?
            </Link>
          </div>
        </div>
        <img
          src='img/example3.png'
          alt='corner piece'
          className='absolute -bottom-3 left-0'
          height={200}
          width={200}
        />
      </section>
    </>
  );
};

export default Admin;
