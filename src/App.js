import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Left from './cmp/Left/Left';
import Headers from './cmp/Header/Headers'
import MId from './cmp/Mid/Mid';
import Fotter from './cmp/Footer/Fotter';
import Test from './cmp/Mid/test';
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
            </Routes>
          </Router>
          <Fotter />
        </Layout>
      </Layout>
    </div>
  );
};
export default App;