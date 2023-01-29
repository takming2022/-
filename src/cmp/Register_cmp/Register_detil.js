import React, { useState, useEffect } from 'react'
import { InfoCircleOutlined, HomeTwoTone, CompassTwoTone, 
        MoneyCollectTwoTone, SwitcherTwoTone,TagTwoTone } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import { Divider } from 'antd'
import { Checkbox } from 'antd';
const { TextArea } = Input;
const Register_detil = () => {
    const [RoomName, setRoomName] = useState('')
    const [Location, setLocation] = useState('')
    const [money, setmoney] = useState('')
    const [Address, setAddress] = useState('')
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    var wallet_address = ""
    function InputRoomName(e) {
        setRoomName(e.target.value)
        console.log(RoomName);
    }
    async function Login() {
        const ethereum = window.ethereum;
        var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        var account = accounts[0];
        wallet_address = account;
        setAddress(wallet_address)
    }
    useEffect(() => {
        Login()
    }, [])
    return (
        <div >
            <Divider orientation="left" >房間資訊</Divider>
            <div style={{ height: '200px', borderRadius: '20px', border: '1px ridge rgba(0, 0, 0, 0.3)' }}>
                <Input value={Address} onChange={Login} prefix={<TagTwoTone />} suffix="刊登者錢包地址" disabled style={{ width: '95%', margin: '10px 0px 5px 0' }} />
                <Input value={RoomName} onChange={InputRoomName} style={{ width: '95%', margin: '0px 0px 5px 0' }}
                    placeholder="請輸入房間名稱"
                    prefix={<HomeTwoTone className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="房間名稱">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    } />
                <Input value={Location} onChange={setLocation} style={{ width: '95%', margin: '0px 0px 5px 0' }}
                    placeholder="請輸入房間地點"
                    prefix={<CompassTwoTone className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="房間地點">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    } />
                <Input value={money} onChange={setmoney} style={{ width: '95%', margin: '0px 0px 5px 0' }}
                    placeholder="請輸入金額"
                    prefix={<MoneyCollectTwoTone className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="金額">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    } />
                <Input value={money} onChange={setmoney} style={{ width: '95%', margin: '0px 0px 5px 0' }}
                    placeholder="請輸入坪數"
                    prefix={<SwitcherTwoTone className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="坪數">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    } />
            </div>
            <Divider orientation="left">房間描述</Divider>
            <div style={{ height: '150px', borderRadius: '20px', border: '1px ridge rgba(0, 0, 0, 0.3)' }}>
                    <TextArea
                        showCount
                        maxLength={300}
                        style={{ width:'95%',height: 120,margin: '15px 10px 20px 20px' }}
                        onChange={onChange}
                        placeholder="房間敘述"
                    />
                </div>
            <Divider orientation="left">其他設備</Divider>
            <div>

                <Checkbox className='chenkboxs' onChange={onChange}>免費停車</Checkbox>
                <Checkbox className='chenkboxs' onChange={onChange}>免費無線網路</Checkbox>
                <Checkbox className='chenkboxs' onChange={onChange}>溫泉</Checkbox>
                <Checkbox className='chenkboxs' onChange={onChange}>浴缸</Checkbox>
                <Checkbox className='chenkboxs' onChange={onChange}>咖啡店</Checkbox>
                <Checkbox className='chenkboxs' onChange={onChange}>餐廳</Checkbox>
                <Checkbox className='chenkboxs' onChange={onChange}>健身房</Checkbox>
                <Checkbox className='chenkboxs' onChange={onChange}>行李</Checkbox>
            </div>
        </div>

    )
}

export default Register_detil