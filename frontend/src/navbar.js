import React, {Component} from 'react';
import river100 from './assets/river_100x100.png';
import styled from "styled-components";

// const styles = {
//     root: {
//         flexGrow: 1,
//     },
//     title: {
//         flexGrow: 1,
//     },
//     navBarIcon: {
//         height: '50px',
//         width: '50px',
//     },
// };
const StyledNavBar = styled.div`
    height: 120px;
    background-color: #CCBF86
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const StyledNavBarButton = styled.div`
    width: 200px;
    font-size: 28px;
    padding: 30px 20px;
    border-left: 5px solid #93CC86;
`;

const StyledNavBarTitle = styled.div`
    font-size: 28px;
    padding: 20px;
    flex-grow: 2;
`;

const StyledNavBarIcon = styled.div`
    height: 100px;
    width: 100px;
    background-image: url(${river100});
    background-repeat: no-repeat;
    `;

export default class NavBar extends Component {
    render() {
        return (
            <StyledNavBar>
                <StyledNavBarIcon/>
                <StyledNavBarTitle>Jake River Rentals</StyledNavBarTitle>
                <StyledNavBarButton>Games</StyledNavBarButton>
                <StyledNavBarButton>Login</StyledNavBarButton>
            </StyledNavBar>
        );
    }
}