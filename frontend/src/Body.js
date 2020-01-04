import React, {Component} from 'react';
import styled from "styled-components";
import ProCon from "./ProCon";
import {Route} from "react-router-dom";
import FooterBar from "./FooterBar";
import Tools from "./Tools";

const StyledBody = styled.div`
    min-height: 600px;
    background-color: cornsilk;
    font-family: "Trebuchet MS";

`;


export default class Body extends Component {
    render() {
        return (
            <StyledBody>
                <Route path="/tools" component={Tools} />
                <Route path="/games" component={FooterBar} />
            </StyledBody>
        );
    }
}