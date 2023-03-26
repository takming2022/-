import { useState, useEffect } from 'react'
import { Modal, Button, Group, Alert, Notification } from '@mantine/core'
import { openConfirmModal } from '@mantine/modals';
import Registers_image from './Registers_image';
import { Stepper } from '@mantine/core';
import Register_detil from './Register_detil';
import Register_Table from './Register_Table';
import { abi, address } from '../Contract/Contract';
import { IconAlertCircle } from '@tabler/icons';
import { ethers } from 'ethers';
import Web3 from 'web3';
import { v4 as uuidv4 } from 'uuid';
const Registers = ({ Open_Register, SetOpen_Register }) => {
  const [files, setFiles] = useState([]);
  const [active, setActive] = useState(0);
  const [Contract_phone, set_Contract_phone] = useState('')
  const [Contract_Room_address, set_Contract_Room_address] = useState('')
  const [Contract_introduce, set_Contract_introduce] = useState('')
  const [Contract_Room_name, set_Contract_Room_name] = useState('')
  const [Contract_equiment, set_Contract_equiment] = useState([])
  const [Contract_Room_money, set_Contract_Room_money] = useState(0)
  const [Contract_Room_type, set_Contract_Room_type] = useState(0)
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  //判斷是否有傳照片  但怪怪的 先遮住
  // useEffect(() => {
  //   console.log("files.length", files.length);
  //   if (files.length == 0) {
  //     setActive(0)
  //     set_Contract_Room_address('')
  //     set_Contract_phone('')
  //     set_Contract_introduce('')
  //     set_Contract_Room_name('')
  //     set_Contract_equiment([])
  //     set_Contract_Room_money(0)
  //     set_Contract_Room_type(0)
  //   }
  // }, [files])

  async function published() {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner();
    const contractInstance_singner = new ethers.Contract(address, abi, signer);
    //使用singer 連接合約 對合約有可讀寫權限
    const contractInstance_provider = new ethers.Contract(address, abi, provider);
    //使用Provider 連接合約 只會對合約有可讀權限 
    console.log(files);
    var wallet_address;
    const ether_accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    var account = ether_accounts[0];
    wallet_address = account;

    let amount = Web3.utils.toWei("0.0001");
    const newarr = [...files]
    for (let i = 0; i < files.length; i++) {
      newarr[i] = files[0].url
    }
    await contractInstance_singner.add_Ld_room(Contract_phone, Contract_Room_type.toString(), Contract_Room_address, Contract_introduce, Contract_Room_name, Contract_equiment, uuidv4(), newarr, Contract_Room_money.toString(), { from: wallet_address, value: amount })
      .then((e) => SetOpen_Register(false))
      .catch((e) => {
        window.alert('請按確認')  
      })
    let api = await contractInstance_provider.romms_length();
  }
  
  return (
    <Modal
      size={window.innerWidth > 800 ? '60%' : '100%'}
      opened={Open_Register}
      onClose={() => { SetOpen_Register(false); setFiles([]) }}
      title="刊登房間"
      centered
    >
      <>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm" allowNextStepsSelect={false}>
          <Stepper.Step label="First step" description="上傳圖片">
            <Registers_image files={files} setFiles={setFiles} />
            <Group position="center" mt="xl">
              <Button variant="default" onClick={prevStep}>Back</Button>
              {files.length == 0 ? <Button data-disabled onClick={nextStep}>Next step</Button> : <Button onClick={nextStep}>Next step</Button>}
            </Group>
          </Stepper.Step>
          <Stepper.Step label="Second step" description="填寫房間資訊">
            <Register_detil Contract_Room_name={Contract_Room_name} set_Contract_Room_name={set_Contract_Room_name}
              Contract_phone={Contract_phone} set_Contract_phone={set_Contract_phone}
              Contract_Room_address={Contract_Room_address} set_Contract_Room_address={set_Contract_Room_address}
              Contract_Room_money={Contract_Room_money} set_Contract_Room_money={set_Contract_Room_money}
              Contract_Room_type={Contract_Room_type} set_Contract_Room_type={set_Contract_Room_type}
              Contract_introduce={Contract_introduce} set_Contract_introduce={set_Contract_introduce}
              Contract_equiment={Contract_equiment} set_Contract_equiment={set_Contract_equiment} />
            <Group position="center" mt="xl">
              <Button variant="default" onClick={prevStep}>Back</Button>
              {Contract_Room_address == '' || Contract_phone == '' || Contract_Room_name == '' || Contract_equiment == [] || Contract_Room_money == 0 || Contract_Room_type == 0 || Contract_introduce == '' ? <Button data-disabled onClick={nextStep}>Next step</Button> : <Button onClick={nextStep}>Next step</Button>}
            </Group>
          </Stepper.Step>
          <Stepper.Step label="Final step" description="確認刊登">
            <Register_Table Contract_Room_name={Contract_Room_name} Contract_phone={Contract_phone} Contract_Room_address={Contract_Room_address}
              Contract_Room_money={Contract_Room_money} Contract_Room_type={Contract_Room_type} Contract_introduce={Contract_introduce} Contract_equiment={Contract_equiment} />
            <Group position="center" mt="xl">
              <Button variant="default" onClick={prevStep}>Back</Button>
              <Button onClick={nextStep}>Next step</Button>
            </Group>
          </Stepper.Step>
          <Stepper.Completed>
            <Group position="center" mt="xl">
              <Button variant="default" onClick={prevStep}>Back</Button>
              <Button onClick={published}>確定刊登</Button>
            </Group>
          </Stepper.Completed>
        </Stepper>
      </>
    </Modal>

  )
}

export default Registers