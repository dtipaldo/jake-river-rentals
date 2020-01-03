import React, {Component} from 'react';
import styled from "styled-components";

const StyledBody = styled.div`
    min-height: 600px;
    background-color: cornsilk;
`;


export default class Body extends Component {
    render() {
        return (
            <StyledBody>
                Paddle the Jake River
            </StyledBody>
        );
    }
}