import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './layouts/landing';
import Dashboard from './layouts/dashboard';
import AuthenticationGuard from './auth/AuthenticationGuard';
import Profile from './layouts/dashboard/profile';
import CreateVoice from './layouts/dashboard/createvoice';

const Routing = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Landing}></Route>
      <Route exact path='/dashboard' component={<AuthenticationGuard component={Dashboard}/> }>
          <Route index element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<CreateVoice />} />
          <Route path="*" element={<Landing />} />
      </Route>

    </Routes>
  );
}

export default Routing;