import { Grid, Skeleton, Container,createStyles,LoadingOverlay, Box } from '@mantine/core';
import './Mid.css'
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useState } from 'react';
const child = <Skeleton height={140} radius="md" animate={false} />;
const useStyles = createStyles((theme) => ({
    root: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#E5E8EB',
      padding:'13px 0px 0px 0px',
    },
    Carousel_div:{
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#E5E8EB',
        margin:'10px 0px 0px 0px',
        height:window.innerWidth < 500 ? 226:326,
        borderBottom: theme.colorScheme === 'dark' ? '1px solid ' + theme.colors.dark[5] : '1px solid #EDEFF2',
        borderTop: theme.colorScheme === 'dark' ? '1px solid ' + theme.colors.dark[5] : '1px solid #EDEFF2',
    }
  }));
const Mid = () => {
    const [usewidth, setusewidth] = useState(window.innerWidth)
    const { classes } = useStyles();
    
    return (
        <div style={{ width: '100%' }}>
            <div className={classes.Carousel_div} >    
            <Carousel className={classes.root} slideSize="80%" height={usewidth < 500 ? 200:300} slideGap="xs" controlsOffset="xs" dragFree withIndicators>
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
            <div class="container">
   
                <div class="windows">

                    <div class="heard">    
                        <div class="menu-circle"></div>
                    </div>
                    <div class="card">
                        <div class="card-mask">
                            <div class="desc">
                                我是遮罩
                            </div>
                        </div>

                        <div class="cover">
                            <img className='img_card' src="https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg" alt=""></img>
                        </div>
                        <div class="content">
                            <div class="title">
                                111-1學期德明
                            </div>
                            <div class="desc">
                                特別強調9/5日(星期一) 宿舍防災演練
                            </div>
                        </div>

                    </div>
                    <div class="card-btn">
                        <div class="btn">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="account-book" width="1em" height="1em"
                                fill="currentColor" aria-hidden="true">
                                <path
                                    d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 00-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z">
                                </path>
                            </svg>
                        </div>
                        <div class="btn">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em"
                                fill="currentColor" aria-hidden="true">
                                <path
                                    d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div><div class="windows">
                    <div class="heard">
                        <div class="menu-circle"></div>
                    </div>
                    <div class="card">
                        <div class="card-mask">
                            <div class="desc">
                                我是遮罩
                            </div>
                        </div>
                        <div class="cover">
                            <img className='img_card' src="https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg" alt=""></img>
                        </div>
                        <div class="content">
                            <div class="title">
                                111-1學期德明
                            </div>
                            <div class="desc">
                                特別強調9/5日(星期一) 宿舍防災演練
                            </div>
                        </div>

                    </div>
                    <div class="card-btn">
                        <div class="btn">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="account-book" width="1em" height="1em"
                                fill="currentColor" aria-hidden="true">
                                <path
                                    d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 00-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z">
                                </path>
                            </svg>
                        </div>
                        <div class="btn">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em"
                                fill="currentColor" aria-hidden="true">
                                <path
                                    d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div><div class="windows">
                    <div class="heard">
                        <div class="menu-circle"></div>
                    </div>
                    <div class="card">
                        <div class="card-mask">
                            <div class="desc">
                                我是遮罩
                            </div>
                        </div>
                        <div class="cover">
                            <img className='img_card' src="https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg" alt=""></img>
                        </div>
                        <div class="content">
                            <div class="title">
                                111-1學期德明
                            </div>
                            <div class="desc">
                                特別強調9/5日(星期一) 宿舍防災演練
                            </div>
                        </div>

                    </div>
                    <div class="card-btn">
                        <div class="btn">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="account-book" width="1em" height="1em"
                                fill="currentColor" aria-hidden="true">
                                <path
                                    d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 00-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z">
                                </path>
                            </svg>
                        </div>
                        <div class="btn">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em"
                                fill="currentColor" aria-hidden="true">
                                <path
                                    d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div><div class="windows">
                    <div class="heard">
                        <div class="menu-circle"></div>
                    </div>
                    <div class="card">
                        <div class="card-mask">
                            <div class="desc">
                                我是遮罩
                            </div>
                        </div>
                        <div class="cover">
                            <img className='img_card' src="https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg" alt=""></img>
                        </div>
                        <div class="content">
                            <div class="title">
                                111-1學期德明
                            </div>
                            <div class="desc">
                                特別強調9/5日(星期一) 宿舍防災演練
                            </div>
                        </div>

                    </div>
                    <div class="card-btn">
                        <div class="btn">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="account-book" width="1em" height="1em"
                                fill="currentColor" aria-hidden="true">
                                <path
                                    d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 00-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z">
                                </path>
                            </svg>
                        </div>
                        <div class="btn">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em"
                                fill="currentColor" aria-hidden="true">
                                <path
                                    d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="windows">

<div class="heard">    
    <div class="menu-circle"></div>
</div>
<div class="card">
    <div class="card-mask">
        <div class="desc">
            我是遮罩
        </div>
    </div>

    <div class="cover">
        <img className='img_card' src="https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg" alt=""></img>
    </div>
    <div class="content">
        <div class="title">
            111-1學期德明
        </div>
        <div class="desc">
            特別強調9/5日(星期一) 宿舍防災演練
        </div>
    </div>

</div>
<div class="card-btn">
    <div class="btn">
        <svg viewBox="64 64 896 896" focusable="false" data-icon="account-book" width="1em" height="1em"
            fill="currentColor" aria-hidden="true">
            <path
                d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 00-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z">
            </path>
        </svg>
    </div>
    <div class="btn">
        <svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em"
            fill="currentColor" aria-hidden="true">
            <path
                d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z">
            </path>
        </svg>
    </div>
</div>
</div>
<div class="windows">

<div class="heard">    
    <div class="menu-circle"></div>
</div>
<div class="card">
    <div class="card-mask">
        <div class="desc">
            我是遮罩
        </div>
    </div>

    <div class="cover">
        <img className='img_card' src="https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg" alt=""></img>
    </div>
    <div class="content">
        <div class="title">
            111-1學期德明
        </div>
        <div class="desc">
            特別強調9/5日(星期一) 宿舍防災演練
        </div>
    </div>

</div>
<div class="card-btn">
    <div class="btn">
        <svg viewBox="64 64 896 896" focusable="false" data-icon="account-book" width="1em" height="1em"
            fill="currentColor" aria-hidden="true">
            <path
                d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 00-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z">
            </path>
        </svg>
    </div>
    <div class="btn">
        <svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em"
            fill="currentColor" aria-hidden="true">
            <path
                d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z">
            </path>
        </svg>
    </div>
</div>
</div>
            </div>
        </div>
    )
}

export default Mid