import React, { useState, useEffect } from 'react';
import './Home.css';
import CarD from './CarD';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Card_object } from '../../card_object/Card_object';
function Home() {
  const [Details, setDetails] = useState([]);
  console.log(Card_object);
  const aaa = ""
  useEffect(() =>{
    var i = 0
    var test = []
    const fetchData = async () => {
      await Card_object.map(item => {
        test[i] =<CarD
        id= {item.id} 
        title={item.name}
        index1='刊登者:'
        index2={item.adress}
        image={item.image}
      />
      i++
      })
    }
    fetchData()
    console.log(test);
    setDetails(test)
  },[aaa])

  return (
    <div>
      <div className='home__section'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container columns={{ xs: 6, sm: 8, md: 16 }}>
            {Details}
            {/* <CarD
              id={1} 
              title='房間1'
              index1='刊登者:'
              index2='0x0769729d73668492D2C5e55f7FC616337ba5f819'
              image=" https://cp4.100.com.tw/images/articles/202005/25/admin_30_1590394405_B679Us49MX.jpg!t1000.jpg"
            />
            <CarD title='房間2'
              index1='刊登者:'
              index2='0x0769729d73668492D2C5e55f7FC616337ba5f819'
              image=" https://ciaocasa.com.tw/uploads/ca1de390-1dc7-44a6-ba78-cc93f9f2fa49-17.jpg"
            />
            <CarD title='房間3'
              index1='刊登者:'
              index2='0x0769729d73668492D2C5e55f7FC616337ba5f819'
              image=" https://static.wixstatic.com/media/6ffe8a_a2239b4f1ee54c13a87fcfff2957b10d~mv2.jpg/v1/fill/w_640,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/6ffe8a_a2239b4f1ee54c13a87fcfff2957b10d~mv2.jpg"
            />
            <CarD title='房間4'
              index1='刊登者:'
              index2='0x0769729d73668492D2C5e55f7FC616337ba5f819'
              image=" https://cp4.100.com.tw/images/articles/202005/25/admin_30_1590394405_B679Us49MX.jpg!t1000.jpg"
            />
            <CarD title='房間5'
              index1='刊登者:'
              index2='0x0769729d73668492D2C5e55f7FC616337ba5f819'
              image=" https://cp4.100.com.tw/images/articles/202005/25/admin_30_1590394405_B679Us49MX.jpg!t1000.jpg"
            />
            <CarD title='房間6'
              index1='刊登者:'
              index2='0x0769729d73668492D2C5e55f7FC616337ba5f819'
              image=" https://cp4.100.com.tw/images/articles/202005/25/admin_30_1590394405_B679Us49MX.jpg!t1000.jpg"
            /> */}
          </Grid>
        </Box>

      </div>
    </div>
  )
}

export default Home