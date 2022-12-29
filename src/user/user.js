import React from 'react';
import { useParams } from 'react-router-dom';
import { Card_object } from '../card_object/Card_object';
import '../user/user.css'
import Input from 'antd/es/input/Input';
import { Divider } from 'antd';
import { UserOutlined ,MailOutlined } from '@ant-design/icons';

const User = () => {

    return (
        <div className='box'>
            <div className='user'>
                <Divider plain >個人資料</Divider>
                <div className='user1'>
                    <img src='https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg' width="30%" />
                    <div className='user2'>
                        <Input prefix={<UserOutlined />} disabled style={{ width: '100%', height: '30%' }} />
                        <Input prefix={<MailOutlined />} disabled style={{ width: '100%', height: '30%' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;