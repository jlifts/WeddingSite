/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

export default function privateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    ></Route>
  );
}
