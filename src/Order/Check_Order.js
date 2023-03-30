
import React from 'react'
import { Modal, Table, Group, Button } from '@mantine/core'
import { v4 as uuidv4 } from 'uuid';
import { ethers } from 'ethers';
import Web3 from 'web3';
import emailjs from '@emailjs/browser';
import { abi, address } from '../Contract/Contract';
const Check_Order = ({ Open_Order, setOpen_Order, room_uuid_for_order, Contract_Room_money, Contract_Room_name, Contract_Room_address, Contract_Room_wallet_addr, datestart_ans, datesEnd_ans }) => {
    const Chenck_order_time_start = new Date(datestart_ans).toString()
    const Chenck_order_time_End = new Date(datesEnd_ans).toString()
    const sendEmail = async(userName,password,email) => {
        const templateParams = {
            user_email_name: userName,
            password: password,
            to_email: email
        };

        emailjs.send('service_39ygwyg', 'template_m88jqih', templateParams, 'G16P96rYbYW6SAV1U')
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.log('Email failed:', error);
                alert('Email failed. Please try again.');
            });
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        }

        // let response = await fetch("https://1ae8-2401-e180-8d22-1499-7cdb-698-fac3-b8b.jp.ngrok.io//gpio/"+password, {
        //     method: "GET",
        //     headers: headersList
        // });

        // let data = await response.text();
        // console.log(data);
    };
    async function push_Order() {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contractInstance_singner = new ethers.Contract(address, abi, signer);
        
        
        console.log(Chenck_order_time_start, Chenck_order_time_End);
        const Contract_datestart_time = parseInt(datestart_ans.toString().substring(0, 10))
        const Contract_dateEnd_time = parseInt(datesEnd_ans.toString().substring(0, 10))
        console.log(Contract_datestart_time, Contract_dateEnd_time)
        var wallet_address;
        const ether_accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        var account = ether_accounts[0];
        wallet_address = account;
        let amount = Web3.utils.toWei("0.0001");
        await contractInstance_singner.add_order(uuidv4(),room_uuid_for_order,Contract_Room_money,Contract_Room_name,Contract_Room_address,Contract_Room_wallet_addr,Contract_datestart_time,Contract_dateEnd_time,{ from: wallet_address, value: amount })

        
    }
    return (
        <Modal
            size={window.innerWidth > 800 ? '60%' : '100%'}
            opened={Open_Order}
            onClose={() => { setOpen_Order((o) => !o) }}
            title="刊登房間"
            centered
        >
            <Table withBorder striped >
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>確認資訊</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>房間名稱: {Contract_Room_name}</th>
                    </tr>
                    <tr>
                        <th>房間地址: {Contract_Room_address}</th>
                    </tr>
                    <tr>
                        <th>房間價格: {Contract_Room_money}</th>
                    </tr>
                    <tr>
                        <th>入住時間: {Chenck_order_time_start}</th>
                    </tr>
                    <tr>
                        <th>退房時間: {Chenck_order_time_End}</th>
                    </tr>
                </tbody>
                <Group position="center" mt="xl">
                    <Button variant="default" onClick={() => { setOpen_Order((o) => !o) }} >Back</Button>
                    <Button onClick={push_Order}>確定刊登</Button>
                </Group>
            </Table>
        </Modal>
    )
}

export default Check_Order