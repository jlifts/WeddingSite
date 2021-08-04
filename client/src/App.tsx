import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';

import SignUp from './pages/auth/signupform';
import SignIn from './pages/auth/signinform';
import Profile from './pages/auth/updateProfile';
import Home from './pages/Home';
import RSVP from './pages/RSVP';
import Photo from './pages/Photos';
import Maid from './pages/Bridesmaids';
import Admin from './pages/Admin';
import Groom from './pages/Groomsmen';
import Party from './pages/party';
import RSVPD from './pages/RSVPD';
import Thankyou from './pages/Thankyou';
import PasswordReset from './pages/auth/passwordReset';
import { AuthProvider } from './utils/AuthContext';
import PrivateRoute from './routes/privateRoute';
import FAQ from './pages/FAQ';
import PlacesToStay from './pages/PlacesToStay';
import PhotosAdmin from './pages/PhotosAdmin';
import ScrollToTop from './hooks/ScrollToTop';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  const location = useLocation();
  return (
    <AuthProvider>
      {/* <AnimatePresence exitBeforeEnter initial={false}> */}
      <ScrollToTop />
      <Switch location={location} key={location.key}>
        <Route path='/signup' exact component={SignUp} />
        <Route path='/login' exact component={SignIn} />
        <Route path='/' exact component={Home} />
        <Route path='/rsvp' exact component={RSVP} />
        <Route path='/photos' exact component={Photo} />
        <Route path='/faq' exact component={FAQ} />
        <Route path='/thankyou' exact component={Thankyou} />
        <Route path='/places-to-stay' exact component={PlacesToStay} />
        <Route path='/passwordreset' exact component={PasswordReset} />
        <PrivateRoute path='/profile' component={Profile} />
        <PrivateRoute path='/rsvplist' component={RSVPD} />
        <PrivateRoute path='/bridesmaid' component={Maid} />
        <PrivateRoute path='/party' component={Party} />
        <PrivateRoute path='/groomsmen' component={Groom} />
        <PrivateRoute path='/admin' exact component={Admin} />
        <PrivateRoute path='/photoadmin' component={PhotosAdmin} />
        <Route component={NotFound} />
      </Switch>
      {/* </AnimatePresence> */}
    </AuthProvider>
  );
};

export default App;
