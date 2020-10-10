import React from "react";
import moment from 'moment'
import styled from "styled-components";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {green} from "@material-ui/core/colors";
const dtmbData = require('./cashFlow.json');

const StyledCashFlow = styled.div`
    width: 100%;
    margin: auto;
    background-color: cornsilk;
    display: flex;
    flex-direction: column;
    font-family: "Trebuchet MS";
    align-items: center;
    justify-items: center;
`;

const options = {
    chart: {
        type: 'line',
        width: '1000',
        zoomType: 'xy'
    },
    title: {
        text: 'DTMB Cash'
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%b %Y',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Available Cash'
        },
        min: 0
    },
    plotOptions: {
        series: {
            lineWidth: 7,
            color: 'green'
        }
    },
    series: [{
        data: [],
        pointStart: Date.UTC(2010, 0, 1),
        pointInterval: 24 * 3600 * 1000 // one day
    }]
};

export default class CashFlow extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            expenses: dtmbData.expenses,
            startDate: moment(dtmbData.dateRangeStart, 'YYYY-MM-DD'),
            endDate: moment(dtmbData.dateRangeEnd, 'YYYY-MM-DD'),
            startingCash: parseInt(dtmbData.startingCash)
        };
    }

    render() {
        const dayByDayData = this.processExpensesAndIncome();
        this.updateHighChartsOptions(dayByDayData);
        return (
            <StyledCashFlow>
                <HighchartsReact highcharts={Highcharts} options={options} />
                <h3>{this.state.startDate.format('MMM YYYY')}
                 - {this.state.endDate.format('MMM YYYY')}</h3>
                {this.state.expenses.map((x, i) =>
                    <p key={i}>{x.name}: {x.value} repeats {x.repeat.toLowerCase()}</p>
                )}
            </StyledCashFlow>
        )
    }

    updateHighChartsOptions(dayByDayData) {
        const currentDay = moment(dtmbData.dateRangeStart, 'YYYY-MM-DD');
        options.series[0].pointStart = moment(dtmbData.dateRangeStart, 'YYYY-MM-DD');
        options.series[0].data.push(this.state.startingCash);
        while (currentDay < this.state.endDate){
            let dayKey = `_${currentDay.format('YYYY-MM-DD')}`;
            if (dayByDayData[dayKey]){
                options.series[0].data.push(
                    options.series[0].data[options.series[0].data.length - 1] + dayByDayData[dayKey]);
            } else {
                options.series[0].data.push(
                    options.series[0].data[options.series[0].data.length - 1])
            }
            currentDay.add(1, 'days');
        }
    }

    processExpensesAndIncome() {
        const processedData = {};

        this.state.expenses.forEach(expense => {
            let expenseDate = moment(expense.startDate, 'YYYY-MM-DD');
            const expenseEndDate = moment(expense.endDate, 'YYYY-MM-DD');

            while (expenseDate
            && expenseDate <= expenseEndDate) {
                const expenseDateKey = expenseDate.format('_YYYY-MM-DD');
                if (!processedData[expenseDateKey]){
                    processedData[expenseDateKey] = 0;
                }
                processedData[expenseDateKey] += parseInt(expense.value);
                // console.log(expense.name, expenseDateKey, expense.value);
                expenseDate = this.getNextExpenseDate(expenseDate, expense['repeat'])
            }
        });

        return processedData;
    }

    getNextExpenseDate(expenseDate, repeatType) {
        switch (repeatType) {
            case 'MONTHLY':
                return expenseDate.add('1', 'months');
            case 'QUARTERLY':
                return expenseDate.add('3', 'months');
            case 'BI-WEEKLY':
                return expenseDate.add('2', 'weeks');
            case 'SEMI-MONTHLY':
                if (expenseDate.date() === 15){
                    return expenseDate.endOf('month');
                } else {
                    expenseDate.add(1, 'month');
                    return expenseDate.set('date', 15);
                }
            case 'NONE':
                return null;
            default:
                return null
        }
    }
}