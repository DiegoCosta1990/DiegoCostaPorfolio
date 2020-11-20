import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, ListItem, ListItemIcon, List, IconButton, ListItemText, Avatar, Divider, Typography, Box} from '@material-ui/core';
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import avatar from '../images/yo.jpg';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import Footer from './Footer';

const useStyles = makeStyles( theme => ({
    menuSliderContainer: {
        width: 250,
        background: "rgba(9,92,121,1)",
        height: "100%",
        textAlign: "center"
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
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact",
        listPath: "/contact"
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
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatarContainer} src={avatar} alt="Diego Costa"/>
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component= {Link} to= {lsItem.listPath}>
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
                    <MobilRightMenuSlider open={state.right} anchor="right" onClose={toggleSlider("right", false)}>
                        {sideList("right")}
                        <Footer />
                    </MobilRightMenuSlider>                 
                </Toolbar>
            </AppBar>            
        </Box>
        </>
    )
}

export default Navbar;
