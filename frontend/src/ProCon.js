import React, {Fragment} from 'react';
import styled from "styled-components";
import { Slider } from '@material-ui/core';

const StyledProCon = styled.div`
    width: 50%;
    margin: auto;
    background-color: cornsilk;
    display: flex;
    flex-direction: column;
    font-family: "Trebuchet MS";
    align-items: center;
    justify-items: center;
`;

const StyledTitle = styled.div`
  font-size: 28px;
  text-align: center;
  color: red;
  margin-bottom: 20px;
`;

const StyledSlider = styled.div`
  width: 500px;
  height: 70px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const StyledSliderTitle = styled.div`
  font-size: 18px;
`;

const StyledProConInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
  width: inherit;
  text-align: center;
  font-size: 18px;
`;

const StyledTotal = styled.div`
  color: red;
  font-size: 48px;
  margin: auto;
  margin-top: 20px;
`;

const MIN = 0;
const MAX = 10;
const AVG = (MAX + MIN) / 2;

export default class ProCon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topics: {},
            newTopic: '',
        };

        this.handleSliderChange = this.handleSliderChange.bind(this)
        this.calculateProCon = this.calculateProCon.bind(this)
        this.renderAnswerFromScore = this.renderAnswerFromScore.bind(this)
        this.addNewTopic = this.addNewTopic.bind(this)
        this.removeTopic = this.removeTopic.bind(this)
        this.activeTopics = this.activeTopics.bind(this)
    }

    handleSliderChange(topic, value){
        this.setState((state => state.topics[topic].score = value));
    }

    async removeTopic(topic) {
        this.setState((state => state.topics[topic].active = false));
    }

    calculateProCon() {
        if (this.activeTopics().length === 0) {
            return -1
        }

        const values = this.activeTopics().map(topic => this.state.topics[topic].score);
        const sum = values.reduce((previous, current) => current += previous)
        return sum/values.length
    }

    activeTopics(){
        return Object.keys(this.state.topics)
            .filter((topic) => !!this.state.topics[topic].active);
    }

    renderAnswerFromScore(score){
        if (score === -1){
            return "No Data"
        }

        if (score > AVG) {
            return "Do it!";
        } else {
           return " Not Today"
        }
    }

    updateNewTopic(value) {
        this.setState((state => state.newTopic = value));
    }


    async addNewTopic() {
        this.setState((state => state.topics[this.state.newTopic] = {
            active: true,
            weight: 1,
            score: AVG,
        }
        ));
        this.setState((state => state.newTopic = ''));
    }

    render() {
        return(
            <StyledProCon>
                <StyledTitle>
                    Pros vs Cons
                </StyledTitle>
                <Fragment>
                {this.activeTopics()
                    .map((topic, i) =>
                    <StyledSlider
                        key={`container${i}`}
                    >
                        <Slider
                        key={`slider${i}`}
                        min={MIN}
                        max={MAX}
                        // track={false}
                        defaultValue={this.state.topics[topic].score}
                        onChangeCommitted={(event, value) => this.handleSliderChange(topic, value)}
                        />
                        <StyledSliderTitle
                            key={`t${i}`}
                        >{topic}
                        </StyledSliderTitle>
                        <button
                            onClick={async (event) => this.removeTopic(topic)}
                        >
                        Delete
                        </button>
                    </StyledSlider>
                    )}
                </Fragment>
                <StyledProConInput
                    type="text"
                    placeholder="New Pro/Con"
                    value={this.state.newTopic}
                    onChange={event => this.updateNewTopic(event.target.value)}
                    onKeyPress={(async (event) => {
                        if (event.key === 'Enter') {
                            await this.addNewTopic()
                        }
                    })}
                />
                <StyledTotal>
                    {this.renderAnswerFromScore(this.calculateProCon())}
                </StyledTotal>
            </StyledProCon>
        )
    }
}