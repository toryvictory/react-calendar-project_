import React from 'react';
import PropTypes from 'prop-types';
import styles from './Month.module.scss';
import Week from "../Week";

const Month = props => {
    return (
        <table>
            <caption>July 2020</caption>
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
                <Week/>
                <Week/>
                <Week/>
                <Week/>
                <Week/>
            </tbody>
        </table>
    );
};

Month.propTypes = {

};

export default Month;