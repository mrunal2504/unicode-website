import React, { Component } from 'react';
import {Toolbar,IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import unicode from '../images/UNICODE_LOGO.PNG';

class tabView extends Component {
    state = { 
        
     }
    render() { 
        return ( 
            <Toolbar>
                <IconButton style={{marginLeft: 12}} >
                    <MenuIcon />
                </IconButton>
                <img src="http://bagwesagar6699.pythonanywhere.com//static/frontend/55dddef0a88a68002e8b6ee957ee02c2.PNG" alt="logo" width="210px" style={{marginLeft: "8%"}} />
            </Toolbar>
         );
    }
}
 
export default tabView;