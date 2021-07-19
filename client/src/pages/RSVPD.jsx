/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../utils/AuthContext';
import { db } from '../utils/firebase';

//TODO: Delete and Update functions

const RSVPD = () => {
  const [error, setError] = useState('');
  const [dataList, setDataList] = useState([]);
  const [total, setTotal] = useState(0);
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const deleteButton = useRef();

  async function handleLogOut() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to Logout');
    }
  }

  async function handleDelete(deleteButton) {
    // db.collection('guests').doc(name).delete();
    console.log(deleteButton);
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
      .get()
      .then((snapshot) => {
        setTotal(snapshot.data());
      });
    // return () => guestTotal();
  }, []);

  return (
    <section className='h-screen p-12 bg-bg2 font-body'>
      {error && (
        <div
          className='bg-red-100 border-l-4 border-red-500 text-red-700 p-3'
          role='alert'
        >
          <p className='font-bold'>Error</p>
          <p>{error}</p>
        </div>
      )}
      <nav className='flex items-end w-full justify-between'>
        <h4 className=' text-5xl'>
          Hello{' '}
          {currentUser.uid === 'YyNFxfoxjdSR3RQrKqhG7g5do3s1'
            ? 'Groom!'
            : currentUser.uid === 'l753tSRetlgGrWotZnb0jbfRwSF2'
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
      <table className='m-12 space-x-4 space-y-4 w-full'>
        <tr>
          <th className='w-48'>Name</th>
          <th className='w-48'>Attendees</th>
          <th className='w-48'>Created At</th>
          <th className='w-48'>Update</th>
          <th className='w-48'>Delete</th>
        </tr>
        {dataList
          ? dataList.map(({ name, attendees, createdAt }) => (
              <>
                <tr className='text-center '>
                  <td className='capitalize text-md font-bold w-48 h-10'>
                    {name}
                  </td>
                  <td className='text-lg w-48 h-10'>{attendees}</td>
                  <td className='w-48 h-10'>{createdAt}</td>
                  <td>
                    <button className='pt-2 w-48 h-10'>Update</button>
                  </td>
                  <td>
                    <button className='pt-2 w-48 h-10' onClick={handleDelete}>
                      X
                    </button>
                  </td>
                </tr>
              </>
            ))
          : 'Nothing Yet'}
      </table>
    </section>
  );
};

export default RSVPD;
