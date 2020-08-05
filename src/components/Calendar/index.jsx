import React, {Component} from 'react';
import styles from './Calendar.module.scss';
import Month from "./Month";
import CalendarDate from './CalendarDate';

class Calendar extends Component {
    render() {
        return (
            <article>
                <div>
                    <div>Friday</div>
                    <CalendarDate date={1}></CalendarDate>
                </div>
                <div>
                    <Month/>
                </div>
            </article>
        );
    }
}

export default Calendar;