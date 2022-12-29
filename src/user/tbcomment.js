import React from 'react';
import { useParams } from 'react-router-dom';
import { Card_object } from '../card_object/Card_object';
import '../user/tbcomment.css';
// import Input from 'antd/es/input/Input';
import { Divider, Input, DatePicker } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone ,HomeOutlined,CommentOutlined} from '@ant-design/icons';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const{TextArea}=Input


const Tbcomment = () => {

    return (
        <div className='tbox'>
            <div className='tbc'>
                <Divider plain >待評論</Divider>
                <div className='tbc1'>
                    <img src='https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg' width="30%" />
                    <div className='tbc2'>
                        <Input.Group compact>
                            <DatePicker.RangePicker
                                style={{
                                    width: '100%',
                                    height: '80%',
                                }}
                            />
                        </Input.Group>
                        <Input prefix={<HomeOutlined />} disabled style={{ width: '100%',height:'30%' }} />
                        <TextArea style={{width:'100%'}} showCount maxLength={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tbcomment;