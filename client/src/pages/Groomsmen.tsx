import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Groomsmen: React.FC = () => {
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
    <div>
      {error && (
        <div
          className='bg-red-100 border-l-4 border-red-500 text-red-700 p-3'
          role='alert'
        >
          <p className='font-bold'>Error</p>
          <p>{error}</p>
        </div>
      )}
      Grooms Home
      <img src={currentUser.photoURL} />
      <div>{currentUser.displayName}</div>
      <Link to='/profile'>Profile</Link>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Groomsmen;
