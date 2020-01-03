import React, { Component } from 'react';
import NavBar from './navbar';
import FooterBar from "./FooterBar";
import Body from "./Body";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Body></Body>
                <FooterBar/>
            </div>

        );
    }
}

export default App;