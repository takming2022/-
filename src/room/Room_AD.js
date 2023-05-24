import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import { Input } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { openModal } from "@mantine/modals";
import Web3 from "web3";
import { abi, address } from "../Contract/Contract";
import { ethers } from "ethers";
import { ADabi,ADaddress } from "../Contract/AD_Contract";
const Room_AD = () => {
  const [Inputtt, setInputtt] = useState("");
  const [ad_txt, set_ad_txt] = useState("");
  const [ad_string, set_ad_string] = useState("")
  const [ad, setad] = useState(false)
  async function ADDD() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contractInstance_singner = new ethers.Contract(ADaddress, ADabi, signer);
    //使用singer 連接合約 對合約有可讀寫權限
    const contractInstance_provider = new ethers.Contract(
      ADaddress,
      ADabi,
      provider
    );
    var wallet_address;
    const ether_accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    var account = ether_accounts[0];
    wallet_address = account;
    if (Inputtt === "0.01") {
      let ether = 0.01; // 抓 ether 值
      console.log(ether);
      let amount = Web3.utils.toWei(ether.toString());
      let ans = await contractInstance_singner.add_ad(ad_txt, {
        from: wallet_address,
        value: amount.toString(),
      });
      console.log("ans", ans);
    } else if (Inputtt === "0.02") {
      let ether = 0.02; // 抓 ether 值
      console.log(ether);
      let amount = Web3.utils.toWei(ether.toString());
      let ans = await contractInstance_singner.add_ad(ad_txt, {
        from: wallet_address,
        value: amount.toString(),
      });
      console.log("ans", ans);
    } else if (Inputtt === "0.03") {
      let ether = 0.03; // 抓 ether 值
      console.log(ether);
      let amount = Web3.utils.toWei(ether.toString());
      let ans = await contractInstance_singner.add_ad(ad_txt, {
        from: wallet_address,
        value: amount.toString(),
      });
      console.log("ans", ans);
    } else {
      window.alert("請選擇時間");
    }
  }
  const [opened, { open, close }] = useDisclosure(false);
  function openModal() {
    open();
    setInputtt("");
  }
  setInterval(() => {
    get_ad()
  }, 1000);
  async function get_ad() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contractInstance_singner = new ethers.Contract(ADaddress, ADabi, signer);
    //使用singer 連接合約 對合約有可讀寫權限
    const contractInstance_provider = new ethers.Contract(
      ADaddress,
      ADabi,
      provider
    );
    var wallet_address;
    const ether_accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    var account = ether_accounts[0];
    let api = await contractInstance_provider.get_ad();
    let ans = parseInt(api[3], 10)
    let now = new Date().getTime()
    if (now < ans && parseInt(api[3], 10) !== 0) {
      setad(true)
      set_ad_string(api[1])
    } else {
      setad(false)
    }
  }
  return (
    <div
      style={{
        width: "100%",
        height: 100,
        borderRadius: "20px",
        marginBottom: "10px",
        border: "1mm solid #495057",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Modal opened={opened} onClose={close} title="投放廣告" centered>
<Input
          component="select"
          rightSection={<IconChevronDown size={14} stroke={1.5} />}
          onChange={(e) => setInputtt(e.target.value)}>
          <option value="">請選擇刊登時間</option>
          <option value="0.01">0.01/180秒</option>
          <option value="0.02">0.02/20秒</option>
          <option value="0.03">0.03/30秒</option>
        </Input>
        <Input.Wrapper id="input-demo" label="輸入刊登廣告的文字">
          <Input id="input-demo" placeholder="Your AD" defaultValue={ad_txt} onChange={(e) => set_ad_txt(e.target.value)}/>
        </Input.Wrapper>
        <Group position="right" style={{ marginTop: "10px" }}>
          <Button onClick={ADDD}>刊登廣告</Button>
        </Group>
      </Modal>

      <Group position="center">
      {ad ? ad_string :  <Button variant="outline" radius="lg" onClick={openModal}>
          投放廣告
        </Button>}
      </Group>
    </div>
  );
};

export default Room_AD;
