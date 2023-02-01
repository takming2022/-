import React, { useState, useEffect } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import "./Header.css"
import { Input, Space } from 'antd';
import { IconButton, Stack, Tooltip } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { AudioOutlined } from '@ant-design/icons';
import Registers from '../Register_cmp/Register.js'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Button } from 'antd';
const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;
const MySwal = withReactContent(Swal)
const Headers = () => {
  const [Account, setAccount] = useState("");
  var wallet_address = "";
  const Swal = require('sweetalert2');
  function link_adress_alert() {

    Swal.fire({
      
      title: '是否登入小狐狸',
      width: 700,
      icon: 'info',
      confirmButtonText: '連接',
      cancelButtonText: '取消',
      showCancelButton: true,
      showCloseButton: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        await Login();
      } else {

      }
    })
  }
  useEffect(() => {
    Login()
  }, [])
  async function Login() {
    const ethereum = window.ethereum;
    var accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      .then((e) => {
        var account = e[0];
        wallet_address = account;
        setAccount(hidden(wallet_address))
      }).catch((e) => {
        if (e.code === 4001) {
          window.alert('Please connect to MetaMask.');
        }
      });

  }
  function hidden(str) {
    return (
      str.substring(0, 6) +'....'+ str.substring(str.length - 4)
    );
  }

  async function Register() {
    await MySwal.fire({
      title: '刊登',
      width: 1000,
      border: '1px solid #cccccc',
      html: <Registers />,
      showCloseButton: true,
      showConfirmButton: false,
    })
  }
  const onSearch = (value) => console.log(value);
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />)
    function homeclick() {
      window.open('/','_self')
    }
  return (
    <Header
      style={{
        padding: 0,
        background: '#3c6894',
        backgroundColor: '#3c6894',
        border: ' 1px solid rgba(0, 0, 0, 0.3)',
        display: 'flex'
      }}
    >
      <div className='logo'>
        <img onClick={() => homeclick()} width='60' src='../image/Logo.png'></img>
      </div>
      <div className='middle'>
        <Search
          placeholder="search"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
      </div>
      <div className='Icon'>
        {Account == "" ?
          <Button style={{
            color: 'black',
            borderColor: 'black',
            borderRadius: 35,
            margin: '15px 0px 0px 0',
            fontSize: "10px",
            width: '35%',
          }} onClick={link_adress_alert} ghost>
            連接錢包
          </Button> :
          <Button style={{
            borderRadius: 35,
            margin: '15px 0px 0px 0',
            fontSize: "80%",
            width: '35%',
            textAlign:'center'
          }} type="primary" onClick={{}} ghost>
            {Account}
          </Button>
        }
        <Stack direction="row" >
          <Tooltip title="刊登">
            <IconButton onClick={Register} color="block" size="large">
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="語言">
            <IconButton color="block" size="large">
              <LanguageIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Stack>
      </div>
    </Header >

  )
}

export default Headers