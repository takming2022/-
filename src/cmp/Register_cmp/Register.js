import React from 'react'
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
      let ans = await contractInstance_singner.add_Ld_room("1", "1", "1", "1", "1", ["1"], "1", ["1"], "1", { from: wallet_address, value: amount })
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
  return (
    <div>
      <Registerimage />
      <Register_detil />
      <div className='check'>
        <Button type="primary" icon={<CheckCircleOutlined />} size={'large'} onClick={() =>window.open("/","_self")}>
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
      </div>
    </div>
  )
}

export default Register