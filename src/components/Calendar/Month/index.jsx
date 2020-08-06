import React from 'react';
import PropTypes from 'prop-types';
import styles from './Month.module.scss';
import Week from "../Week";
import * as DateFns from 'date-fns';

const Month = props => {
    const {date} = props;

    const getWeeks = () => {
        const weeks = [];
        const weekStartDays = DateFns.eachWeekOfInterval({
            start: DateFns.startOfMonth(date),
            end: DateFns.endOfMonth(date),
        })
        for (const start of weekStartDays) {
            weeks.push(<Week date={start} key={start}/>);
        }

        return weeks;
    };

    return (
        <table>
            <caption>{DateFns.format(date, 'MMMM yyyy')}</caption>
            <thead>
            <tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
            </tr>
            </thead>
            <tbody>
            {getWeeks()}
            </tbody>
        </table>
    );
};

Month.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
}


export default Month;