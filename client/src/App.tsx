import React from 'react';
import SignUp from './pages/signupform';
import SignIn from './pages/signinform';
import Home from './pages/Home';
import RSVP from './pages/RSVP';
import Maid from './pages/Bridesmaids';
import Admin from './pages/Admin';
import Groom from './pages/Groomsmen';
import { Switch, Route, useLocation } from 'react-router-dom';

const App: React.FC = () => {
  const location = useLocation();
  return (
    <Switch location={location} key={location.key}>
      <Route path='/signup' exact component={SignUp} />
      <Route path='/login' exact component={SignIn} />
      <Route path='/' exact component={Home} />
      <Route path='/rsvp' exact component={RSVP} />
      <Route path='/groomsmen' exact component={Maid} />
      <Route path='/bridesmaid' exact component={Groom} />
      <Route path='/admin' exact component={Admin} />
    </Switch>
  );
};

export default App;
