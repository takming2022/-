import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import CarD from './CarD';
import Home from './Home';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Pagination } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const MId = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Content
            style={{
                margin: '0 16px',
            }}
        >
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
            </Breadcrumb>
            <div
                style={{
                    padding: 24,
                    minHeight: 360,
                    background: '#bdb499',
                    borderRadius: '20px',
                    border: ' 1px solid rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    margin: '0px 0px 0px 0'
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columns={{ xs: 6, sm: 8, md: 16 }}>
                        <Home />
                    </Grid>
                </Box>
            </div>

        </Content >
    )
}

export default MId