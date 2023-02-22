import React, { useState, useEffect } from 'react';
import './Home.css';
import CarD from './CarD';
import { Card_object } from '../../card_object/Card_object';
function Home() {
  const [Details, setDetails] = useState([]);
  console.log(Card_object);
  const aaa = ""
  useEffect(() =>{
    var i = 0
    var test = []
    const fetchData = async () => {
       Card_object.map(item => {
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

  return ( <> 
  {Details}
  </>
           
          
  )
}

export default Home