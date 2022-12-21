import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  FireTwoTone,
  FunnelPlotFilled 
} from '@ant-design/icons';
import '../left/Left.css'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const onClick = (e) => {
  console.log('click ', e.key);
  if(e.key == 2){
    window.open('https://ultimate-survior2.web.app/')
  }
};
const items = [
  getItem('玩家資訊', '1', <PieChartOutlined />),
  getItem('遊戲', '2', <DesktopOutlined />),
  getItem("搜尋熱門地區", '3', <FunnelPlotFilled />, [
    getItem('歐洲', 'sub1', <FunnelPlotFilled />, [
      getItem('法國', '法國',<FireTwoTone />),
      getItem('摩納格', '摩納格',<FireTwoTone />),
      getItem('英國', '英國',<FireTwoTone />),
      getItem('愛爾蘭', '愛爾蘭',<FireTwoTone />),
    ]),
    getItem('亞洲', 'sub2', <FunnelPlotFilled />, [
      getItem('台灣', '台灣',<FireTwoTone />),
      getItem('中國', '中國',<FireTwoTone />),
      getItem('日本', '日本',<FireTwoTone />),
      getItem('泰國', '泰國',<FireTwoTone />),
    ]),
    getItem('美洲', 'sub3', <FunnelPlotFilled />, [
      getItem('紐約', '紐約',<FireTwoTone />),
      getItem('洛杉磯', '洛杉磯',<FireTwoTone />),
      getItem('聖地牙哥', '聖地牙哥',<FireTwoTone />),
      getItem('聖保羅', '聖保羅',<FireTwoTone />),
    ]),
    getItem('非洲', 'sub4', <FunnelPlotFilled />, [
      getItem('埃及', '埃及',<FireTwoTone />),
      getItem('尼日利亞', '尼日利亞',<FireTwoTone />),
      getItem('摩洛哥', '摩洛哥',<FireTwoTone />),
      getItem('突尼斯', '突尼斯',<FireTwoTone />),
    ]),
    getItem('大洋洲', 'sub5', <FunnelPlotFilled />, [
      getItem('印度尼西亞', '印度尼西亞',<FireTwoTone />),
      getItem('澳大利亞', '澳大利亞',<FireTwoTone />),
      getItem('紐西蘭', '紐西蘭',<FireTwoTone />),
      getItem('吐瓦魯', '吐瓦魯',<FireTwoTone />),
    ]),
  ]),

];
const Left = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (

    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div
        style={{
          height: 32,
          margin: 16,
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      >

      </div>
      <Menu onClick={onClick} theme="dark"  defaultSelectedKeys={['1']} mode="inline"  items={items} />
    </Sider>

  )
}

export default Left