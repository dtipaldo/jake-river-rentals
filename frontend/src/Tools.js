import React, {Component} from 'react';
import styled from "styled-components";
import ProCon from "./ProCon";
import {Link, Route} from "react-router-dom";
import FooterBar from "./FooterBar";
import UnderConstruction from "./UnderConstruction";

const StyledTools = styled.div`
  display: flex;
`;

const StyledSideBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    background-color: transparent;
`;

const StyledSideBarButton = styled.button`
    width: 150px;
    margin:2px 0;
    border-radius: 4px;
    background-color: darkolivegreen;
    font-family: "Trebuchet MS";
    font-size: 16px;
`;


export default class Tools extends Component {
    render() {
        return (
            <StyledTools>
                <StyledSideBar>
                    <Link to="/tools/procon" style={{ textDecoration: 'none' }}>
                        <StyledSideBarButton>Pro Vs Con</StyledSideBarButton>
                    </Link>
                    <Link to="/tools/nexttool" style={{ textDecoration: 'none' }}>
                        <StyledSideBarButton>Next Tool</StyledSideBarButton>
                    </Link>
                    <Link to="/tools/nextnexttool" style={{ textDecoration: 'none' }}>
                        <StyledSideBarButton>Next Next Tool</StyledSideBarButton>
                    </Link>
                </StyledSideBar>
                <Route path="/tools/procon" component={ProCon} />
                <Route path="/tools/nexttool" component={UnderConstruction} />
                <Route path="/tools/nextnexttool" component={UnderConstruction} />
            </StyledTools>
        );
    }
}