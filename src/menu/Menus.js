import {useState,useEffect} from 'react'
import { Menu, Button, Text,ActionIcon,createStyles,Modal } from '@mantine/core';
import Jazzicon from 'react-jazzicon/dist/Jazzicon';
import { jsNumberForAddress } from 'react-jazzicon';
import { IconSettings, IconSearch, IconPhoto, IconPlus, IconId } from '@tabler/icons';
import Registers from '../Register/Registers';
import { useNavigate } from 'react-router-dom';
const useStyles = createStyles((theme) => ({
  link1: {
    [theme.fn.smallerThan('606')]: {
      display:'none'
    },
    borderRadius:'20px'
  },
  link2: {
    [theme.fn.largerThan('606')]: {
      display:'none'
    },
    borderRadius:'50%',
    width:'20px'
  },
}));
const Menus = ({Accounttureorfalse}) => {
  const history = useNavigate()
  const [Account, setAccount] = useState("");
  const [Account_image, setAccount_image] = useState("");
  const { classes } = useStyles();
  const [Open_Register, SetOpen_Register] = useState(false)
  var wallet_address = "";
  useEffect(() => {
    Login_MateMask();
  }, [])
  async function Login_MateMask(){
    console.log(123);
    const ethereum = window.ethereum;
  var accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    .then((e) => {
      var account = e[0];
      wallet_address = account;
      setAccount_image(wallet_address)
      setAccount(hidden(wallet_address))
    }).catch((e) => {
      if (e.code === 4001) {
        window.alert('Please connect to MetaMask.');
      }
    });
  }
  function hidden(str) {
    return (
      str.substring(0, 6) +'....'+ str.substring(str.length - 4)
    );
  }
  function OpenRegister(){
    SetOpen_Register((o) => !o)
  }
  return (
    <>
    <Menu shadow="md" width={120}>
    <Menu.Target>
      {Accounttureorfalse ?  <ActionIcon className={classes.link2} variant="subtle"><Jazzicon diameter={25} seed={jsNumberForAddress(Account_image)} /></ActionIcon>:
      <Button className={classes.link1}  leftIcon={<Jazzicon  diameter={20} seed={jsNumberForAddress(Account_image)} />} variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>{Account}</Button>}
    </Menu.Target>

    <Menu.Dropdown>
      <Menu.Label>Application</Menu.Label>
      <Menu.Item onClick={() => history('/user/account')} icon={<IconId size={14} />}>個人資料</Menu.Item>
      <Menu.Item onClick={OpenRegister} icon={<IconPlus size={14} />}>刊登房間</Menu.Item>
    </Menu.Dropdown>
  </Menu>
    <Registers Open_Register={Open_Register} SetOpen_Register={SetOpen_Register}/>
  </>
  )
}

export default Menus