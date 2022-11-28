import React from 'react'
import { Collapse, List, ListItemButton, ListItemText, ListItemIcon,ListSubheader } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ExploreIcon from '@mui/icons-material/Explore';
const City = () => {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
        console.log("123");
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const handleClick3 = () => {
        setOpen3(!open3);
    };
    const handleClick4 = () => {
        setOpen4(!open4);
    };
    return (
        <div>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: '#e0e0e0' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader style={{backgroundColor:'#e0e0e0'}} component="div" id="nested-list-subheader" >
                        查詢城市
                    </ListSubheader>
                }
            ></List>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <ExploreIcon />
                </ListItemIcon>
                <ListItemText primary="北部" />
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 5 }}>
                        <ListItemIcon>
                            <LocationCityIcon />
                        </ListItemIcon>
                        <ListItemText primary="台北" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 5 }}>
                        <ListItemIcon>
                            <LocationCityIcon />
                        </ListItemIcon>
                        <ListItemText primary="新北" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={handleClick2}>
                <ListItemIcon>
                    <ExploreIcon />
                </ListItemIcon>
                <ListItemText primary="東部" />
                {open2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 5 }}>
                        <ListItemIcon>
                            <LocationCityIcon />
                        </ListItemIcon>
                        <ListItemText primary="宜蘭" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 5 }}>
                        <ListItemIcon>
                            <LocationCityIcon />
                        </ListItemIcon>
                        <ListItemText primary="花蓮" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={handleClick3}>
                <ListItemIcon>
                    <ExploreIcon />
                </ListItemIcon>
                <ListItemText primary="中部" />
                {open3 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={open3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 5 }}>
                        <ListItemIcon>
                            <LocationCityIcon />
                        </ListItemIcon>
                        <ListItemText primary="臺中" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 5 }}>
                        <ListItemIcon>
                            <LocationCityIcon />
                        </ListItemIcon>
                        <ListItemText primary="彰化" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton onClick={handleClick4}>
                <ListItemIcon>
                    <ExploreIcon />
                </ListItemIcon>
                <ListItemText primary="中部" />
                {open4 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
            <Collapse in={open4} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 5 }}>
                        <ListItemIcon>
                            <LocationCityIcon />
                        </ListItemIcon>
                        <ListItemText primary="高雄" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 5 }}>
                        <ListItemIcon>
                            <LocationCityIcon />
                        </ListItemIcon>
                        <ListItemText primary="臺南" />
                    </ListItemButton>
                </List>
            </Collapse>
        </div>
    )
}

export default City