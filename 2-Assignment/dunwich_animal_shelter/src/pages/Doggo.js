import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container } from '@material-ui/core/';
import React from 'react';
import Header from "../components/header"
//import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container } from '@material-ui/core/';
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

//change later to fit preferences
const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },

    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
    cardMedia: {
        paddingTop: '55%',
    },
    cardContent: {
        flexGrow: 1,
    },
}));




const Doggo = () => {


    const history = useHistory();

    const classes = useStyles();

    const[cards, setCards] = useState([]);

    useEffect( () => {
        getApiData();
    }, []);

    const getApiData = () => {

        fetch('http://localhost:3001/Dogs', {method: "GET"})
            .then(responce => responce.json())
            .then(data => loadData(data));
    };

    const loadData = (data) => {
        setCards(data);
    };

    return (
        <>
            <h1>Here are the puppies!</h1>
            <h3>Advisory Notice!</h3>
            <p>Do to CDC guidlines, all prospective adopters must take a cognitive resistance test.</p>
            <p>Any attempt to circumvent the test or to house a dog that does not fit your cognitive level will result in felony charges.</p>


            <Header title= "Dunwich Animal Hospital"/>
            <Container className ={classes.cardGrid} maxWidth="md">
                <Grid container spacing={9}>
                    {cards.map((card) => (
                        <Grid item key={card.id} xs={12} sm={7} md= '6'>
                            <Card>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={card.picture}
                                    title={card.name}
                                    
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography align="center" variant="h5" component="h2" gutterBottom>
                                        {card.name}
                                    </Typography> 
                                    <Typography align="center">
                                        {card.breed}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <>
                                        <Button size="small" color="primary" onClick={() => {history.push("/view/" + card.id)}}>
                                            Learn More
                                        </Button>
                                    </>
                                </CardActions>
                             </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            
        </>
    );
};

export default Doggo;