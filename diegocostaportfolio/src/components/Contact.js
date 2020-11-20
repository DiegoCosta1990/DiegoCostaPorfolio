import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';
import Typed from 'react-typed'; 

const useStyles = makeStyles(theme => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "lightblue",
        borderColor: "lightblue"
    },
    typedContainer: {
        position: "absolute",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign:"center",
        zIndex: 1,
        color: "white"
    }
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "lightblue",
        },
        "& label" :{
            color: "lightblue",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "rgba(9,92,121,1)"
            },
            "&:hover fieldset": {
                borderColor: "lightblue"
            },
            "&.Mui-focused fieldset": {
                borderColor: "lightblue"
            }
        }
    }
})(TextField);

const Contact = () => {

    const classes = useStyles();

    return (
            <Box component="div">
            <Navbar />
                <Grid container justify="center">
                    <Box component="form" className={classes.form}>
                        <Typography variant="h5" style={{color: "white", textAlign: "center", textTransform: "uppercase"}}>
                            <Typed
                                className={classes.typedContainer} 
                                strings={["Hire or contact me"]}                    
                                typeSpeed={70}
                                backSpeed={60}
                                loop
                            />
                        </Typography>
                        <br/>
                        <InputField fullWidth={true} label="Name" variant="outlined" margin="normal" size="medium" inputProps={{style:{color: "white"}}}/>
                        <br/>
                        <InputField fullWidth={true} label="Email" variant="outlined" margin="normal" size="medium" inputProps={{style:{color: "white"}}} />
                        <br/>
                        <InputField fullWidth={true} label="Company Name" variant="outlined" margin="normal" size="medium" inputProps={{style:{color: "white"}}} />
                        <br/>
                        <br/>
                        <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon/>} to="d.costa1990@outlook.com">
                            Contact me
                        </Button>
                    </Box>
                </Grid>            
            </Box>
    )
};

export default Contact;
