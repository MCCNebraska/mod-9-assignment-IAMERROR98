
import React, { useState, useEffect } from "react";
//import AppBar from "../components/AppBar";
import Header from "../components/header";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import settings from "../data/settings";
import { DataGrid } from '@material-ui/data-grid';
//import { useNavigate } from "react-router-dom";

const Admin = () => {
    const history = useHistory();

    const[rows, setRows] = useState([]);

    useEffect( () => {

        getApiData();
    }, []);

    //fetches the json data
    const getApiData = () => {
        fetch(settings.apidata, {method: "GET"})
            .then(responce => responce.json())
            .then(data => loadData(data));
    }
    

    const loadData = (data) => {
        setRows(data);
    }


    const getId = (params) => {
        return `${params.id}`;
    };

    const handleDelete = (e) =>{
        const itemId = e.currentTarget.parentElement.getAttribute('data-value');
        console.log('delete item: ' + itemId);
        fetch(settings.apidata + "/" + itemId, {method: "DELETE"})
            //this refreshes the page to show deletion
            .then(responce => responce.json())
            .then(res => {
                getApiData();
            });

        //history.push("/article/delete/" + itemId);
    };

    const handleEdit = (e) =>{
        const itemId = e.currentTarget.parentElement.getAttribute('data-value');

        history.push("/create/edit/" + itemId);
    };

    const columns = [
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'breed', headerName: 'Breed', width: 150},
        {field: 'sex', headerName: 'Sex', width: 150},
        {field: 'Edit', headerName: 'Edit', width: 150, valueGetter: getId, renderCell: (params) => (
            <>
                <Button variant="contained" color="primary" size="small" onClick={handleEdit}>Edit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={handleDelete}>Delete</Button>
            </>
        )}
    ];

    const handlerCreate = () => {
        history.push("/adddog/add")
    }
    //center this
    return(
        <>
            <Header title="Overseer Controll"/>
            <div style={{ height: 700, width: '40%'}}>
                <DataGrid rows={rows} columns={columns} pageSize={6} checkboxSelection/>
            </div> 
            <Button variant="contained" color="primary" onClick={handlerCreate}>
                Create a new article
            </Button>    
            
        </>
    )
};

export default Admin;