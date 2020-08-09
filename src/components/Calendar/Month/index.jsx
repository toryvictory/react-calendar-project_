import React from 'react';
import PropTypes from 'prop-types';
import styles from './Month.module.scss';
import Week from "./Week";

const Month = props => {
    const {children} = props;


    return (
        <table>
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
            {children}
            </tbody>
        </table>
    );
};

Month.propTypes = {
    children: PropTypes.arrayOf(PropTypes.instanceOf(Week)).isRequired,
};

export default Month;