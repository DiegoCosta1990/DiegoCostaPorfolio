import React from 'react';
import Navbar from './Navbar';
import { 
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.JPG';
import project3 from '../images/project3.JPG';
import project4 from '../images/project4.JPG';


const useStyles =  makeStyles({
    mainContainer: {
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto",
        "&:hover": {
            boxShadow: "1px 0px 53px 4px rgba(9,92,121,1)"
        },
    }
});

const Portfolio = () => {

    const classes = useStyles();

    return (
        <Box component= "div" className={classes.mainContainer}>
            <Navbar />  
            <Grid container justify="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="proyect1" height="140" image={ project1 }/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" color="initial">
                                    Front End <i>Netflix Clone</i>
                                </Typography>
                                <Typography variant="body2" color="textSecundary" component="p">
                                    A front end example of a Netflix clone built with React.js, API, NPM React Packages, axios and deployed Firebase.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href="https://netflix-clone-d8a63.web.app/">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>                    
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="proyect2" height="140" image={ project2 }/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" color="initial">
                                    <i>Movie Finder Proyect</i>
                                </Typography>
                                <Typography variant="body2" color="textSecundary" component="p">
                                    A Movie Finder App built with React.js, using the Imdb API and deployed with surge.sh.
                                    You can find and filter your favorite movie and see the data bring thanks to Imdb.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href="http://diegocosta-search-movie.surge.sh/">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>                    
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="proyect3" height="140" image={ project3 }/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" color="initial">
                                    <i>React.js / Material UI Simple Website</i>
                                </Typography>
                                <Typography variant="body2" color="textSecundary" component="p">
                                    Simple Website with React.js and Material UI from scratch, learning some MUI basis and some Css decorations.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href="http://diegocosta-react-material-ui.surge.sh/">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>                    
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="proyect1" height="140" image={ project4 }/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" color="initial">
                                    MERN Full Stack <i>Tinder Clone</i>
                                </Typography>
                                <Typography variant="body2" color="textSecundary" component="p">
                                    A MERN Full Stack Tinder Clone with the frontend deployed in Firebase and the backend deployed in Heroku.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href="https://tinderclone-ef528.web.app/">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>                    
                </Grid>
            </Grid>         
        </Box>
    )
}

export default Portfolio;
