import React, {Component} from 'react';
import styled from "styled-components";

const StyledFooterBar = styled.div`
    height: 30px;
    font-size: 10px;
    background-color: #CCBF86;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: "Trebuchet MS";
`;


export default class FooterBar extends Component {
    render() {
        return (
            <StyledFooterBar>
                Est: January 2020
            </StyledFooterBar>
        );
    }
}