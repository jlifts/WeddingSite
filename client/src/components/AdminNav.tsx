/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BRIDE, GROOM } from '../key';
import { useAuth } from '../utils/AuthContext';
import ErrorAlert from './ErrorAlert';

const AdminNav: React.FC = () => {
  const [error, setError] = useState<any>(null);
  const history = useHistory();
  const { logout, currentUser } = useAuth();

  async function handleLogOut() {
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to Logout');
    }
  }

  return (
    <>
      <ErrorAlert error={error} />
      <nav className="flex flex-col sm:flex-row items-end w-full justify-between">
        <h4 className="text-2xl mb-5 sm:mb-0 sm:text-5xl">
          Hello{' '}
          {currentUser.uid === GROOM
            ? 'Groom!'
            : currentUser.uid === BRIDE
            ? 'My Beautiful Bride!'
            : history.push('/party')}
        </h4>
        <div className="flex">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/admin" className="ml-4">
            Dashboard
          </Link>
          <Link to="/photoadmin" className="ml-4">
            Photos
          </Link>
          <Link to="/faqsadmin" className="ml-4">
            FAQs
          </Link>
          <Link to="/profile" className="mx-4">
            Profile
          </Link>
          <button onClick={handleLogOut} className="" aria-label="Log Out">
            Log Out
          </button>
        </div>
      </nav>
    </>
  );
};

export default AdminNav;
