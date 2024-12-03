import { AppBar as MuiAppBar, Toolbar, Typography } from '@material-ui/core/';
import PetsIcon from '@material-ui/icons/Pets'
import React from 'react';

//add spacing later

const Header = props => {
    const {title} = props;

    return(
        <MuiAppBar>
            <Toolbar>
                <PetsIcon/>
                <Typography variant="h6" component="h2" color="inherit" noWrap>
                    {title}
                </Typography>
                <PetsIcon/>
            </Toolbar>
        </MuiAppBar>
    );
};


export default Header;