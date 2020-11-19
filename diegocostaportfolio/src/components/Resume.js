import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(theme =>({

    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid lightblue",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid lightblue",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content:"''",
            position: "absolute",
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "blue blue transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "lightblue"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent blue blue"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "lightblue",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")] :{
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            }
        }
    },
    heading: {
        color: "white",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}));

const Resume = () => {

    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Box component="header">
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working/Learning Experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography variant="h2" color="initial" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2017
                    </Typography>
                    <Box component= "div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Full Stack Developer
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "lightblue"}}>
                            <i>Digital House</i> (Argentinian School of Programming)
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "lightblue"}}>
                            First learning about the structure, styling and backend of a webpage with PHP, HTML5, CSS3, Sass, Bootstrap, Laravel, Git/github, Javascript and React.js.
                        </Typography>

                        <br/>
                        <br/>

                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Full Stack Developer
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "lightblue"}}>
                            <i>Mejorando.la</i> (Platzi)
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "lightblue"}}>
                            Improving Bootstrap, Laravel, Css Animations and JavaScript.
                        </Typography>
                    </Box>
                   

                    <Typography variant="h2" color="initial" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019
                    </Typography>
                    <Box component= "div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Complete React Developer in 2019 (w/ Redux, Hooks, GraphQL)
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "lightblue"}}>
                            <i>Udemy.com</i>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "lightblue"}}>
                            React Hooks, Context API, Suspense, React Lazy, GraphQL, Redux, Redux Thunk and Redux Saga
                            Firebase, React Design Patterns, CSS in JS with styled-components, React Router, Progressive Web Apps
                            Handling online payments with Stripe API
                            Using the latest ES6/ES7/ES8/ES9 JavaScript to write clean code.
                        </Typography>

                        <br/>
                        <br/>

                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            The Complete Web Development in 2019: Zero to Mastery
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "lightblue"}}>
                            <i>Udemy.com</i>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "lightblue"}}>
                            HTML, CSS (3, flexbox, css grid), Bootstrap, Tachyons),
                            Javascript (React JS, Redux, Babel).
                            Git/Github,
                            NPM,
                            HTTP/JSON/AJAX,
                            APIs,
                            Node.Js / Express.Js.
                        </Typography>
                    </Box>

                    <Typography variant="h2" color="initial" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020
                    </Typography>
                    <Box component= "div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            The Complete 2020 PHP Full Stack Development Bootcamp.
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "lightblue"}}>
                            <i>Udemy.com</i>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "lightblue"}}>
                            HTML , CSS , JAVASCRIPT , Bootstrap , PHP , MySQL , WordPress , OOP to building websites.
                        </Typography>

                        <br/>
                        <br/>

                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            React.js and Material UI.
                        </Typography>
                        <Typography variant="body1" align="center" style={{color: "lightblue"}}>
                            <i>YouTube Tutorials</i>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "lightblue"}}>
                            Building Apps and WebSites with React.js, react hooks, npm react packages and Material UI.
                        </Typography>
                    </Box>
                 </Box>
            </Box>            
        </>
    )
}

export default Resume
