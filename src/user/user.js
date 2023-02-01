import React from 'react';
import { useParams } from 'react-router-dom';
import { Card_object } from '../card_object/Card_object';
import '../user/user.css'
import Input from 'antd/es/input/Input';
import { Divider } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { display } from '@mui/system';

const User = () => {

    return (
        // <div className='box'>
        //     <div className='user'>
        //         <Divider plain >個人資料</Divider>
        //         <div className='user1'>
        //             <img src='https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg' width="30%" />
        //             <div className='user2'>
        //                 <Input prefix={<UserOutlined />} disabled style={{ width: '100%', height: '30%' }} />
        //                 <Input prefix={<MailOutlined />} disabled style={{ width: '100%', height: '30%' }} />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div
            style={{
                margin: '16px 16px',

                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                height:'90%'
            }}
        >

            <div
                style={{
                    padding: 24,
                    minHeight: '80%',
                    minWidth: '80%',
                    background: '#aabdce',
                    borderRadius: '20px',
                    display: 'flex',
                    border: ' 1px solid rgba(0, 0, 0, 0.3)',
                    flexWrap: 'wrap', justifyContent: 'center',
                }}

            >
                 <div
            style={{
                margin: '30px 30px',
                border: ' 1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: '20px',
                boxShadow: '2px 2px 2px 2px ',
            }}
        >
                <div style={{ display: 'flex', width: '34%'}}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', }}>
                        <div style={{
                            width: '100%',
                            height: '70%',
                            display: 'flex',
                            margin:'10px 10px 10px -300px'
                        }}>
                            <img src='../image/Logo.png' width="100%" ></img>
                        </div>
                    </div>

                </div>
                <div style={{ display: 'flex', width: '5%'}}></div>
                <div style={{ display: 'flex', width: '50%',flexWrap: 'wrap', }}>
                    <div style={{
                            display: 'flex',
                            right: '0px',
                            height: '40px',
                            border: ' 1px solid rgba(0, 0, 0, 0.3)',
                            width: '100%',
                            borderRadius: '20px',
                            margin:'60px 1px -20px 1px',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            個人資訊
                    </div>
                    <div style={{
                        position: 'relative',
                        right: '0px',
                        border: ' 1px solid rgba(0, 0, 0, 0.3)',
                        width: '100%',
                        borderRadius: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                        margin:'30px 1px 70px 1px' 
                    }}>
                        <div style={{
                            position: 'relative',
                            right: '0px',
                            height: '200px',
                            width: '90%',
                            borderRadius: '20px',
                            
                        }}>
                            <Input prefix={<UserOutlined />} disabled style={{ width: '100%', height: '30%', borderRadius: '20px',margin:'30px 1px 1px 1px' }} />
                            <Input prefix={<MailOutlined />} disabled style={{ width: '100%', height: '30%', borderRadius: '20px',margin:'30px 1px 1px 1px' }} />
                        </div>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default User;