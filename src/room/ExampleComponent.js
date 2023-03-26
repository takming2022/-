// import React, { useState } from 'react'
// import { createStyles } from '@mantine/core';
// function ExampleComponent({ booleanValue }) {
//     //TODO:這個檔案室測試用的
//     const [usewidth, setusewidth] = useState(window.innerWidth);
//     const useStyles = createStyles((theme) => ({
//         root: {
//             backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#E5E8EB',
//             padding: '13px 0px 0px 0px',
//         },
//         Carousel_div: {
//             backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#E5E8EB',
//             margin: '10px 0px 0px 0px',
//             height: window.innerWidth < 500 ? 226 : 326,
//             borderBottom: theme.colorScheme === 'dark' ? '1px solid ' + theme.colors.dark[5] : '1px solid #EDEFF2',
//             borderTop: theme.colorScheme === 'dark' ? '1px solid ' + theme.colors.dark[5] : '1px solid #EDEFF2',
//         },
//         reserveMain: {
//             width: '80vw',
//             border: '1px solid white',
//             display: 'flex',
//             justifyContent: 'space-around',
//             position: 'absolute',
//             left: '50%',
//             transform: 'translateX(-50%)'

//         },
//         reserveLeft: {
//             border: '1px solid white',
//             width: '60%',

//             // maxWidth: '481px'


//         },

//         reserveRight: {
//             border: '1px solid white',
//             width: '40%',
//             // maxWidth: '383px'
//         },
//         reserveRoomName: {
//             margin: '0',
//             fontSize: '36px',
//             color: 'white',
//             letterSpacing: '3.76px',
//             fontWeight: '700',
//             fontFamily: 'NotoSansTC-Medium,Noto Sans TC,sans-serif'
//         }, roomBasicDescription: {
//             display: 'inline-block',
//             marginTop: '3.87vh',
//             fontSize: '14px',
//             color: '#c4c4c4',
//             letterSpacing: '1.46px',
//             lineHeight: '31px',
//         },
//         roomDescription: {
//             fontSize: '12px',
//             textAlign: 'justify',
//             color: '#c4c4c4',
//             letterSpacing: '1.25px',
//             lineHeight: '20px',
//             wordWrap: 'break-word',

//         },
//         iconSection: {
//             marginTop: '40px',
//             background: '#555353',
//             color: 'white',
//             height: '27.62vh',
//             display: 'flex',
//             justifyContent: 'space-around',
//             alignItems: 'center',
//             flexWrap: 'wrap',
//             marginBottom: '10vh',
//         },
//         roomIcon: {
//             width: '30%',
//             fontSize: '12px',
//             letterSpacing: '1.25px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center', //加了圖片之後可能要改 這個是水平

//         },



//     }));
//     const { classes } = useStyles();
//     console.log(booleanValue);
//     return (
//         <div>
//             {/* ... */}
//             <div className={classes.iconSection}>
//                 {booleanValue.map((isVisible, index) => {
//                     let iconContent;

//                     switch (index) {
//                         case 0:
//                             return <div className={classes.roomIcon} style={{ opacity: isVisible ? 1 : 0.3 }}>{isVisible ? "HI1" : "BYE1"}</div>;
//                         case 1:
//                             return <div className={classes.roomIcon} style={{ opacity: isVisible ? 1 : 0.3 }}>{isVisible ? "HI2" : "BYE2"}</div>;

//                         case 2:
//                             return <div className={classes.roomIcon} style={{ opacity: isVisible ? 1 : 0.3 }}>{isVisible ? "HI3" : "BYE3"}</div>;
//                         case 3:
//                             return <div className={classes.roomIcon} style={{ opacity: isVisible ? 1 : 0.3 }}>{isVisible ? "HI4" : "BYE4"}</div>;
//                         case 4:
//                             return <div className={classes.roomIcon} style={{ opacity: isVisible ? 1 : 0.3 }}>{isVisible ? "HI5" : "BYE5"}</div>;
//                         case 5:
//                             return <div className={classes.roomIcon} style={{ opacity: isVisible ? 1 : 0.3 }}>{isVisible ? "HI6" : "BYE6"}</div>;
//                         default:
//                             iconContent = "UNKNOWN";
//                             break;
//                     }
//                     // return (
//                     //     <div
//                     //         key={index}
//                     //         className={classes.roomIcon}
//                     //         style={{ opacity: isVisible ? 1 : 0.3 }}
//                     //     >
//                     //         {iconContent}
//                     //     </div>
//                     // );

//                 })}
//             </div>

//         </div>
//     );
// }
// export default ExampleComponent;
//TODO:第二個

import React, { useState } from 'react'
import '../Mid/Mid.css'
import { createStyles,Image ,Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { CarOutlined, WifiOutlined, FireOutlined, CoffeeOutlined } from '@ant-design/icons';
import BathtubIcon from '@mui/icons-material/Bathtub';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
function Room_info_card({ booleanValue }) {

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
        },
        reserveMain: {
            width: '80vw',
            border: '1px solid white',
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'

        },
        reserveLeft: {
            border: '1px solid white',
            width: '70%',
            maxWidth: '500px'

        },

        reserveRight: {
            border: '1px solid white',
            width: '30%',
            maxWidth: '400px',
            display:'flex',
            justifyContent:'flex-end',
            alignItems:'flex-end',

        },
        reserveRoomName: {
            margin: '0',
            fontSize: '36px',
            color: 'white',
            letterSpacing: '3.76px',
            fontWeight: '700',
            fontFamily: 'NotoSansTC-Medium,Noto Sans TC,sans-serif'
        }, roomBasicDescription: {
            display: 'inline-block',
            marginTop: '3.87vh',
            fontSize: '14px',
            color: '#c4c4c4',
            letterSpacing: '1.46px',
            lineHeight: '31px',
        },
        roomDescription: {
            fontSize: '12px',
            textAlign: 'justify',
            color: '#c4c4c4',
            letterSpacing: '1.25px',
            lineHeight: '20px',
            wordWrap: 'break-word',

        },
        iconSection: {
            marginTop: '40px',
            background: '#555353',
            color: 'white',
            height: '27.62vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginBottom: '10vh',
        },
        roomIcon: {
            width: '30%',
            fontSize: '12px',
            letterSpacing: '1.25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', //加了圖片之後可能要改 這個是水平


        },
        RightCtrlWindow: {
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'flex-end',
            maxWidth:'100%',
            marginBottom:'15vh'
            // flexGrow:'1'

        },
        roomPrice: {
            color: 'white',
            fontSize: '30px',
            letterSpacing: '3.13px',
            textAlign: 'right',
            // display: 'flex',
            // justifyContent: 'flex-end',
            width:'auto',
            maxWidth:'100%',
            wordWrap: 'break-word',
            // whiteSpace:'nowrap'


        },
        roomPriceDescribe: {
            fontSize: '14px',
            textAlign: 'center',
            width:'auto',
            maxWidth:'100%',
            // whiteSpace:'nowrap'
            // display: 'flex',
            // justifyContent: 'flex-end',

        },
        doReserve:{
            // display:'flex',
            // overflow:'hidden',
            // wordWrap: 'break-word',
            width:'100%',
            fontSize:'16px',
            letterSpacing:'5px',
            maxWidth:'200px'
        },



    }));

    const [usewidth, setusewidth] = useState(window.innerWidth)
    const { classes } = useStyles();

    return (

        <div>{/*外框*/}
            <div style={{ width: '100%' }}> {/*上滑條*/}
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
            </div>
            <div className={classes.reserveMain}>{/*main*/}
                <div className={classes.reserveLeft}>{/*left*/}
                    <span className={classes.reserveRoomName}>這是某間房名 <br /></span>
                    <span className={classes.roomBasicDescription}>
                        敘述1: <br />
                        敘述2: <br />
                        敘述3: <br />
                        敘述4: <br />
                    </span>
                    <p className={classes.roomDescription}>wertyuikjhgsdfghjkjhgfdsdfghjjhgfdfghjkjhgfddasdashdiuhaofhiauasdjasauidhahsiu</p>
                    <div className={classes.iconSection}>

                        {booleanValue.map((isVisible, index) => {
                            let iconContent;

                            switch (index) {
                                case 0:
                                    return <div className={classes.roomIcon} style={{ opacity: isVisible ? 1 : 0.3 }}><CarOutlined style={{ fontSize: '1.5rem' }} />&nbsp;免費停車</div>;
                                case 1:
                                    return <div className={classes.roomIcon} style={{ opacity: isVisible ? 1 : 0.3 }}><WifiOutlined style={{ fontSize: '1.5rem' }} />&nbsp;免費網路</div>;

                                case 2:
                                    return <div className={classes.roomIcon} style={{ opacity: isVisible ? 1 : 0.3 }}><FireOutlined style={{ fontSize: '1.5rem' }} />&nbsp;附有溫泉</div>;
                                case 3:
                                    return <div className={classes.roomIcon} style={{ opacity: isVisible ? 1 : 0.3 }}><BathtubIcon style={{ fontSize: '1.5rem' }} />&nbsp;附有浴缸</div>;
                                case 4:
                                    return <div className={classes.roomIcon} style={{ opacity: isVisible ? 1 : 0.3 }}><CoffeeOutlined style={{ fontSize: '1.5rem' }} />&nbsp;有咖啡廳</div>;
                                case 5:
                                    return <div className={classes.roomIcon} style={{ opacity: isVisible ? 1 : 0.3 }}><FitnessCenterIcon style={{ fontSize: '1.5rem' }} />&nbsp;有健身房</div>;
                                default:
                                    iconContent = "UNKNOWN";
                                    break;
                            }


                        })}
                    </div>

                </div>

                <div className={classes.reserveRight}>{/*right*/}
                    <div className={classes.RightCtrlWindow}>
                        <span className={classes.roomPrice}>NT.1380</span>
                        <span className={classes.roomPriceDescribe}>全星期(一~日)</span>
                        <br />
                        <Button className={classes.doReserve} variant="outline" radius="md" size="sm">我要預約訂房</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Room_info_card