import React from 'react';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../images/yo.jpg';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "#A0C1EF"
    },
    subtitle: {
        color:"white",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign:"center",
        zIndex: 1
    }
}));

const Header = () => {

    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Diego Costa" />
            </Grid>            
            <Typography className={classes.title} variant="h3">
                <Typed 
                    strings={["Diego Alberto Costa"]}
                    typeSpeed={60}
                />
            </Typography>
            <br/>
            <Typography  className={classes.subtitle} variant="h4">
                <Typed 
                    strings={["Web Design","Web Development", "React.js", "Material UI", "Bootstrap", "Github", "Firebase", "Axios", "React Hooks", "CSS", "GSAP"]}                    
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </Typography>

        </Box>
    )
}

export default Header
