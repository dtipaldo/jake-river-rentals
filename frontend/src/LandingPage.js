import React from 'react';
import styled from "styled-components";
import {isEmpty} from 'lodash';

const StyledLandingPage = styled.div`
`;

const StyledAlert = styled.div`
  font-family: "Trebuchet MS";
  background-color: red;
  color: white;
  text-align: center;
`;

const StyledTitle = styled.div`
  font-family: "Trebuchet MS";
  font-size: 36px;
  text-align: center ;
`;

const StyledSubTitle = styled.div`
  font-family: "Trebuchet MS";
  font-size: 20px;
  text-align: center ;
  color: grey;
`;

const StyledWelcomeNote = styled.div`
  font-family: "Trebuchet MS";
`;

const ALERT_MESSAGE = ''; // Will not display Alert if blank

export default function LandingPage(){
    return (
        <StyledLandingPage>
            {!isEmpty(ALERT_MESSAGE) &&
                <StyledAlert>{ALERT_MESSAGE}</StyledAlert>
            }
            <StyledTitle>Com'on down the Jake River</StyledTitle>
            <StyledSubTitle>Fun for Everyone</StyledSubTitle>
            <StyledWelcomeNote>
                The Jake River has been home to platypus for hundreds of years due to it's playful rapids
            </StyledWelcomeNote>
        </StyledLandingPage>
    );
}