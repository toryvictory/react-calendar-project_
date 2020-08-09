import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalendarDate.module.scss';
import * as DateFns from 'date-fns';
import ClassNames from 'classnames';

const CalendarDate = props => {
    const {date, monthDate, today} = props;

    const dateClassName = ClassNames(styles.date, {
        [styles.otherMonthDate]: !DateFns.isSameMonth(date, monthDate),
        [styles.currentDate]: DateFns.isSameDay(date, today),
    });

    return (
        <td className={dateClassName}>{DateFns.format(date, 'd')}</td>
    );
};

CalendarDate.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    monthDate: PropTypes.instanceOf(Date).isRequired,
    today: PropTypes.instanceOf(Date),
};

CalendarDate.defaultProps = {
    today: new Date(),
};

export default CalendarDate;