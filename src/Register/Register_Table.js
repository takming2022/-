import { useState, useEffect } from 'react'
import { Table } from '@mantine/core'
const Register_Table = ({ Contract_Room_name, Contract_phone, Contract_Room_address, Contract_Room_money, Contract_Room_type, Contract_introduce, Contract_equiment }) => {
    let equimentt1 = ''
    console.log(Contract_equiment.length);
    for (let i = 0; i < Contract_equiment.length; i++) {
        if (i == Contract_equiment.length - 1) {
            equimentt1 += Contract_equiment[i]
        } else {
            equimentt1 += Contract_equiment[i] + ","
        }
    }

    return (
        <>
            <Table withBorder striped >
                <thead>
                    <tr>
                        <th style={{textAlign:'center'}}>確認資訊</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>房間名稱: {Contract_Room_name}</th>
                    </tr>
                    <tr>
                        <th>手機: {Contract_phone}</th>
                    </tr>
                    <tr>
                        <th>房間地址: {Contract_Room_address}</th>
                    </tr>
                    <tr>
                        <th>房間價格: {Contract_Room_money}</th>
                    </tr>
                    <tr>
                        <th>房間數: {Contract_Room_type}</th>
                    </tr>
                    <tr>
                        <th>房間詳情: {Contract_introduce}</th>
                    </tr>
                    <tr>
                        <th>設備: {equimentt1}</th>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Register_Table