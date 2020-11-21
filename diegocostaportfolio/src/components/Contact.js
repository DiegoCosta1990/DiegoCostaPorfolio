import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';
import Typed from 'react-typed';
import {db} from '../components/Firebase';

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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection('contacts').add({
            name:name,
            email:email,
            companyName:companyName,
            message:message
        })
        .then(() => {
            alert("Message has been submitted! Thanks!");
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        });

        setName("");
        setEmail("");
        setCompanyName("");
        setMessage("");
    }

    const classes = useStyles();

    return (
            <Box component="div">
            <Navbar />
                <Grid container justify="center">
                    <Box component="form" className={classes.form} onSubmit={handleSubmit}>
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
                        <InputField 
                            fullWidth={true}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label="Name" 
                            variant="outlined" 
                            margin="normal" 
                            size="medium" 
                            inputProps={{style:{color: "white"}}}/>
                        <br/>
                        <InputField 
                            fullWidth={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            label="Email" 
                            variant="outlined" 
                            margin="normal" 
                            size="medium" 
                            inputProps={{style:{color: "white"}}} />
                        <br/>
                        <InputField 
                            fullWidth={true} 
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            label="Company Name" 
                            variant="outlined" 
                            margin="normal" 
                            size="medium" 
                            inputProps={{style:{color: "white"}}} />
                        <br/>
                        <InputField 
                            fullWidth={true}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} 
                            label="Write your message" 
                            variant="outlined" 
                            margin="normal" s
                            ize="medium" 
                            multiline={true} 
                            inputProps={{style:{color: "white"}}}/>
                        <br/>
                        <br/>
                        <Button 
                            className={classes.button} 
                            variant="outlined" 
                            fullWidth={true} 
                            endIcon={<SendIcon/>} 
                            type="submit"
                            style={{background: loader ? "#ccc" : "none"}}>
                            Contact me
                        </Button>
                    </Box>
                </Grid>            
            </Box>
    )
};

export default Contact;
