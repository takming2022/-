import React from 'react';
import { useParams } from 'react-router-dom';
import { Card_object } from '../../card_object/Card_object';
import './test.css';

const Test = () => {
    const params = useParams();
    var aa;
    function details() {
        aa = Card_object.filter(item => item.id == params.id)
        console.log(aa);
    }
    details()
    console.log(params)
    return (
        <div className='room'>

            <div>
                <img src={aa[0].image} className='rrimg' alt='ERROR' />
            </div>

            <div className='rname'>
                {aa[0].name}
            </div>
            {/* <div className='rid'>
                {aa[0].id}
            </div> */}

            <div className='rad'>
                {aa[0].adress}
            </div>
        </div>
    )
}

export default Test;