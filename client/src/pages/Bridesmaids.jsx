/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Clock } from '../components';
import BridalPartyNav from '../components/BridalPartyNav';
import ErrorAlert from '../components/ErrorAlert';

const Bridesmaids = () => {
  const [error, setError] = useState('');

  return (
    <section className=" h-full sm:h-screen p-7 font-body overflow-none w-screen">
      {error && <ErrorAlert error={error} />}
      <BridalPartyNav setError={setError} />
      <div className="flex flex-col sm:flex-row mt-12 sm:mt-48 space-y-12 sm:space-y-0">
        <div>
          <h5 className="text-4xl">Important Dates</h5>
          <div>{}</div>
          <div className="mt-12 sm:mt-48">
            <Link to="#" className="text-4xl hover:text-blue-400">
              Gown's Warehouse
            </Link>
          </div>
        </div>
        <div className="sm:ml-96">
          <div>
            <h5 className="text-lg sm:text-4xl">The Big Day</h5>
            <div className="text-lg sm:text-3xl">
              <Clock text="The Big Day is Here!" />
            </div>
            <div className="mt-12 sm:mt-24">
              <Link to="#" className="text-3xl sm:text-4xl hover:text-blue-400">
                &#x1f470;&#x1f3fb; Bachelorette Party &#128526;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridesmaids;
