import { useEffect, useMemo, useState } from "react";
//import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import { useForm, Controller } from 'react-hook-form';
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

//import { useHistory } from "react-router-dom";
import settings from '../data/settings';

const ViewDog = props => {

    const { id } = props.match.params;

    const [inputData, setInputData] = useState(
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

    //const history = useHistory();

    const { control, reset, setValue } = useForm({defaultValues: inputData});

    useEffect( () => {
        if(id) {
            const getApiData = () => {
                fetch(settings.apidata + '/' + id, {method: 'GET'})

                .then(response => response.json())
                .then(data => loadData(data));
            }
            getApiData();
        }
    }, []);

        const loadData = (data) => {
            setInputData(data);

            reset({
                name: data.name,
                breed: data.breed,
                sex: data.sex,
                age: data.age,
                picture: data.picture,
                favoriteToy: data.favoriteToy,
                story: data.story,
                cognoHazardThreat: data.cognoHazardThreat

            })
        };


        

        //add a super cool google map api
    return(
        <>
            <p>Here is a paticular puppy!</p>
            <form className="" noValidate autoComplete="OFF">
                <div>
                    <Controller name ='name' control={control} setValue={setValue} render={({field}) => (
                        <TextField label='Name' fullWidth value={inputData.title} InputProps={{readOnly: true}} {...field} />
                    )}/>

                    <Controller name ='breed' control={control} setValue={setValue} render={({field}) => (
                        <TextField label='Breed' fullWidth value={inputData.title} InputProps={{readOnly: true}} {...field} />
                    )}/>

                    <Controller name ='sex' control={control} setValue={setValue} render={({field}) => (
                        <TextField label='Sex' fullWidth value={inputData.title} InputProps={{readOnly: true}} {...field} />
                    )}/>

                    <Controller name ='age' control={control} setValue={setValue} render={({field}) => (
                        <TextField label='Age' fullWidth value={inputData.title} InputProps={{readOnly: true}} {...field} />
                    )}/>

                    <Controller name ='picture' control={control} setValue={setValue} render={({field}) => (
                        <TextField label='Picture' fullWidth value={inputData.title} InputProps={{readOnly: true}} {...field} />
                    )}/>

                    <Controller name ='favoriteToy' control={control} setValue={setValue} render={({field}) => (
                        <TextField label='Favorite Toy' fullWidth value={inputData.title} InputProps={{readOnly: true}} {...field} />
                    )}/>

                    <Controller name ='story' control={control} setValue={setValue} render={({field}) => (
                        <TextField label='Story'  multiline={true} fullWidth value={inputData.title} InputProps={{readOnly: true}} {...field} />
                    )}/>

                    <Controller name ='cognoHazardThreat' control={control} setValue={setValue} render={({field}) => (
                        <TextField label='Cognition Hazard Threat' fullWidth value={inputData.title} InputProps={{readOnly: true}} {...field} />
                    )}/>

                </div>
            </form>
        </>
    )
}

export default ViewDog;