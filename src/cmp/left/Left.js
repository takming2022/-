import City from './City'
import './Left.css'
import { IconButton, Stack, Button, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Swal from 'sweetalert2';

const Left = () => {
  const [Account, setAccount] = useState("");
  var wallet_address =""
  const Swal = require('sweetalert2')
  function link_adress_alert() {
    Swal.fire({
      title: '是否登入小狐狸',
      width: 700,
      icon: 'info',
      confirmButtonText: '登入',
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

  async function Login() {
    const ethereum = window.ethereum;
    var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    var account = accounts[0];
    wallet_address = account;
    setAccount(wallet_address)
  }
  useEffect(() => {
    Login()
  }, [])
  
  return (
    <div>
      <div className='Left'>
        {Account == "" ? <div style={{ width: '100%', marginTop: '10px' }}>
          <Button style={{
            borderRadius: 35,
            backgroundColor: "#21b6ae",
            padding: "10px 10px,10px",
            fontSize: "10px",
            width: '100%',
          }} onClick={link_adress_alert} variant="contained">登入</Button>
        </div> : <div style={{width:'100%',marginTop:'10px'}}>
          <Button style={{
            borderRadius: 20,
            padding: "10px 10px,10px",
            fontSize: "10px",
            width:'100%',
          }}  variant="outlined">{Account}</Button>
        </div>}
        <Button startIcon={<AccountCircleIcon />} style={{
            borderRadius: 20,
            padding: "",
            fontSize: "px",
            marginTop:'10px',

          }} variant="outlined">帳戶訊息</Button>
        <Button startIcon={<SportsEsportsIcon />} style={{
            borderRadius: 20,
            fontSize: "px",
            color:'#9e9e9e',
            borderColor:'#9e9e9e',
            marginTop:'10px',

          }}  variant="outlined">遊戲</Button>
        <City />
      </div>
    </div>

  )
}


export default Left