import React, {Component} from 'react';
import styled from "styled-components";
import ProCon from "./ProCon";
import {Link, Route} from "react-router-dom";
import UnderConstruction from "./UnderConstruction";
import CashFlow from "./CashFlow";

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
                    <Link to="/tools/cashflow" style={{ textDecoration: 'none' }}>
                        <StyledSideBarButton>Cash Flow</StyledSideBarButton>
                    </Link>
                    <Link to="/tools/nextnexttool" style={{ textDecoration: 'none' }}>
                        <StyledSideBarButton>Next Next Tool</StyledSideBarButton>
                    </Link>
                </StyledSideBar>
                <Route path="/tools/procon" component={ProCon} />
                <Route path="/tools/cashflow" component={CashFlow} />
                <Route path="/tools/nextnexttool" component={UnderConstruction} />
            </StyledTools>
        );
    }
}