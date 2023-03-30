import { useState } from 'react';
import { RangeCalendar } from '@mantine/dates';
import { createStyles } from '@mantine/core';
import { Button } from "@mantine/core";
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons';
import { v4 as uuidv4 } from 'uuid';
import Check_Order from './Check_Order';
const useStyles = createStyles((theme) => ({
    datatitle: {
        borderRadius: "20px 20px 0% 0%",
        width: "100%",
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[3]
                : "rgba(16 18 27 / 20%)",
    },
    doReserve: {
        // display:'flex',
        // overflow:'hidden',
        // wordWrap: 'break-word',

        width: "100%",
        margin: "10px 0px",
        fontSize: "16px",
        letterSpacing: "5px",

    },
}))

const Order = ({room_uuid_for_order,Contract_Room_money,Contract_Room_name,Contract_Room_address,Contract_Room_wallet_addr}) => {
    const { classes } = useStyles();
    const [value, setValue] = useState([
        new Date(2021, 11, 1),
        new Date(2021, 11, 5),
    ]);
    const [Minute, setMinute] = useState([])
    const [MinuteEnd, setMinuteEnd] = useState([])
    const [datestart_ans,set_datestart_ans]= useState()
    const [datesEnd_ans,set_datesEnd_ans]= useState()
    const [Open_Order, setOpen_Order] = useState(false)
    async function deal_with_time(){
        const datestart = new Date(Minute);
        const hours = datestart.getHours();
        const minutee = datestart.getMinutes();
        const dateEnd = new Date(MinuteEnd);
        const hoursEnd = dateEnd.getHours();
        const minuteeEnd = dateEnd.getMinutes();
        console.log(hours,minutee,hoursEnd,minuteeEnd);
        await set_datestart_ans(value[0].getTime()+hours*3600*1000+minutee*60*1000)
        await set_datesEnd_ans(value[1].getTime()+hoursEnd*3600*1000+minuteeEnd*60*1000)
    }
    async function check_Order() {
        deal_with_time()
        setOpen_Order((o) => !o)
    }
    return (
        <div style={{ textAlign: "center", display: "flex", width: "100%", justifyContent: "center", flexWrap: "wrap" }}>
            <div className={classes.datatitle}>訂房(請選擇時間)</div>
            <div>
                <RangeCalendar value={value} onChange={setValue}></RangeCalendar>
                <TimeInput
                    label="Pick starttime"
                    placeholder="Pick starttime"
                    icon={<IconClock size={16} />}
                    defaultValue={new Date()}
                    value={Minute}
                    onChange={setMinute}
                />
                <TimeInput
                    label="Pick endtime"
                    placeholder="Pick endtime"
                    icon={<IconClock size={16} />}
                    defaultValue={new Date()}
                    value={MinuteEnd}
                    onChange={setMinuteEnd}
                />
                <Button
                    className={classes.doReserve}
                    onClick={check_Order}
                    variant="outline"
                    radius="md"
                    size="sm"
                >
                    我要預約訂房
                </Button>
            </div>
            <Check_Order Open_Order={Open_Order} setOpen_Order={setOpen_Order} 
            room_uuid_for_order ={room_uuid_for_order}Contract_Room_money={Contract_Room_money}
            Contract_Room_name={Contract_Room_name}Contract_Room_address={Contract_Room_address}
            Contract_Room_wallet_addr={Contract_Room_wallet_addr} datestart_ans={datestart_ans} datesEnd_ans={datesEnd_ans}/>
        </div>
    );

}

export default Order