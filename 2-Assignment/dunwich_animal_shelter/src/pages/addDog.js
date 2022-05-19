import { Button, TextField, useMediaQuery } from "@material-ui/core";
import { useForm, Controller } from 'react-hook-form';
import React, { useEffect, useState } from "react";
import settings from '../data/settings';
import { useHistory } from "react-router-dom";
import Header from '../components/header'

//const { useEffect } = require("react");


const AddDog = (props) => {

    const matches = useMediaQuery("(min-width:1200px")
    const history = useHistory();

    //grabs the id
    const { id } = props.match.params;

    const [inputData, setInputData ] = useState(
        {
            name: '',
            breed: '',
            sex: '',
            age: '',
            picture: '',
            favoriteToy: '',
            story: '',
            cognoHazardThreat: ''

        }
    );

    const { handleSubmit, control, reset, setValue } = useForm({defaultValues: inputData});

    useEffect( () => {
        if(id) {
            const getApiData = () => {
                fetch(settings.apidata + '/' + id, {method: 'GET'})

                .then(response => response.json())
                .then(data => loadData(data));
            };
            getApiData();
        }
    }, []);

    const loadData = (data) => {
        setInputData(data);


        reset({
            name: data.name,
            breed: data.breed,
            age: data.age,
            sex: data.sex,
            picture: data.picture,
            favoriteToy: data.favoriteToy,
            story: data.story,
            cognoHazardThreat: data.cognoHazardThreat
            
        })
    };

    const onSubmit = data => {
        let method = 'GET';
        let url = "";
        //if id is not found than create
        if (!id)
        {
            method = 'POST';
            url = settings.apidata;

        //if id is found than update
        }else {
            method = 'PUT';
            url = settings.apidata + '/' + id;
        }
        fetch(url,
        {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        )
        .then(response => response.json())
        .then(data => loadData(data))

        //reloads the page
        .then(res => {
            history.push('/admin')
        })
        setInputData(data);
    }

    return(
        <>
            <Header title= "Add a dog to the databank" />
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <Controller name = 'name' control={control} setValue={setValue} render={({field}) => (
                    <TextField label='Name' fullWidth value={inputData.name} {...field} />
                )}/>

                <Controller name = 'breed' control={control} setValue={setValue} render={({field}) => (
                    <TextField label='Breed' fullWidth value={inputData.breed} {...field} />
                )}/>

               <Controller name = 'age' control={control} setValue={setValue} render={({field}) => (
                    <TextField label= 'Age' fullWidth value={inputData.age} {...field} />
                )}/>

                <Controller name = 'sex' control={control} setValue={setValue} render={({field}) => (
                    <TextField label='Sex' fullWidth value={inputData.Sex} {...field} />
                )}/>

                <Controller name = 'picture' control={control} setValue={setValue} render={({field}) => (
                    <TextField label='Picture' multiline={true} fullWidth value={inputData.picture} {...field} />
                )}/>

                <Controller name = 'favoriteToy' control={control} setValue={setValue} render={({field}) => (
                    <TextField label='Favorite Toy' fullWidth value={inputData.favoriteToy} {...field} />
                )}/>

                <Controller name = 'story' control={control} setValue={setValue} render={({field}) => (
                    <TextField label='Story' multiline={true} fullWidth value={inputData.story} {...field} />
                )}/>

                <Controller name = 'cognoHazardThreat' control={control} setValue={setValue} render={({field}) => (
                    <TextField label='Threat Level' fullWidth value={inputData.cognoHazardThreat} {...field} />
                )}/>
                
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>
        </>
    )
}

export default AddDog;