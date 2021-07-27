/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../utils/AuthContext';
import { useDB } from '../hooks/useDB';
import { db } from '../utils/firebase';
import { GROOM, BRIDE } from '../key';
import CountModal from '../components/countModal';

const RSVPD = () => {
  const [error, setError] = useState('');
  const [dataList, setDataList] = useState([]);
  const [total, setTotal] = useState(0);
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const { decrement, update } = useDB();

  async function handleLogOut() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to Logout');
    }
  }

  async function handleDelete(name, attendees) {
    decrement(attendees);
    db.collection('guests').doc(name).delete();
  }

  async function handleUpdate(number) {
    // update(number);
    console.log(number);
  }

  // Firestore
  useEffect(() => {
    db.collection('guests').onSnapshot((snapshot) =>
      setDataList(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  useEffect(() => {
    const guestTotal = db
      .collection('guestCount')
      .doc('guestCount')
      .onSnapshot((snap) => setTotal(snap.data()));
  }, []);

  return (
    <section className='h-screen w-screen py-12 px-6 sm:py-0 sm:px-0 sm:p-12 bg-bg2 font-body overflow-hidden'>
      {error && (
        <div
          className='bg-red-100 border-l-4 border-red-500 text-red-700 p-3'
          role='alert'
        >
          <p className='font-bold'>Error</p>
          <p>{error}</p>
        </div>
      )}
      <nav className='flex flex-col sm:flex-row items-end w-full justify-between'>
        <h4 className='text-2xl mb-5 sm:mb-0 sm:text-5xl'>
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
          <Link to='/admin' className='ml-4'>
            Dashboard
          </Link>
          <Link to='/profile' className='mx-4'>
            Profile
          </Link>
          <button onClick={handleLogOut} className=''>
            Log Out
          </button>
        </div>
      </nav>
      <div className='my-12 text-lg'>Total Guest Count: {total.count} </div>
      <CountModal />
      <table className='mx-0 my-12 sm:mx-0 sm:my-0 sm:m-12 sm:space-x-4 sm:space-y-4 space-y-48 w-full'>
        <tbody>
          <tr>
            <th className='w-48'>Name</th>
            <th className='w-48'>Attendees</th>
            <th className='w-48'>Created At</th>
            <th className='w-48'>Delete</th>
          </tr>
          {dataList
            ? dataList.map(({ name, attendees, createdAt }) => (
                <>
                  <tr className='text-center'>
                    <td className='capitalize text-md font-bold w-80 h-20 sm:w-48 sm:h-10'>
                      {name}
                    </td>
                    <td className='text-lg sm:w-48 h-10'>{attendees}</td>
                    <td className='sm:w-48 h-10'>{createdAt}</td>
                    <td>
                      <button
                        className='pt-2 sm:w-48 h-10'
                        onClick={() => handleDelete(name, attendees)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </>
              ))
            : 'Nothing Yet'}
        </tbody>
      </table>
    </section>
  );
};

export default RSVPD;
