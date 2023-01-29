import * as React from 'react';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CarD.css'
import Grid from '@mui/material/Unstable_Grid2';
import { Card_object } from '../../card_object/Card_object';
import { SearchOutlined } from '@ant-design/icons';
import { IconButton, Stack, Tooltip } from '@mui/material';
import { EditOutlined, EllipsisOutlined, AccountBookOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { styled } from '@mui/material/styles';
import  { tooltipClasses } from '@mui/material/Tooltip';
const { Meta } = Card;
export default function CarD({ id, title, index1, index2, image }) {
  function details() {
    const aa = Card_object.filter(item => item.id == id)
    console.log(aa);
  }
  const w = url => {
    window.open(url, '_blank')
  };
 function aaa(){
  console.log(123);
 }
 const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
    fontSize: '17px',
  },
});
  return (
    <Grid xs={3} sm={4} md={4}>
       <Card
    style={{
       maxWidth: 1000, margin: 10, boxShadow: 10, borderRadius: '20px' ,background: '#b6c4d1',borderColor: 'rgba(0, 0, 0, 0.2)'
    }}
    cover={
      <img
        alt="example"
        src={image}
        style={{borderRadius: '20px 20px 0px 0px' ,width: '99.2%',margin: "1px 0px 0px 2px"}}
      />
    }
    actions={[
      <CustomWidthTooltip title="訂房">
        <AccountBookOutlined  style={{}} onClick={aaa}/>
      </CustomWidthTooltip>
        ,
      <CustomWidthTooltip title="查看詳情" >
      <EllipsisOutlined key="ellipsis" onClick={() => {w(`/room/${id}`) ;console.log(123);}} />
     </CustomWidthTooltip>,
    ]}
  >
    <Meta

      title={title}
      description={index1 + index2}
      
    />
  </Card>
      {/* <Card className='Card' variant="outlined" sx={{ background: '#b6c4d1', maxWidth: 1000, margin: 1, boxShadow: 10, borderRadius: 5 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {index1}
            <br></br>
            {index2}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">訂房</Button>
          <Button onClick={() => w(`/room/${id}`)} size="small">查看詳情</Button>
        </CardActions>
      </Card> */}
    </Grid>
  );
}