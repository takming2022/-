import { Modal,Textarea,Group,Button } from '@mantine/core'
import React from 'react'
const User_evaluate_modal = ({opened,setopened,Contract_Room_name}) => {
  function heeeee() {
    console.log('123');
  }
  return (
    <>
    <Modal opened={opened}    
     size={window.innerWidth > 800 ? "60%" : "100%"}   
    onClose={() => {
      setopened((o) => !o);
      }} 
      title="評論" centered>
      <div >
      房間名稱:{Contract_Room_name}
      <Textarea
        placeholder="請寫入評論"
        label="評論區"
        autosize
        minRows={20}
      />
      </div>
      <p></p>
      <Group position="center">
        <Button onClick={heeeee}>發布評論</Button>
      </Group>
    </Modal>

  </>
  )
}

export default User_evaluate_modal