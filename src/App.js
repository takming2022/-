import { useState, useEffect } from 'react';
import { MantineProvider, ColorSchemeProvider, Drawer } from '@mantine/core';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { ColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import Navbars from './Navbar/Navbars';
import Headers from './Header/Headers';
import Mid from './Mid/Mid';
import './App.css'
import Drawers from './Navbar/Drawers';

import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from 'react-router-dom';
import User_Information from './User_Information/User_Information';
import Room_info from './room/Room_info';
import Mid_Search from './Mid_Search/Mid_Search';
function App() {
    
  const [opend1, setopend1] = useState(false)
  //控制側邊顯示
  const [Control_Navbar, Set_Control_Navbar] = useState(false)
  //控制黑白模式
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const [dark, setdark] = useState(colorScheme);
  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
    setdark(value || (colorScheme === 'dark' ? false : true))
  };
  useHotkeys([['mod+J', () => toggleColorScheme()]]);
 
  
  return (
    
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Router>
          <Headers Set_Control_Navbar={Set_Control_Navbar} setopend1={setopend1} opend1={opend1} />
          <div style={{ display: 'flex' }}>
            {window.innerWidth < 1312 ? <Drawers opend1={opend1} setopend1={setopend1}></Drawers> :
              <>{opend1 ? <Navbars opend1={opend1} setopend1={setopend1} /> : ''}</>}
            <Routes>
              <Route exact path='/' element={<Mid />} />
              <Route exact path='/search/:word' element={<Mid_Search/>} />
              <Route exact path='/room/:id' element={<Room_info />} />
              <Route exact path='/user/account' element={<User_Information />} />
            </Routes>
          </div>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
export default App;
