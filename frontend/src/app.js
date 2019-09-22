import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';
import Navbar from './navbar';
import SignIn from "./SignIn";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <p>Paddle the Jake River</p>
            </div>

        );
    }
}

export default App;