import React from 'react';
import { useParams } from 'react-router-dom';
import { Card_object } from '../card_object/Card_object';
import '../user/reserve.css';
// import Input from 'antd/es/input/Input';
import { Divider, Input, DatePicker } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone ,HomeOutlined} from '@ant-design/icons';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';



const Reserve = () => {

    return (
        <div className='rbox'>
            <div className='re'>
                <Divider plain >預定中</Divider>
                <div className='re1'>
                    <img src='https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg' width="30%" />
                    <div className='re2'>
                        <Input.Group compact>
                            <DatePicker.RangePicker
                                style={{
                                    width: '100%',
                                    height: '80%',
                                }}
                            />
                        </Input.Group>
                        <Input prefix={<HomeOutlined />} disabled style={{ width: '100%', height: '30%' }} />
                        <Input prefix={<AttachMoneyIcon /> } suffix='TWD / 晚' disabled style={{ width: '100%', height: '30%' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reserve;