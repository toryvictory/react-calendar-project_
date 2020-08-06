import React, {Component} from 'react';
import styles from './Calendar.module.scss';
import Month from "./Month";
import CalendarDate from './CalendarDate';
import * as DateFns from 'date-fns';

class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentDate: new Date(),
        }
    }


    render() {
        const {currentDate} = this.state;
        return (
            <article>
                <div>
                    <div>{DateFns.format(currentDate,'EEEE')}</div>
                    <CalendarDate date={currentDate}/>
                </div>
                <div>
                    <Month date={currentDate}/>
                </div>
            </article>
        );
    }
}

export default Calendar;