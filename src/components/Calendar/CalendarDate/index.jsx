import React from 'react';
import PropTypes, {checkPropTypes} from 'prop-types';
import styles from './CalendarDate.module.scss';

const CalendarDate = props => {
    const {date} = props;
    return (
        <span>
            {date}
        </span>
    );
};

CalendarDate.propTypes = {
    date: PropTypes.number.isRequired,
};

export default CalendarDate;