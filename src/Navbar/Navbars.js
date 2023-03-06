import { useState } from 'react';
import { Navbar, Button, Center, Group, Code, Tooltip, UnstyledButton, createStyles, Stack, Drawer } from '@mantine/core';
import NavbarLinksGroup from '../Group/NavbarLinksGroup';
import './Navbar.css'
import { Affix } from 'antd';
const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#D3D8DE',
    top: '1px',
    margin:'0px 0px 5px -25px',
    borderBottom:'1px solid ' + theme.colors.dark[5],
    width:'250px'
  },
  links: {
    [theme.fn.largerThan('520')]: {
      display: 'none',
    },
    [theme.fn.smallerThan('520')]: {
      display: 'none',
      margin:'-25px 0px 5px -25px',
      borderBottom:'1px solid ' + theme.colors.dark[5],
      width:'250px'
    },
  },
  affix:{
    zIndex:2
  }
}));
const HeaderAction = ({ opend1, setopend1 }) => {
  const [top, setTop] = useState(55);
  const { classes } = useStyles();
  return (
    <Affix offsetTop={top}>
    <div id='HeaderActions' style={{}}>
      <Navbar id='Navbar' height={'100%'} width={{ sm: 270 }} p="md" className={classes.root} >
        <NavbarLinksGroup />
      </Navbar>
    </div></Affix>
    
  );
}
export default HeaderAction