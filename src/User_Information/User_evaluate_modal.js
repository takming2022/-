import { Modal, Textarea, Group, Button } from "@mantine/core";
import React, { useState } from "react";
import { ethers } from 'ethers';
import Web3 from 'web3';
import { abi, address } from '../Contract/Contract';
const User_evaluate_modal = ({
  opened,
  setopened,
  room_uuid,
  Contract_Room_name,
}) => {
  const [commentText, setCommentText] = useState("");
  async function do_Comment() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contractInstance_singner = new ethers.Contract(address, abi, signer);
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
      .doComment(commentText, room_uuid, {
        from: wallet_address,
        value: amount,
      })
      .then((e) => {
        console.log("sussecs");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <>
      <Modal
        opened={opened}
        size={window.innerWidth > 800 ? "60%" : "100%"}
        onClose={() => {
          setopened((o) => !o);
        }}
        title="評論"
        centered
      >
        <div>
          房間名稱:{Contract_Room_name}
          <Textarea
            placeholder="請寫入評論"
            label="評論區"
            autosize
            onChange={(e) => {
              setCommentText(e.target.value);
              
            }}
            value={commentText}
            minRows={20}
          />
        </div>
        <p></p>
        <Group position="center">
          <Button onClick={do_Comment}>發布評論</Button>
        </Group>
      </Modal>
    </>
  );
};

export default User_evaluate_modal;
