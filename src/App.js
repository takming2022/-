import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Left from './cmp/left/Left';
import Headers from './cmp/header/Headers'
import MId from './cmp/mid/Mid';
import Fotter from './cmp/Footer/Fotter';
import Test from './cmp/mid/test';
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