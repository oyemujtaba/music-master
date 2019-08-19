import React from 'react';

import Home from './components/Home';
import Signup from './components/Sign_up';
import Login from './components/Login';
import Mainpage from './components/Mainpage';

let Routes = [
  {
    path: '',
    exact: true,
    component: () => <Mainpage />,
    private: false
  },
  {
    path: '/home',
    exact: true,
    component: () => <Home />,
    private: true
  },
  {
    path: '/signup',
    exact: true,
    component: () => <Signup />,
    private: false
  },
  {
    path: '/login',
    exact: true,
    component: () => <Login />,
    private: false
  },
]

export default Routes;