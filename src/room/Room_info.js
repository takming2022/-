import React, { useState } from 'react'
import Room_info_card from './Room_info_card'
import { createStyles } from '@mantine/core';
import ExampleComponent from './ExampleComponent';

const useStyles = createStyles((theme) => ({

}));
const Room_info = () => {
    const { classes } = useStyles();
    // const [booleanValue, setBooleanValue] = useState([true, false, true, false, true, false]);
    return (

        <Room_info_card ></Room_info_card>

        // <ExampleComponent booleanValue={booleanValue}></ExampleComponent>
    )
}

export default Room_info