import React from 'react'
import "./Header.css"
import Search from './Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, Stack, Button, Tooltip } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LanguageIcon from '@mui/icons-material/Language';
const Header = () => {
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
                    <Tooltip title="帳號資訊">
                    <IconButton color="block" size="large">
                        <AccountCircleIcon fontSize="large" />
                    </IconButton>
                    </Tooltip>
                </Stack>
            </div>
        </div>
    )
}

export default Header