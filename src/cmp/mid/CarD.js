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
import { tooltipClasses } from '@mui/material/Tooltip';
const { Meta } = Card;
export default function CarD({ id, title, index1, index2, image }) {
  function details() {
    const aa = Card_object.filter(item => item.id == id)
    console.log(aa);
  }
  const w = url => {
    window.open(url, '_blank')
  };
  function aaa() {
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

    <div class="windows_card">
      <div class="heard_card">
        <div class="menu-circle_card"></div>
      </div>
      <div class="card_card">
        <div class="card-mask_card">
          <div class="desc_card">
            我是遮罩
          </div>
        </div>
        <div class="cover_card">
          <img className='img_card' src="https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg" alt=""></img>
        </div>
        <div class="content_card">
          <div class="title_card">
            {title}
          </div>
          <div class="desc_card">
            {index1}
            <br></br>
            {index2}
          </div>
        </div>

      </div>
      <div class="card-btn_card">
        <div class="btn_card">
          <CustomWidthTooltip title="訂房">
            <AccountBookOutlined style={{}} onClick={aaa} />
          </CustomWidthTooltip>
        </div>
        <div class="btn_card">
          <CustomWidthTooltip title="查看詳情" >
            <EllipsisOutlined key="ellipsis" onClick={() => { w(`/room/${id}`); console.log(123); }} />
          </CustomWidthTooltip>
        </div>
      </div>
    </div>
  );
}