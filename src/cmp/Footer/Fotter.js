import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { border, width } from '@mui/system';
const { Header, Content, Footer, Sider } = Layout;

const Fotter = () => {
  return (

    <div
      style={{
        textAlign: 'center',

        display:'flex',
        position: 'absolute',
        bottom: '0',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    ><div>
        takmikng 2022 區空間-智能訂房服務
      </div>
    </div  >

  )
}

export default Fotter