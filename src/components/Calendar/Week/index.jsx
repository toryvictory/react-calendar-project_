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
            if (!DateFns.isThisMonth(newDate)) {
                weekDays.push(<td key={newDate}><CalendarDate date={newDate} isCurrentMonth={false}/></td>);
            } else if(DateFns.isToday(newDate)) {
                weekDays.push(<td key={newDate}><CalendarDate date={newDate} isCurrentDay={true}/></td>);
            } else {

            weekDays.push(<td key={newDate}><CalendarDate date={newDate}/></td>);
        }
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