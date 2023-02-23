import React, { useState, useEffect } from 'react'
import {
    InfoCircleOutlined, HomeTwoTone, CompassTwoTone,
    MoneyCollectTwoTone, SwitcherTwoTone, TagTwoTone, PhoneTwoTone
} from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import { Divider } from 'antd'
import { Checkbox } from 'antd';
import '../Register_cmp/Register_detil.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from 'react-select';
import { width } from '@mui/system';
const { TextArea } = Input;
const Register_detil = ({ set_Contract_equiment, Contract_equiment, set_Contract_phone, Contract_phone, Contract_Room_name, set_Contract_Room_name
    , Contract_Room_address, set_Contract_Room_address, Contract_introduce, set_Contract_introduce
    , set_Contract_Room_money, Contract_Room_money, Contract_Room_type, set_Contract_Room_type }) => {
    const [chooseItem, setChooseItem] = useState('')
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);
    const [RoomName, setRoomName] = useState('')
    const [Location, setLocation] = useState('')
    const [money, setmoney] = useState('')
    const [Address, setAddress] = useState('')
    const [squarefeet, setsquarefeet] = useState('')
    const [introduce, setintroduce] = useState('')
    const options = [
        { value: '一人房', label: '一人房', color: '#5243AA' },
        { value: '雙人房', label: '雙人房', color: '#FF8B00' },
        { value: '四人房', label: '四人房', color: '#FFC400' },
        { value: '六人房', label: '六人房', color: '#36B37E' },
        { value: '八人房', label: '八人房', color: '#00875A' },
        { value: '十人房', label: '十人房', color: '#253858' },
    ];
    const onChange = (e) => {
        if (e.target.id == 'free_parking') {
            setequimentall(e.target.id, e.target.checked, 0)
        } else if (e.target.id == 'free_wifi') {
            setequimentall(e.target.id, e.target.checked, 1)
        } else if (e.target.id == 'spa') {
            setequimentall(e.target.id, e.target.checked, 2)
        } else if (e.target.id == 'tub') {
            setequimentall(e.target.id, e.target.checked, 3)
        } else if (e.target.id == 'coffee_shop') {
            setequimentall(e.target.id, e.target.checked, 4)
        } else if (e.target.id == 'restaurant') {
            setequimentall(e.target.id, e.target.checked, 5)
        } else if (e.target.id == 'Gym') {
            setequimentall(e.target.id, e.target.checked, 6)
        } else if (e.target.id == 'luggage') {
            setequimentall(e.target.id, e.target.checked, 7)
        }
        console.log(`checked = ${e.target.checked}`);

    };
    function setequimentall(eq, checked, number) {
        const newarr = [...Contract_equiment]
        if (checked == false) {
            newarr[number] = 'false'
            set_Contract_equiment(newarr)
        } else if (checked == true) {
            newarr[number] = eq;
            set_Contract_equiment(newarr)
        }
    }
    var wallet_address = ""
    function InputRoomName(e) {
        set_Contract_Room_name(e.target.value)
        console.log('cr', Contract_Room_name);
    }
    //TODO:
    function InputRoomType(e) {
        set_Contract_Room_type(e.value)
        console.log('ctt', Contract_Room_type);
    }
    function InputLocation(e) {
        set_Contract_Room_address(e.target.value)
        console.log('ca', Contract_Room_address);
    }
    function Inputmoney(e) {
        set_Contract_Room_money(e.target.value)
        console.log('cam', Contract_Room_money);
    }
    function InputPhone(e) {
        set_Contract_phone(e.target.value)
        console.log('cp', Contract_phone)
    }
    function Inputintroduce(e) {
        set_Contract_introduce(e.target.value)
        console.log('ci', Contract_introduce);
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
            <div style={{ height: '240px', borderRadius: '20px', border: '1px ridge rgba(0, 0, 0, 0.3)' }}>
                <Input value={Address} onChange={Login} prefix={<TagTwoTone />} suffix="刊登者錢包地址" disabled style={{ width: '95%', margin: '10px 0px 5px 0' }} />
                <Input value={Contract_phone} onChange={InputPhone} style={{ width: '95%', margin: '0px 0px 5px 0' }}
                    placeholder="請輸入電話號碼"
                    prefix={<PhoneTwoTone className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="電話號碼">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    } />
                <Input value={Contract_Room_name} onChange={InputRoomName} style={{ width: '95%', margin: '0px 0px 5px 0' }}
                    placeholder="請輸入房間名稱"
                    prefix={<HomeTwoTone className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="房間名稱">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    } />
                <Input value={Contract_Room_address} onChange={InputLocation} style={{ width: '95%', margin: '0px 0px 5px 0' }}
                    placeholder="請輸入房間地點"
                    prefix={<CompassTwoTone className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="房間地點">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    } />
                <Input value={Contract_Room_money} onChange={Inputmoney} style={{ width: '95%', margin: '0px 0px 5px 0' }}
                    placeholder="請輸入金額"
                    prefix={<MoneyCollectTwoTone className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="金額">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    } />
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name="color"
                    options={options}
                    placeholder='請選擇房型'
                    // onChange={(e) => {try{console.log(e.value)}catch(e){};}}
                    onChange={(e) => {try{InputRoomType(e)}catch(e){};}}
                    // onChange={InputRoomType()}
                    // value={Contract_Room_type}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            textAlign: 'left',
                            width: '95%',
                            minHeight: '30px',
                            margin: '0px 0px 0px 23px',
                            fontSize: '10px',
                        }),
                    }}
                />
            </div>
            <Divider orientation="left">房間描述</Divider>
            <div style={{ height: '150px', borderRadius: '20px', border: '1px ridge rgba(0, 0, 0, 0.3)' }}>
                <TextArea
                    value={Contract_introduce}
                    showCount
                    maxLength={300}
                    style={{ width: '95%', height: 120, margin: '15px 10px 20px 20px' }}
                    onChange={Inputintroduce}
                    placeholder="房間敘述"
                />
            </div>
            <Divider orientation="left">其他設備</Divider>
            <div>
                <Checkbox id='free_parking' className='chenkboxs' onClick={onChange}>免費停車</Checkbox>
                <Checkbox id='free_wifi' className='chenkboxs' onClick={onChange}>免費無線網路</Checkbox>
                <Checkbox id='spa' className='chenkboxs' onClick={onChange}>溫泉</Checkbox>
                <Checkbox id='tub' className='chenkboxs' onClick={onChange}>浴缸</Checkbox>
                <Checkbox id='coffee_shop' className='chenkboxs' onClick={onChange}>咖啡店</Checkbox>
                <Checkbox id='restaurant' className='chenkboxs' onClick={onChange}>餐廳</Checkbox>
                <Checkbox id='Gym' className='chenkboxs' onClick={onChange}>健身房</Checkbox>
                <Checkbox id='luggage' className='chenkboxs' onClick={onChange}>行李</Checkbox>
            </div>
        </div>

    )
}

export default Register_detil