import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container } from '@material-ui/core/';
import React from 'react';
import Header from "../components/header"
//import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container } from '@material-ui/core/';
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';


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




const Doggo = props => {

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
            <p>Here are the puppies!</p>
            <Header title= "Fluffy dogs to a adopt"/>
            <Container className ={classes.cardGrid} maxWidth="md">
                <Grid container spacing={5}>
                    {cards.map((card) => (
                        <Grid item key={card.id} xs={12} sm={6} md= '5'>
                            <Card>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={card.picture}
                                    title={card.name}
                                    
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography align="left" variant="h5" component="h2" gutterBottom>
                                        {card.name}
                                    </Typography> 
                                    <Typography align="left">
                                        {card.breed}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
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