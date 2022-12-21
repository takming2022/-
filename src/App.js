import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Left from './cmp/Left/Left';
import Headers from './cmp/Header/Headers';
import MId from './cmp/Mid/MId';
import Fotter from './cmp/Footer/Fotter';
const App = () => {
  return (
    <Layout
    style={{
     
      minHeight: '100vh',
    }}
  >
      <Left />
      <Layout className="site-layout" style={{backgroundColor:'#b6c4d1'}}>
      <Headers />
        <MId />
        <Fotter />
      </Layout>
      </Layout>
  );
};
export default App;