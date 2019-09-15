import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <span>Jake River Rentals</span>
                <Tabs>
                    <Tab label="About" />
                    <Tab label="Rentals" />
                    <Tab label="Contact" />
                </Tabs>
            </AppBar>
        </div>
    )
}
export default NavBar;