import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Left from './cmp/left/Left';
import Headers from './cmp/header/Headers'
import MId from './cmp/mid/Mid';
import Fotter from './cmp/Footer/Fotter';
import Test from './cmp/mid/test';
import User from './user/user';
import Checkin from './user/checkin';
import Reserve from './user/reserve';
import Tbcomment from './user/tbcomment';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Layout
        style={{

          minHeight: '100vh',
        }}
      >
        <Left />
        <Layout className="site-layout" style={{ backgroundColor: '#b6c4d1' }}>
          <Headers />
          <Router>
            <Routes>
              <Route exact path='/' element={<MId />} />
              <Route exact path='/room/:id' element={<Test />} />
              <Route exact path='/user' element={<User/>} />
              <Route exact path='/checkin' element={<Checkin />}/>
              <Route exact path='/reserve' element={<Reserve />}/>
              <Route exact path='/tbcomment' element={<Tbcomment />}/>
            </Routes>
          </Router>
          <Fotter />
        </Layout>
      </Layout>
    </div>
  );
};
export default App;