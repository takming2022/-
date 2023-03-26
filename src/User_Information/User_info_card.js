import React, { useEffect, useState } from "react";
import "../Mid/Mid.css";
import { useNavigate } from "react-router-dom";
import { abi, address } from "../Contract/Contract";
import { ethers } from "ethers";
import Web3 from "web3";
import { Button } from "@mantine/core";
import { createStyles, Tabs, ActionIcon, Paper, Text } from "@mantine/core";
const User_info_card = ({ room_id }) => {
  const useStyles = createStyles((theme) => ({
    paper: {
      background:
        theme.colorScheme === "dark" ? theme.colors.dark[6] : "#D3D8DE",
      height: "100px",
      // borderRadius: '8px',
      width: "100%",
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
    deleteButton: {
      background: "#F26F52",
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
  const [Contract_phone, set_Contract_phone] = useState("");
  const [Contract_Room_type, set_Contract_Room_type] = useState(0);
  const [Contract_Room_address, set_Contract_Room_address] = useState("");
  const [Contract_introduce, set_Contract_introduce] = useState(""); //房間描述
  const [Contract_Room_name, set_Contract_Room_name] = useState("");
  const [Contract_equiment, set_Contract_equiment] = useState([]); //各種配件
  const [Contract_image_files, set_Contract_image_files] = useState([]);
  const [Contract_Room_money, set_Contract_Room_money] = useState(0);

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

    let api = await contractInstance_provider.getrooms(room_id);
    set_Contract_Room_wallet_addr(api[0]);
    set_Contract_phone(api[1]);
    set_Contract_Room_type(api[2]);
    set_Contract_Room_address(api[3]);
    set_Contract_introduce(api[4]);
    set_Contract_Room_name(api[5]);
    set_Contract_equiment(api[6]);
    set_Contract_image_files(api[8][0]);
    set_Contract_Room_money(api[9]);
    console.log(api);
  }
  async function clearRoom() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contractInstance_singner = new ethers.Contract(address, abi, signer);
    //使用singer 連接合約 對合約有可讀寫權限
    const contractInstance_provider = new ethers.Contract(
      address,
      abi,
      provider
    );
    var wallet_address;
    const ether_accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    var account = ether_accounts[0];
    wallet_address = account;

    let amount = Web3.utils.toWei("0.0001");
    await contractInstance_singner
      .clearroom(room_id, { from: wallet_address, value: amount })
      .then((res) => {
        window.alert("刪除成功 請等待合約互動");
      })
      .catch((e) => window.alert("刪除失敗"));
  }
  useEffect(() => {
    get_user_room_info();
  }, []);

  return (
    //TODO:注意這個地方要換一張卡片樣式  改成橫條

    <>
      <p></p>
      <div className={classes.userCardcontener}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30%", height: "100px" }}>
            <img
              className={classes.roomImg_user}
              src={Contract_image_files}
              alt=""
            ></img>
          </div>
          <div style={{ width: "60%" }}>
            <Paper className={classes.paper}>
              <Text style={{ textAlign: "center" }}>
                房間名稱:{Contract_Room_name}
              </Text>
              <p></p>
              <Text style={{ textAlign: "center" }}>
                刊登者:{hidden(Contract_Room_wallet_addr)}
              </Text>
            </Paper>
          </div>
          <div style={{ width: "10%" }}>
            <Button
              color="red"
              radius="xs"
              className={classes.deleteButton}
              onClick={clearRoom}
            >
              刪除
            </Button>
          </div>
        </div>
      </div>
      <p></p>
    </>
  );
};

export default User_info_card;
