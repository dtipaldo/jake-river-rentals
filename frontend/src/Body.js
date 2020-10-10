import React, {Component} from 'react';
import styled from "styled-components";
import {Route} from "react-router-dom";
import Tools from "./Tools";
import UnderConstruction from "./UnderConstruction";
import LandingPage from "./LandingPage";

const StyledBody = styled.div`
    min-height: 600px;
    background-color: cornsilk;
    font-family: "Trebuchet MS";

`;


export default class Body extends Component {
    render() {
        return (
            <StyledBody>
                <Route path="/" exact={true} component={LandingPage} />
                <Route path="/tools" component={Tools} />
                <Route path="/games" component={UnderConstruction} />
            </StyledBody>
        );
    }
}