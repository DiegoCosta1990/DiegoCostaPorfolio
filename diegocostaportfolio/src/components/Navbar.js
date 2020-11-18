import React, { useState } from 'react';
import { AppBar, Toolbar, ListItem, ListItemIcon, List, IconButton, ListItemText, Avatar, Divider, Typography, Box} from '@material-ui/core';
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import avatar from '../images/yo.jpg';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';

const useStyles = makeStyles( theme => ({
    menuSliderContainer: {
        width: 250,
        background: "rgba(9,92,121,1)",
        height: "30rem"
    },
    avatarContainer: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: "white"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact"
    },
];
const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    }

    const classes = useStyles(); 

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div">
            <Avatar className={classes.avatarContainer} src={avatar} alt="Diego Costa"/>
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem> 
                ))}
            </List>
        </Box>
    )

    return (
        <>        
        <Box content='nav'>
            <AppBar position="static" style={{background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,92,121,1) 83%, rgba(0,212,255,1) 100%)"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <MenuIcon style={{color: "white"}}/>
                    </IconButton>   
                    <Typography style={{color:"white", marginLeft: "10px"}} variant='h5'>
                        Portfolio
                    </Typography>
                    <MobilRightMenuSlider open={state.right}>
                        {sideList("right")}
                    </MobilRightMenuSlider>                 
                </Toolbar>
            </AppBar>            
        </Box>
        </>
    )
}

export default Navbar;
