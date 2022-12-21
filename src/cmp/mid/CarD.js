import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CarD.css'
import Grid from '@mui/material/Unstable_Grid2';
import { Card_object } from '../../card_object/Card_object';
export default function CarD({id,title,index1,index2,image}) {
  function details() {
    const aa = Card_object.filter(item => item.id ==id)
    console.log(aa);
  }
  return (
    <Grid  xs={3} sm={4} md={4}>
    <Card  className='Card' variant="outlined" sx={{background:'#b6c4d1', maxWidth:350,margin: 1,boxShadow: 10,borderRadius: 5 }}>
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
        <Button  size="small">訂房</Button>
        <Button  onClick={details} size="small">查看詳情</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}