import { Grid, Skeleton, Container, createStyles, LoadingOverlay, Box } from '@mantine/core';
import './Mid.css'
import CarD from "./CarD";
import { useNavigate } from 'react-router-dom';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useEffect, useState } from 'react';
import { abi, address } from '../Contract/Contract';
import { ethers } from 'ethers';
const child = <Skeleton height={140} radius="md" animate={false} />;
const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#E5E8EB',
        padding: '13px 0px 0px 0px',
    },
    Carousel_div: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#E5E8EB',
        margin: '10px 0px 0px 0px',
        height: window.innerWidth < 500 ? 226 : 326,
        borderBottom: theme.colorScheme === 'dark' ? '1px solid ' + theme.colors.dark[5] : '1px solid #EDEFF2',
        borderTop: theme.colorScheme === 'dark' ? '1px solid ' + theme.colors.dark[5] : '1px solid #EDEFF2',
    }
}));
const Mid = () => {
    const history = useNavigate()
    const [usewidth, setusewidth] = useState(window.innerWidth)
    const { classes } = useStyles();
    const testid = 1
    const [CardList, setCardList] = useState([]);
    async function get_room_card() {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner();
        const contractInstance_singner = new ethers.Contract(address, abi, signer);
        //使用singer 連接合約 對合約有可讀寫權限
        const contractInstance_provider = new ethers.Contract(address, abi, provider);
        //使用Provider 連接合約 只會對合約有可讀權限 
        let api = await contractInstance_provider.romms_length();
        // let room_long = parseInt(api._hex, 16)
        let room_long = parseInt(api, 16)
        // console.log(room_long);
        let room_arr = [];
        let room_obj;
        for (let i = 0; i < room_long; i++) {
            await contractInstance_provider.getroomscard(i)
                .then((e) => {
                    room_obj = e;
                    // console.log(room_obj);
                });


            room_arr[i] = <CarD
                id={room_obj[4]}
                title_room_name={room_obj[1]} //name
                describe='刊登者:'
                describe_wallet_addr={hidden(room_obj[0])} //address
                image={room_obj[2][0]} //image
            />
        }

        setCardList(room_arr)


    }
    function hidden(str) {
        return (
            str.substring(0, 6) + '....' + str.substring(str.length - 4)
        );
    }

    useEffect(() => {
        get_room_card()
    }, [])
    return (
        <div style={{ width: '100%' }}>
            <div className={classes.Carousel_div} >
                <Carousel className={classes.root} slideSize="80%" height={usewidth < 500 ? 200 : 300} slideGap="xs" controlsOffset="xs" dragFree withIndicators>
                    <Carousel.Slide key={"https://www.uwood.com.tw/userfiles/case/35220211101143019.jpg"}>
                        <Image height="300px" src={"https://www.uwood.com.tw/userfiles/case/35220211101143019.jpg"} />
                    </Carousel.Slide>
                    <Carousel.Slide key={"https://images.hhh.com.tw/uploads/_hcolumn/point01_337_05.jpg"}>
                        <Image height="300px" src={"https://images.hhh.com.tw/uploads/_hcolumn/point01_337_05.jpg"} />
                    </Carousel.Slide>
                    <Carousel.Slide key={"https://ciaocasa.com.tw/uploads/97b02b7a-f484-4042-8689-a1cc681b854e-%E4%B8%BB%E5%9C%96.jpg"}>
                        <Image height="300px" src={"https://ciaocasa.com.tw/uploads/97b02b7a-f484-4042-8689-a1cc681b854e-%E4%B8%BB%E5%9C%96.jpg"} />
                    </Carousel.Slide>
                </Carousel>
            </div>
            
            <div className='container'>
                {CardList}
            </div>
        </div>
    )
}

export default Mid