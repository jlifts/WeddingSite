import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import ScrollToTop from '../helpers/ScrollToTop';
import {
  Home,
  RSVP,
  Photos,
  FAQ,
  PlacesToStay,
  PasswordReset,
  UpdateProfile,
  Groomsmen,
  AdminFAQ,
  NotFound,
  Bridesmaids,
  PartySelect,
  ThankyouPage,
  AdminDashboard,
  AdminPhotos,
  AdminRSVP,
  SignIn,
  SignUp,
} from '../pages';
import PrivateRoute from './PrivateRoute';

const Routes: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Switch location={location} key={location.key}>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/" exact component={Home} />
        <Route path="/rsvp" exact component={RSVP} />
        <Route path="/photos" exact component={Photos} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/thankyou" exact component={ThankyouPage} />
        <Route path="/places-to-stay" exact component={PlacesToStay} />
        <Route path="/passwordreset" exact component={PasswordReset} />
        <PrivateRoute path="/profile" component={UpdateProfile} />
        <PrivateRoute path="/rsvplist" component={AdminRSVP} />
        <PrivateRoute path="/bridesmaid" component={Bridesmaids} />
        <PrivateRoute path="/party" component={PartySelect} />
        <PrivateRoute path="/groomsmen" component={Groomsmen} />
        <PrivateRoute path="/admin" exact component={AdminDashboard} />
        <PrivateRoute path="/photoadmin" component={AdminPhotos} />
        <PrivateRoute path="/faqsadmin" component={AdminFAQ} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
