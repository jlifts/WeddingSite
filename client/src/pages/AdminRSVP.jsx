/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { trackPromise } from 'react-promise-tracker';
import { useAuth } from '../utils/AuthContext';
// import axiosAuth from '../api/axiosAuth';
import axios from '../api/axios';
import reqs from '../api/req';
import { Modal } from '../components';
import LoadingIndicator from '../components/UI/Loader';
import AdminNav from '../components/AdminNav';

const RSVPD = () => {
  const [dataList, setDataList] = useState([]);
  const [total, setTotal] = useState(0);
  const { currentUser } = useAuth();
  const token = currentUser.getIdToken(true);

  // Firestore + Axios
  // async function handleUpdate(number) {
  //   // update(number);
  //   console.log(number);
  // }

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
    await window.location.reload();
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
    <section className="h-full w-screen py-12 px-6 sm:p-12 bg-bg2 font-body min-h-screen">
      <AdminNav />
      <div className="my-12 text-lg">Total Guest Count: {total} </div>
      <Modal Guest button_label={'Manual Update'} />
      <div className="font-body flex justify-center items-center">
        <LoadingIndicator />
      </div>
      <table className="mx-0 my-12 sm:mx-0 sm:my-0 sm:m-12 sm:space-x-4 sm:space-y-4 space-y-48 w-full">
        <tbody>
          <tr>
            <th className="w-48">Name</th>
            <th className="w-48">Attendees</th>
            <th className="w-48">Created At</th>
            <th className="w-48">Delete</th>
          </tr>
          {dataList &&
            dataList.map(({ name, attendees, createdAt }) => (
              <tr
                className="text-center"
                //Throw away keys
                key={Math.random().toString(36).substr(2, 9)}
              >
                <td
                  className="capitalize text-md font-bold w-80 h-20 sm:w-48 sm:h-10"
                  key={name}
                >
                  {name}
                </td>
                <td className="text-lg sm:w-48 h-10" key={attendees}>
                  {attendees}
                </td>
                <td className="sm:w-48 h-10" key={createdAt}>
                  {createdAt}
                </td>
                <td>
                  <button
                    aria-label="Delete Guest"
                    key={name}
                    className="pt-2 sm:w-48 h-10"
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
