import React, {Component} from 'react';
import styles from './Calendar.module.scss';
import Month from "./Month";
import Week from "./Month/Week";
import CalendarDate from './CalendarDate';
import * as DateFns from 'date-fns';
import PropTypes from 'prop-types';

class Calendar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        }
    }

    goNext = () => {
        const {date} = this.state;

        this.setState({
            date: DateFns.addMonths(date, 1),
        });
    };

    goPrev = () => {
        const {date} = this.state;
        this.setState({
            date: DateFns.addMonths(date, - 1),
        });
    };

    render() {
        const {date} = this.state;
        const {today} = this.props;
        return <article className={styles.container}>
            <section className={styles.calendarDatePage}>
                <div className={styles.dayOfWeek}>{DateFns.format(today,'EEEE')}</div>
                <div className={styles.date}>{DateFns.format(today,'d')}</div>
            </section>
            <section>
                <div className={styles.monthHeader}>
                    <button onClick={this.goPrev}>{'<<'}</button>
                    <div>{DateFns.format(date,'MMMM Y')}</div>
                    <button onClick={this.goNext}>{'>>'}</button>
                </div>
                <Month>
                    {
                        DateFns.eachWeekOfInterval({
                            start: DateFns.startOfMonth(date),
                            end: DateFns.endOfMonth(date),
                        }).map(week =>
                            <Week key={DateFns.format(week, 'Y-w')}>
                                <CalendarDate date={week} monthDate={date} today={today}/>
                                <CalendarDate date={DateFns.addDays(week, 1)} monthDate={date} today={today}/>
                                <CalendarDate date={DateFns.addDays(week, 2)} monthDate={date} today={today}/>
                                <CalendarDate date={DateFns.addDays(week, 3)} monthDate={date} today={today}/>
                                <CalendarDate date={DateFns.addDays(week, 4)} monthDate={date} today={today}/>
                                <CalendarDate date={DateFns.addDays(week, 5)} monthDate={date} today={today}/>
                                <CalendarDate date={DateFns.addDays(week, 6)} monthDate={date} today={today}/>
                            </Week>
                        )
                    }
                </Month>
            </section>
        </article>;
    }
}

Calendar.propTypes = {
    today: PropTypes.instanceOf(Date),
}

Calendar.defaultProps = {
    today: new Date(),
}

export default Calendar;