import {useState} from 'react'
import { Button,Navbar, Center, Group, Code, Tooltip, UnstyledButton, createStyles, Stack, Drawer,Modal } from '@mantine/core';
import NavbarLinksGroup from '../Group/NavbarLinksGroup';
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#D3D8DE',
    top: '1px'
  },
  links: {
    [theme.fn.largerThan('520')]: {
      display: 'none',
    },
    margin:'10px auto',
    border:'1px solid ' + theme.colors.dark[5],
  },
  group:{
    [theme.fn.largerThan('520')]: {
      display: 'none',
    },
    margin:'-25px 0px 10px -37px',
    borderBottom:'1px solid ' + theme.colors.dark[5],
    width:'250px'
  }
}));
const Drawers = ({ opend1, setopend1 }) => {
  const [MatemaskOpened, SetMatemaskOpened] = useState(false);
  const { classes } = useStyles();
  return (
    <Drawer
      opened={opend1}
      onClose={() => setopend1(false)}
      withCloseButton={false}
      padding="xl"
      size="250px"
    >
      <NavbarLinksGroup />
    </Drawer>
  )
}

export default Drawers