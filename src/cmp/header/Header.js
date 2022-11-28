import React, { useEffect, useState } from 'react'
import "./Header.css"
import Search from './Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, Stack, Button, Tooltip } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LanguageIcon from '@mui/icons-material/Language';
import { ethers } from 'ethers';
const Header = () => {
    const [Account,setAccount] = useState("");
    async function Login(){
        const ethereum = window.ethereum;
        var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        var account = accounts[0];
        var wallet_address = account;
        setAccount(wallet_address);
    }
    useEffect(() =>{
        if (Account === "") {
            setAccount("帳號資訊")
        }else{
            Login();
        }
    },[Account])
    return (
        <div className='Header'>
            <div>
                <Search />
            </div>

            <div className='Iconn'>
                <Stack direction="row" >
                <Tooltip title="帳號資訊">
                    <IconButton color="block" size="large">
                        <AccountCircleIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="帳號資訊">
                    <IconButton color="block" size="large">
                        <AccountCircleIcon fontSize="large" />
                    </IconButton>
                    </Tooltip>
                    <Tooltip title="語言">
                    <IconButton color="block" size="large">
                        <LanguageIcon fontSize="large" />
                    </IconButton>
                    </Tooltip>
                    <Tooltip title="遊戲">
                    <IconButton color="block" size="large">
                        <SportsEsportsIcon fontSize="large" />
                    </IconButton>
                    </Tooltip>
                    <Tooltip title={Account}>
                    <IconButton color="block" size="large" onClick={Login}>
                        <AccountCircleIcon fontSize="large" />
                    </IconButton>
                    </Tooltip>
                </Stack>
            </div>
        </div>
    )
}

export default Header