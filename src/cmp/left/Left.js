import City from './City'
import './Left.css'
import { IconButton, Stack, Button, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


const Left = () => {
  const [Account, setAccount] = useState("");
  async function Login() {
    const ethereum = window.ethereum;
    var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    var account = accounts[0];
    var wallet_address = account;
    setAccount(wallet_address);
  }
  useEffect(() => {
    if (Account === "") {
      setAccount("帳號資訊")
    } else {
      Login();
    }
  }, [Account])

  return (
    <div>
      <div className='Left'>
        <Stack direction="row">
        <Tooltip title={Account}>
          <IconButton color="block" size="large" onClick={Login}>
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="遊戲">
          <IconButton color="block" size="large">
            <SportsEsportsIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        </Stack>
        <City />
      </div>
    </div>

  )
}


export default Left