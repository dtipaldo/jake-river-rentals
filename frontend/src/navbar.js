import React, {Component} from 'react';
import river100 from './assets/river_100x100.png';
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledNavBar = styled.div`
    height: 90px;
    background-color: #CCBF86
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-family: "Trebuchet MS";
`;

const StyledNavBarButton = styled.div`
    width: 200px;
    font-size: 28px;
    padding: 15px 20px;
    border-left: 5px solid #93CC86;
    text-decoration: none;
    color: #000;
`;

const StyledNavBarTitle = styled.div`
    font-size: 28px;
    padding: 20px;
    flex-grow: 2;
    color: #412A0F;

`;

const StyledNavBarIcon = styled.div`
    height: 75px;
    width: 75px;
    background-image: url(${river100});
    background-repeat: no-repeat;
    `;

export default class NavBar extends Component {
    render() {
        return (
            <StyledNavBar>
                <StyledNavBarIcon/>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <StyledNavBarTitle>Jake River Rentals</StyledNavBarTitle>
                </Link>
                {/*<Link to="/games" style={{ textDecoration: 'none' }}>*/}
                {/*    <StyledNavBarButton>Games</StyledNavBarButton>*/}
                {/*</Link>*/}
                <Link to="/tools" style={{ textDecoration: 'none' }}>
                    <StyledNavBarButton>Pros vs Cons</StyledNavBarButton>
                </Link>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <StyledNavBarButton>Login</StyledNavBarButton>
                </Link>

            </StyledNavBar>
        );
    }
}