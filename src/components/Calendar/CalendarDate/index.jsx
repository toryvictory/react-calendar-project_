import React from 'react';
import PropTypes from 'prop-types';
import styles from './CalendarDate.module.scss';
import * as DateFns from 'date-fns';

const CalendarDate = props => {
    const {date} = props;

    return (
        <span>
            {DateFns.format(date, 'dd')}
        </span>
    );
};

CalendarDate.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarDate;