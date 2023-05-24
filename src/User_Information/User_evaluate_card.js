import React, { useEffect, useState } from "react";
import "../Mid/Mid.css";
import { useNavigate } from "react-router-dom";
import { abi, address } from "../Contract/Contract";
import { ethers } from "ethers";
import { IconMessage2 } from '@tabler/icons-react';
import { createStyles, Tabs, ActionIcon, Paper, Group, Avatar, Text, Accordion, Table, Button } from "@mantine/core";
import moment from "moment/moment";
import User_evaluate_modal from "./User_evaluate_modal";
const User_evaluate_card = ({ order_id }) => {
    const useStyles = createStyles((theme) => ({
        paper: {
            background:
                theme.colorScheme === "dark" ? theme.colors.dark[6] : "#D3D8DE",
            height: "100px",
            // borderRadius: '8px',
            width: "100%",
        },
        paper2: {
            display:'flex',
            background:
                theme.colorScheme === "dark" ? theme.colors.dark[6] : "#D3D8DE",
            height: "100px",
            // borderRadius: '8px',
            width: "15%",
            justifyContent: 'center',
            borderBottomLeftRadius: "10px",
            borderTopLeftRadius: "10px",
        },
        userCardcontener: {
            // border: theme.colorScheme === 'dark' ? '1px solid' + theme.colors.dark[4] : '1px solid #D3D8DE',
            // borderRadius: '10px',

            color:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[0]
                    : theme.colors.gray[7],
            maxHeight: "100px",
            position: "relative",
            width: "100%",
        },
        roomImg_user: {
            // borderRadius: '10px',
            width: "100%",
            height: "100%",
            borderBottomLeftRadius: "10px",
            borderTopLeftRadius: "10px",
        },
        evaluateButton: {
            background: "#4169e1",
            width: "100%",
            height: "100%",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            border: "none",
        },
    }));
    const { classes } = useStyles();
    const history = useNavigate();

    const [Contract_Room_wallet_addr, set_Contract_Room_wallet_addr] =
        useState("");
    const [order_uuid, set_order_uuid] = useState("");
    const [room_uuid, set_room_uuid] = useState(0);
    const [Contract_Room_address, set_Contract_Room_address] = useState("");
    const [Contract_Room_name, set_Contract_Room_name] = useState("");
    const [Contract_Room_money, set_Contract_Room_money] = useState(0);
    const [timestempStart, set_timestempStart] = useState(0);
    const [timestempEnd, set_timestempEnd] = useState(0);
    const [User_wallet_address, set_User_wallet_address] = useState("v");
    const [Order_time_start, set_Order_time_start] = useState("");
    const [Order_time_end, set_Order_time_end] = useState("");
    const [evaluate_controller, set_evaluate_controller] = useState(false)
    const [opened, setopened] = useState(false)
    function hidden(str) {
        return str.substring(0, 6) + "...." + str.substring(str.length - 4);
    }
    async function get_user_room_info() {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contractInstance_singner = new ethers.Contract(address, abi, signer);
        //使用singer 連接合約 對合約有可讀寫權限
        const contractInstance_provider = new ethers.Contract(
            address,
            abi,
            provider
        );

        let api = await contractInstance_provider.getordersInfo(order_id);
        set_order_uuid(api[0]);
        set_room_uuid(api[1]);
        set_User_wallet_address(api[2]);
        set_Contract_Room_money(api[3]);
        set_Contract_Room_name(api[4]);
        set_Contract_Room_address(api[5]);
        set_Contract_Room_wallet_addr(api[6]);
        set_timestempStart(api[7]);
        set_timestempEnd(api[8]);
        console.log(api);
        const time_start = moment(
            new Date(Number(api[7]) * 1000).toString()
        ).format("YYYY年M月D日H點m分");
        const time_end = moment(new Date(Number(api[8]) * 1000).toString()).format(
            "YYYY年M月D日H點m分"
        );
        set_Order_time_start(time_start);
        set_Order_time_end(time_end);
        if (Number(api[8]) * 1000 < Date.now()) {
            set_evaluate_controller(true)
        } else {
            set_evaluate_controller(false)
        }
        // var wallet_address;
        // const ether_accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        // var account = ether_accounts[0];
        // wallet_address = account;
        // let apii = await contractInstance_provider.getorder_id({ from: wallet_address });
        // console.log(apii);
    }
    async function clearRoom() {
       setopened(true)
    }
    useEffect(() => {
        get_user_room_info();
        console.log(1);
    }, []);
    //




    //
    return (
        //TODO:注意這個地方要換一張卡片樣式  改成橫條 
        <>
            {evaluate_controller ? <>
                <p></p>
                <div className={classes.userCardcontener}>
                    <div style={{ display: "flex" }}>
                        <div className={classes.paper2} >
                            <IconMessage2 size="6rem"></IconMessage2>
                        </div>
                        <div style={{ width: "85%" }}>
                            <Paper className={classes.paper}>
                                <Text style={{ textAlign: "center" }}>
                                    房間名稱:{Contract_Room_name}
                                </Text>
                                <Text style={{ textAlign: "center" }}>
                                    刊登者:{hidden(Contract_Room_wallet_addr)}
                                </Text>
                                <Text style={{ textAlign: "center" }}>
                                    入住時間: {Order_time_start}~ {Order_time_end}
                                </Text>

                            </Paper>
                        </div>
                        <div style={{ width: "11%" }}>
                            <Button
                                color="blue"
                                radius="xs"
                                className={classes.evaluateButton}
                                onClick={clearRoom}
                            >
                                評論
                            </Button>   
                        </div>
                    </div>
                </div>
                <User_evaluate_modal opened={opened} setopened={setopened} room_uuid={room_uuid} Contract_Room_name={Contract_Room_name}/>
                <p></p>
            </> : <></>}
        </>

        // <>
        //   <p></p>
        //   <div className={classes.userCardcontener}>
        //     <div style={{ display: "flex" }}>
        //       <div style={{ width: "100%" }}>
        //         <Paper className={classes.paper}>
        //           <Text style={{ textAlign: "center" }}>
        //             房間名稱:{Contract_Room_name}
        //           </Text>
        //           <p></p>
        //           <Text style={{ textAlign: "center" }}>
        //             刊登者:{hidden(Contract_Room_wallet_addr)}
        //           </Text>
        //           <Text style={{ textAlign: "center" }}>
        //             入住時間:{Order_time_start} ~ 退房時間:{Order_time_end}
        //           </Text>
        //         </Paper>
        //       </div>
        //     </div>
        //   </div>
        //   <p></p>
        // </>
    );
};

export default User_evaluate_card;
