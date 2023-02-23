import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card_object } from '../../card_object/Card_object';
import './test.css';
import { ethers } from 'ethers';
import Web3 from 'web3';
import { address, abi } from '../../Contract/Contract';

const Test = () => {
    const [aa, setaa] = useState("")
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contractInstance_singner = new ethers.Contract(address, abi, signer);
    //使用singer 連接合約 對合約有可讀寫權限
    const contractInstance_provider = new ethers.Contract(address, abi, provider);
    var api2 = []
    const params = useParams();
    async function details() {
        setaa(await contractInstance_provider.getroomscard(8))
        console.log(aa);
        // aa = Card_object.filter(item => item.id == params.id)

    }
    useEffect(() => {
        details()
    }, [])

    console.log(params.id)

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
                <img src={aa[2][0]} className='rrimg' alt='ERROR' />
                {aa}
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