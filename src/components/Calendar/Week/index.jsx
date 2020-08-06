import React from 'react';
import PropTypes from 'prop-types';
import styles from './Week.module.scss';
import * as DateFns from 'date-fns';
import CalendarDate from "./../CalendarDate";

const Week = props => {
    const {date} = props;

    const getWeekDays = () => {
        const weekDays = [];
        for (let i = 0; i < 7; i++) {
            const newDate = DateFns.add(date, {days: i,});
            weekDays.push(<td key={newDate}><CalendarDate date={newDate}/></td>);
        }
        return weekDays;
    }

    return (
        <tr>
            {getWeekDays()}
        </tr>
    );
};

Week.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
};

export default Week;