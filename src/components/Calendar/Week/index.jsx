import React from 'react';
import PropTypes from 'prop-types';
import styles from './Week.module.scss';
import Date from './../CalendarDate';

const Week = props => {
    return (
        <tr>
            <td><Date date={1}/></td>
            <td><Date date={2}/></td>
            <td><Date date={3}/></td>
            <td><Date date={4}/></td>
            <td><Date date={5}/></td>
            <td><Date date={6}/></td>
            <td><Date date={7}/></td>
        </tr>
    );
};

Week.propTypes = {

};

export default Week;