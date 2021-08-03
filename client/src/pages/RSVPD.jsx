/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { trackPromise } from 'react-promise-tracker';

import { useAuth } from '../utils/AuthContext';
import { GROOM, BRIDE } from '../key';
import CountModal from '../components/countModal';
import LoadingIndicator from '../components/Loader';
// import axiosAuth from '../api/axiosAuth';
import axios from '../api/axios';
import reqs from '../api/req';

const RSVPD = () => {
  const [error, setError] = useState('');
  const [dataList, setDataList] = useState([]);
  const [total, setTotal] = useState(0);
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const token = currentUser.getIdToken(true);

  async function handleLogOut() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to Logout');
    }
  }

  // Firestore + Axios
  async function handleUpdate(number) {
    // update(number);
    console.log(number);
  }

  async function handleDelete(name, attendees) {
    const number = parseInt(attendees);
    const config = {
      name: name,
      number: number,
    };
    console.log(config);
    await axios
      .delete(reqs.deleteGuest, { data: config })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function fetchData() {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const req = await axios.get(reqs.fetchGuests, config);
    return req.data;
  }
  async function fetchCount() {
    const reqCount = await axios.get(reqs.fetchCount);
    return reqCount.data[0].count;
  }

  useEffect(() => {
    trackPromise(fetchData()).then(setDataList);
    trackPromise(fetchCount()).then(setTotal);
  }, []);

  return (
    <section className='h-full w-screen py-12 px-6 sm:p-12 bg-bg2 font-body'>
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
      <div className='my-12 text-lg'>Total Guest Count: {total} </div>
      <CountModal />
      <div className='font-body flex justify-center items-center'>
        <LoadingIndicator />
      </div>
      <table className='mx-0 my-12 sm:mx-0 sm:my-0 sm:m-12 sm:space-x-4 sm:space-y-4 space-y-48 w-full'>
        <tbody>
          <tr>
            <th className='w-48'>Name</th>
            <th className='w-48'>Attendees</th>
            <th className='w-48'>Created At</th>
            <th className='w-48'>Delete</th>
          </tr>
          {dataList &&
            dataList.map(({ name, attendees, createdAt }) => (
              <tr
                className='text-center'
                //Throw away keys
                key={Math.random().toString(36).substr(2, 9)}
              >
                <td
                  className='capitalize text-md font-bold w-80 h-20 sm:w-48 sm:h-10'
                  key={name}
                >
                  {name}
                </td>
                <td className='text-lg sm:w-48 h-10' key={attendees}>
                  {attendees}
                </td>
                <td className='sm:w-48 h-10' key={createdAt}>
                  {createdAt}
                </td>
                <td>
                  <button
                    key={name}
                    className='pt-2 sm:w-48 h-10'
                    onClick={() => handleDelete(name, attendees)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default RSVPD;
