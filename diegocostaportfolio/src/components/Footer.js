import React from 'react';
import{ makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "grey",
            "&:hover": {
                fill: "rgba(9,92,121,1)",
                fontSize: "1.8rem"
            },
        },
    },
});

const Footer = () => {

    const classes = useStyles();

    return (
        <BottomNavigation width="auto">
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<FacebookIcon/>} href="https://www.facebook.com/Diego.LBT"/>
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<GitHubIcon/>} href="https://github.com/DiegoCosta1990"/> 
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<LinkedInIcon/>} href="https://www.linkedin.com/in/diego-alberto-costa-36338678/"/>             
        </BottomNavigation>
    )
}

export default Footer
