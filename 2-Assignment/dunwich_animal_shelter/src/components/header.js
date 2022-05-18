import { Button, AppBar as MuiAppBar, Toolbar, Typography } from '@material-ui/core/';
import PetsIcon from '@material-ui/icons/Pets'
import React from 'react';
import { useHistory } from "react-router-dom";


//add spacing later
//add button to left side
const Header = props => {
    const {title} = props;
    const history = useHistory();


    return(
        <MuiAppBar>
            <Toolbar>
                <PetsIcon/>
                <Typography variant="h6" component="h2" color="inherit" noWrap>
                    {title}
                </Typography>
                <PetsIcon/>
                <Button color="inherit" onClick={() => {history.push('/')}}>Home</Button>
                <Button color="inherit" onClick={() => {history.push('/admin')}}>Log In</Button>
                
            </Toolbar>
        </MuiAppBar>
    );
};


export default Header;