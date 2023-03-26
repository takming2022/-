import React, { useEffect } from 'react'
import './Mid.css'
import { useNavigate  } from 'react-router-dom';
const CarD = ({ id, title_room_name, describe, describe_wallet_addr, image }) => {
    // useEffect(() => {
    //     const params = new URLSearchParams(window.location.search);
    //     const id = params.get('id');
    //     const name = params.get('name');
    //     console.log('id:', id); // 输出 "123"
    //     console.log('name:', name); // 输出 "john"
    // }, []);
    // useEffect(() => {
    //     const params = new URLSearchParams(window.location.search);
    //     params.set('name', 'john');
    //     const newUrl = window.location.pathname + '?' + params.toString();
    //     window.history.pushState({}, '', newUrl);
    // }, []);
    // console.log(id);
    const history = useNavigate()
    
    return (
        <div class="windows">

            <div class="heard">
                <div class="menu-circle"></div>
            </div>
            <div class="card">
                <div class="card-mask">
                    <div class="desc">
                        {/* 我是遮罩 */}
                    </div>
                </div>

                <div class="cover">
                    <img className='img_card' src={image} alt=""></img>
                </div>
                <div class="content">
                    <div class="title">
                        {title_room_name}
                    </div>
                    <div class="desc">
                        {describe}
                        {describe_wallet_addr}

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
                <div class="btn" onClick={() => history(`/room/${id}`)}>
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="ellipsis" width="1em" height="1em"
                        fill="currentColor" aria-hidden="true">
                        <path
                            d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CarD