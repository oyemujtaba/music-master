import React from 'react';

import Home from './components/Home';
import Signup from './components/Sign_up';
import Login from './components/Login';

let Routes = [
    {
        path: '/home',
        exact: true,
        component: () => <Home/>,
        private: true
      },
      {
        path: '/signup',
        exact: true,
        component: () => <Signup/>,
        private: false
      },
      {
        path: '/login',
        exact: true,
        component: () => <Login/>,
        private: false
      },
]

export default Routes;