import { useEffect, useMemo, useState } from "react";
//import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import { useForm, Controller } from 'react-hook-form';
import { TextField } from "@material-ui/core";

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

    return(
        <>
            <form className="" noValidate autoComplete="OFF">
                <div>
                    <Controller name ='name' control={control} setValue={setValue} render={({field}) => (
                        <TextField label='name' fullWidth value={inputData.title} {...field} />
                    )}/>
                </div>
            </form>
        </>
    )
}

export default ViewDog;