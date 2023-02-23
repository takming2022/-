import React from 'react';
import '../user/user.css'
import Input from 'antd/es/input/Input';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const User = () => {
    setTimeout(() => {
        // 判斷網頁載入完成
        const items = document.querySelectorAll('.item');
        console.log(items);
        items.forEach((item) => {
            item.addEventListener('click', () => {
                removeActive();
                item.classList.add('active');
            });
        });
        function removeActive() {
            items.forEach((item) => {
                item.classList.remove('active');
            });
        }
    }, 500);

    return (
        <div style={{padding:'0px 15px'}}>
        <Breadcrumb
        style={{
            margin: '16px 0',
        }}
    >
    </Breadcrumb>
        <div
            style={{
                minHeight: '80vh',
                background: '#DCE0E5',
                borderRadius: '20px',
                border: ' 1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="container">
                <div class="cover">
                    <img src="https://picsum.photos/300/300" alt=""></img>
                </div>
                <div class="head">
                    <div class="item active">
                        <div class="title">
                            標題1
                        </div>
                    </div>
                    <div class="item">
                        <div class="title">
                            標題2
                        </div>
                    </div>
                    <div class="item">
                        <div class="title">
                            標題3
                        </div>
                    </div>
                </div>
                <div class="content">
                </div>
            </div>
        </div>
 </div>
    )
}

export default User;