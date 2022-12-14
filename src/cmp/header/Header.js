import React, { useEffect, useState } from 'react'
import "./Header.css"
import Search from './Search'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, Stack, Tooltip } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
// import { ethers } from 'ethers';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
    return (
        <div className='Header'>
            <div className='logo'>
               <img src='./image/Logo.png'></img>
            </div>
            <div className='middle'>
                <Search />
            </div>
            <div className='Icon'>
            <Stack direction="row" >
                    <Tooltip title="發布">
                        <IconButton color="block" size="large">
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
        </div>
    )
}

export default Header