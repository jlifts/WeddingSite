import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { PrivateRoute } from './routes/privateRoute';

export default (
  <Switch>
    <Route path='/signup' />
    <Route path='/login' />
    <Route path='/' />
    <Route path='/rsvp' />
    <Route path='/photos' />
    <Route path='/faq' />
    <Route path='/thankyou' />
    <Route path='/places-to-stay' />
    <Route path='/passwordreset' />

    {/* <PrivateRoute path='/profile' />
    <PrivateRoute path='/rsvplist' />
    <PrivateRoute path='/bridesmaid' />
    <PrivateRoute path='/party' />
    <PrivateRoute path='/groomsmen' />
    <PrivateRoute path='/admin' />
    <PrivateRoute path='/photoadmin' /> */}
  </Switch>
);
