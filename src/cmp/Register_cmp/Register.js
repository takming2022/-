import React, { useState, useEffect } from 'react'
import Registerimage from './Registerimage'
import { Upload, Button, message, UploadProps } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import Register_detil from './Register_detil';
import { ethers } from 'ethers';
import Web3 from 'web3';
import { address, abi } from '../../Contract/Contract';
import './Register.css'
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [Contract_phone, set_Contract_phone] = useState('')
  const [Contract_Room_address, set_Contract_Room_address] = useState('')
  const [Contract_introduce, set_Contract_introduce] = useState('')
  const [Contract_Room_name, set_Contract_Room_name] = useState('')
  const [Contract_equiment, set_Contract_equiment] = useState(['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'])
  const [Contract_Room_id, set_Contract_Room_id] = useState('')
  const [Contract_Room_image, set_Contract_Room_image] = useState([])
  const [Contract_Room_money, set_Contract_Room_money] = useState('')
  const [Contract_Room_type, set_Contract_Room_type] = useState('')
  const [Contract_file_image, set_Contract_file_image] = useState([])


  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contractInstance_singner = new ethers.Contract(address, abi, signer);
  //使用singer 連接合約 對合約有可讀寫權限
  const contractInstance_provider = new ethers.Contract(address, abi, provider);
  //使用Provider 連接合約 只會對合約有可讀權限
  async function testt() {
    var wallet_address;
    await window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(async (e) => {
        var account = e[0];
        wallet_address = account;
        const ethereum = window.ethereum
        var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        var wallet_address = accounts[0];

      }).catch((e) => {
        if (e.code === 4001) {
          window.alert('Please connect to MetaMask.');
          return;
        }
      });

    let amount = Web3.utils.toWei("0.0001");
    const newarr = [...Contract_file_image]
    for(let i=0 ; i<Contract_file_image.length;i++){
        newarr[i] = Contract_file_image[0].url
    }
    set_Contract_Room_image(newarr)
    let ans = await contractInstance_singner.add_Ld_room(Contract_phone, "1", Contract_Room_address, Contract_introduce, Contract_Room_name, Contract_equiment, "1", Contract_file_image, Contract_Room_money, { from: wallet_address, value: amount })
    console.log(ans);
  }
  async function lengtha() {
    let api = await contractInstance_provider.romms_length();
    let ans = parseInt(api._hex, 16)
    console.log(ans);
  }
  async function room() {
    let api = await contractInstance_provider.romms_length();
    let ans = parseInt(api._hex, 16)
    for (let i = 0; i < ans; i++) {
      let api2 = await contractInstance_provider.getrooms(i);
      console.log(api2);
    }

  }
  async function aaa(){
    const newarr = [...Contract_file_image]
    console.log(Contract_file_image[0].url);
  }
  return (
    <div>
      <Registerimage set_Contract_file_image={set_Contract_file_image} Contract_file_image={Contract_file_image} />
      <Register_detil Contract_Room_name={Contract_Room_name} 
                      set_Contract_Room_name={set_Contract_Room_name}
                      Contract_phone={Contract_phone} 
                      set_Contract_phone={set_Contract_phone} 
                      set_Contract_equiment={set_Contract_equiment} 
                      Contract_equiment={Contract_equiment}
                      Contract_Room_address={Contract_Room_address}
                      set_Contract_Room_address={set_Contract_Room_address}
                      Contract_introduce={Contract_introduce}
                      set_Contract_introduce={set_Contract_introduce}
                      Contract_Room_money={Contract_Room_money}
                      set_Contract_Room_money={set_Contract_Room_money}
                       />
      <div className='check'>
        <Button type="primary" icon={<CheckCircleOutlined />} size={'large'} onClick={() => window.open("/", "_self")}>
          確定刊登
        </Button>
        <Button type="primary" icon={<CheckCircleOutlined />} size={'large'} onClick={testt}>
          test
        </Button>
        <Button type="primary" icon={<CheckCircleOutlined />} size={'large'} onClick={lengtha}>
          length
        </Button>
        <Button type="primary" icon={<CheckCircleOutlined />} size={'large'} onClick={room}>
          room
        </Button>
        <button onClick={ aaa }>123</button>
      </div>
    </div>
  )
}

export default Register