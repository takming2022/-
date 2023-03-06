import { createStyles, Tabs, ActionIcon, Paper, Text } from '@mantine/core'
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons';
import { useState, useEffect } from 'react'
import { jsNumberForAddress } from 'react-jazzicon';
import Jazzicon from 'react-jazzicon/dist/Jazzicon';
const useStyles = createStyles((theme) => ({
    Tab: {
        border: theme.colorScheme === 'dark' ? '1px solid' + theme.colors.dark[4] : '1px solid #D3D8DE',
        borderRadius: '10px',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        maxHeight: '100px',
        position: 'relative',
        width: "80%",
        top: '100px'
    },
    link2: {
        borderRadius: '50%',
        width: '100%',
        height: '100%'
    },
    paper:{
        background:theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#D3D8DE',
        height:'98px',
        borderRadius:'8px',
        width:'99.9%'
    }
}));
const User_Information = () => {
    const [Account_image, setAccount_image] = useState("");
    const [Account, setAccount] = useState("")
    const { classes } = useStyles();
    useEffect(() => {
        MateMask_account()
    }, [])
    async function MateMask_account() {
        var wallet_address;
        const ether_accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        var account = ether_accounts[0];
        wallet_address = account;
        setAccount_image(wallet_address)
        setAccount(hidden(wallet_address))
    }
    function hidden(str) {
        return (
            str.substring(0, 12) + '....' + str.substring(str.length - 10)
        );
    }
    return (
        <div shadow="sm" p="sm" style={{ display: 'flex', width: '100%', height: '92vh', justifyContent: 'center' }}>
            <div className={classes.Tab}>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '30%', height: '100px' }}>
                        <ActionIcon className={classes.link2} variant="subtle"><Jazzicon diameter={70} seed={jsNumberForAddress(Account_image)} /></ActionIcon>
                    </div>
                    <div style={{ width: '70%' }}>
                        <Paper  className={classes.paper}>
                            <Text style={{textAlign:"center"}}>Address</Text>
                            <p></p>
                            <Text style={{textAlign:"center"}}>
                                {Account}
                            </Text>
                        </Paper>
                    </div>
                </div>
                <p></p>
                <Tabs color="teal" defaultValue="first">
                    <Tabs.List>
                        <Tabs.Tab value="first">預定中</Tabs.Tab>
                        <Tabs.Tab value="second" color="blue">
                            待評論
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="first" pt="xs">
                        無
                    </Tabs.Panel>

                    <Tabs.Panel value="second" pt="xs">
                        無
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>

    )
}

export default User_Information