import { createStyles, Tabs, ActionIcon, Paper, Text } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons";
import { useState, useEffect } from "react";
import { jsNumberForAddress } from "react-jazzicon";
import Jazzicon from "react-jazzicon/dist/Jazzicon";
import User_info_card from "./User_info_card";
import { abi, address } from "../Contract/Contract";
import { ethers } from "ethers";
import { Button } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  Tab: {
    border:
      theme.colorScheme === "dark"
        ? "1px solid" + theme.colors.dark[4]
        : "1px solid #D3D8DE",
    borderRadius: "10px",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    maxHeight: "100px",
    position: "relative",
    width: "80%",
    top: "100px",
  },
  link2: {
    borderRadius: "50%",
    width: "100%",
    height: "100%",
  },
  paper: {
    background: theme.colorScheme === "dark" ? theme.colors.dark[6] : "#D3D8DE",
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
//TODO:監聽metamask有點問題 有時間再用mantine core的notification
// const provider = new ethers.BrowserProvider(window.ethereum)
// const signer = provider.getSigner();
// const contractInstance_singner = new ethers.Contract(address, abi, signer);
// //使用singer 連接合約 對合約有可讀寫權限
// const contractInstance_provider = new ethers.Contract(address, abi, provider);
// const contract = new ethers.Contract(address, abi, signer);
// contract.on('clearroom', (arg1, arg2, event) => {
//     console.log("Received event: ${ event.event }");
//     console.log("Arguments: ${ arg1 }, ${ arg2 }");
// });
const User_Information = () => {
  const [Account_image, setAccount_image] = useState("");
  const [Account, setAccount] = useState("");
  const [roomlist, setRoomlist] = useState(false);
  const [User_room_list, setUser_room_list] = useState([]);
  const { classes } = useStyles();
  useEffect(() => {
    MateMask_account();
    get_user_room();
  }, []);
  async function get_user_room() {
    var wallet_address;
    const ether_accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    var account = ether_accounts[0];
    wallet_address = account;
    //
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contractInstance_singner = new ethers.Contract(address, abi, signer);
    //使用singer 連接合約 對合約有可讀寫權限
    const contractInstance_provider = new ethers.Contract(
      address,
      abi,
      provider
    );

    let user_room_id = await contractInstance_provider.getuser_room({
      from: wallet_address,
    });
    let user_room_arr = [];
    if (user_room_id.length === 0) {
      setRoomlist(false);
    } else {
      for (let index = 0; index < user_room_id.length; index++) {
        user_room_arr[index] = <User_info_card room_id={user_room_id[index]} />;
      }
      setUser_room_list(user_room_arr);
      setRoomlist(true);
    }
  }
  async function MateMask_account() {
    var wallet_address;
    const ether_accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    var account = ether_accounts[0];
    wallet_address = account;
    setAccount_image(wallet_address);
    setAccount(hidden(wallet_address));
  }
  function hidden(str) {
    return str.substring(0, 12) + "...." + str.substring(str.length - 10);
  }

  return (
    <div
      shadow="sm"
      p="sm"
      style={{
        display: "flex",
        width: "100%",
        height: "92vh",
        justifyContent: "center",
      }}
    >
      <div className={classes.Tab}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30%", height: "100px" }}>
            <ActionIcon className={classes.link2} variant="subtle">
              <Jazzicon
                diameter={70}
                seed={jsNumberForAddress(Account_image)}
              />
            </ActionIcon>
          </div>
          <div style={{ width: "70%" }}>
            <Paper className={classes.paper}>
              <Text style={{ textAlign: "center" }}>Address</Text>
              <p></p>
              <Text style={{ textAlign: "center" }}>{Account}</Text>
            </Paper>
          </div>
        </div>
        <p></p>
        <Tabs color="teal" defaultValue="first">
          <Tabs.List>
            <Tabs.Tab value="first">訂房預定中</Tabs.Tab>
            <Tabs.Tab value="second" color="blue">
              訂房未評價
            </Tabs.Tab>
            <Tabs.Tab value="three" color="blue">
              房間已刊登
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="first" pt="xs">
            預定(無)
          </Tabs.Panel>

          <Tabs.Panel value="second" pt="xs">
            評價(無)
          </Tabs.Panel>
          <Tabs.Panel value="three" pt="xs">
            {roomlist ? User_room_list : "刊登(無)"}
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default User_Information;
