import React from 'react';
import PropTypes from 'prop-types';
import styles from './Week.module.scss';
import CalendarDate from "../../CalendarDate";

const Week = props => {
    const {children} = props;
    return (
        <tr>
            {children}
        </tr>
    );
};

Week.propTypes = {
    children: PropTypes.arrayOf(PropTypes.instanceOf(CalendarDate)).isRequired,
};

export default Week;