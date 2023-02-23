import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card_object } from '../../card_object/Card_object';
import './test.css';
import { ethers } from 'ethers';
import Web3 from 'web3';
import { address, abi } from '../../Contract/Contract';

const Test = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contractInstance_singner = new ethers.Contract(address, abi, signer);
    //使用singer 連接合約 對合約有可讀寫權限
    const contractInstance_provider = new ethers.Contract(address, abi, provider);
    var api2 =[]
    const params = useParams();
    var aa;
    var bb;
    var cc ;
    var dd;
    async function details() {
        cc = await contractInstance_provider.getroomscard(8);
        dd = cc[2][0];
        aa = Card_object.filter(item => item.id == params.id)
        // bb = aa[2]
        console.log(dd);
    }
    details()
    console.log(params.id)
    useEffect(() => {
        room();
    }, [])
    // useEffect(async() => {
    //     room();
    //     api2 =  contractInstance_provider.getroomscard(8);
    //     console.log(api2[2][0]);
    // }, [])

    async function room() {


        // api2 = await contractInstance_provider.getroomscard(8);
        // console.log('asdf'+api2[2][0]);


    }
    return (
        <div className='room'>

            <div>
                {/* <img src={dd} className='rrimg' alt='ERROR' /> */}
                {dd}
            </div>

            <div className='rname'>
                {/* {aa[0].name} */}
            </div>
            {/* <div className='rid'>
                {aa[0].id}
            </div> */}

            <div className='rad'>
                {/* {aa[0].adress} */}
            </div>
        </div>
    )
}

export default Test;