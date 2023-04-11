import {useState,useEffect} from 'react'
import {createStyles,Button,Modal, Image ,ActionIcon,Menu,Text} from '@mantine/core';
import Jazzicon from 'react-jazzicon/dist/Jazzicon';
import { jsNumberForAddress } from 'react-jazzicon';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight  } from '@tabler/icons';
import Menus from '../menu/Menus';
const useStyles = createStyles((theme) => ({
    link1: {
      [theme.fn.smallerThan('606')]: {
        display:'none'
      },
      borderRadius:'20px'
    },
    link2: {
      [theme.fn.largerThan('605')]: {
        display:'none'
      },
      borderRadius:'50%',
      width:'20px'
    },
  }));
const Header_Login = () => {
    const [window_witch, setwindow_witch] = useState(window.innerWidth)
    const [MatemaskOpened, SetMatemaskOpened] = useState(false);
    const { classes } = useStyles();
    const [Account, setAccount] = useState("");
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
  return (
    <div>
        {Account =="" ? <Button  onClick={() => { SetMatemaskOpened(true)}} className={classes.links} variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>connect</Button>
        :
        <>
        <Menus Accounttureorfalse ={true} />
        <Menus Accounttureorfalse ={false} />
       </>}
         <>
          <Modal
            opened={MatemaskOpened}
            onClose={() => SetMatemaskOpened(false)}
            title="connect address"
            centered
          >
             <Button style={{width:'100%'}} leftIcon={<Image width='25px' src={require('./metamask_icon.png')} />} color="gray" onClick={Login_MateMask}>MateMask</Button>
          </Modal>
        </>
    </div>
  )
}

export default Header_Login