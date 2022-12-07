import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './cmp/header/Search';
import City from './cmp/left/City';
import { Stack } from '@mui/material';
import Home from './cmp/mid/Home';

function Banner() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>

                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='city'>
                    <City />
                    <Home />
            </div>
            
            {/* <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
            </div> */}
            <div className='ad'>
                ads
            </div>
        </div>
    )
}

export default Banner