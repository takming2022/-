import { NumberInput, Input, createStyles, Grid, Textarea, Checkbox } from '@mantine/core'
import { IconAt,IconUser,IconHome,IconLocation ,IconPhone  } from '@tabler/icons';
import { useState, useEffect } from 'react';
import { useElementSize } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  input: {
    margin: '10px 0px 0px 0px'
  },
  money: {
    width: '49%',
    margin: '10px auto'
  },
  Group: {
    justifyContent:'center',
    alignContent:'center'
    
  },

}));
const Register_detil = ({ Contract_Room_name, set_Contract_Room_name, set_Contract_phone, Contract_phone
  , set_Contract_Room_address, Contract_Room_address, set_Contract_Room_money, Contract_Room_money
  , set_Contract_Room_type, Contract_Room_type, set_Contract_introduce, Contract_introduce, set_Contract_equiment, Contract_equiment }) => {
  const [Account, setAccount] = useState("");
  const [value, setValue] = useState([])
  var wallet_address = "";
  useEffect(() => {
    console.log(Contract_equiment);
  }, [Contract_equiment])
  useEffect(() => {
    Login_MateMask();
  }, [])
  async function Login_MateMask() {
    console.log(123);
    const ethereum = window.ethereum;
    var accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      .then((e) => {
        var account = e[0];
        wallet_address = account;
        setAccount(wallet_address)
      }).catch((e) => {
        if (e.code === 4001) {
          window.alert('Please connect to MetaMask.');
        }
      });
  }
  function InputRoomName(e) {
    set_Contract_Room_name(e.target.value)
    console.log('cr', Contract_Room_name);
  }
  function InputPhone(e) {
    set_Contract_phone(e.target.value)
    console.log('cp', Contract_phone)
  }
  function InputLocation(e) {
    set_Contract_Room_address(e.target.value)
    console.log('ca', Contract_Room_address);
  }
  function Inputmoney(e) {
    set_Contract_Room_money(e)
    console.log('cam', Contract_Room_money);
  }
  function Inputtype(e) {
    set_Contract_Room_type(e)
    console.log('cam', Contract_Room_type);
  }
  function Inputintroduce(e) {
    set_Contract_introduce(e.target.value)
    console.log('ci', Contract_introduce);
  }
  const { classes } = useStyles();
  return (
    <div style={{  }}>
      <Input
        className={classes.input}
        disabled
        icon={<IconUser />}
        placeholder="your address"
        radius="md"
        value={Account}
      />
      <Input
        className={classes.input}
        icon={<IconHome  />}
        placeholder="room name"
        radius="md"
        onChange={InputRoomName}
        value={Contract_Room_name}
      />
      <Input
        className={classes.input}
        icon={<IconPhone  />}
        placeholder="Your phone"
        onChange={InputPhone}
        value={Contract_phone}
      />
      <Input
        className={classes.input}
        icon={<IconLocation  />}
        placeholder="location"
        radius="md"
        onChange={InputLocation}
        value={Contract_Room_address}
      />
      <Grid>
        <NumberInput
          className={classes.money}
          label="價格"
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          formatter={(value) =>
            !Number.isNaN(parseFloat(value))
              ? `$ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
              : '$ '
          }
          onChange={Inputmoney}
          defaultValue={Contract_Room_money}
          min={0}
        />
        <NumberInput
          className={classes.money}
          label="房間數"
          onChange={Inputtype}
          defaultValue={Contract_Room_type}
          min={0}
        /></Grid>
      <Textarea
        className={classes.Textarea}
        placeholder="comment"
        label="comment"
        radius="md"
        onChange={Inputintroduce}
        withAsterisk
        value={Contract_introduce}
      />
      <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
      <Checkbox.Group  value={Contract_equiment} onChange={set_Contract_equiment}>
        <Checkbox value='free_parking' label="免費停車" className='chenkboxs' ></Checkbox>
        <Checkbox value='free_wifi' label="免費網路" className='chenkboxs' ></Checkbox>
        <Checkbox value='spa' label="溫泉" className='chenkboxs' ></Checkbox>
        <Checkbox value='tub' label="浴缸" className='chenkboxs' ></Checkbox>
        <Checkbox value='coffee_shop' label="咖啡店" className='chenkboxs' ></Checkbox>
        <Checkbox value='Gym' label="健身房" className='chenkboxs' ></Checkbox>
        </Checkbox.Group></div>
    </div>
  )
}

export default Register_detil