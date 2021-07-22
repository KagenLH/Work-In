import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { showCreateBookingModal } from '../../../store/modals';
import './BookingBox.css';


export default function BookingBox({ bookings, price }) {
    const [startTime, setStartTime] = useState('');
    const [realStartTime, setRealStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [realEndTime, setRealEndTime] = useState('');
    const [finalPrice, setFinalPrice] = useState(null);
    const [displayHours, setDisplayHours] = useState(null);
    const [displayDays, setDisplayDays] = useState(null);

    const dispatch = useDispatch();

    const calcTotal = () => {
        const startDate = moment(realStartTime);
        const endDate = moment(realEndTime);

        let days = (parseInt(endDate.diff(startDate, 'days')));
        let hours = (parseInt(endDate.subtract(days, 'days').diff(startDate, 'hours')));
        let minutes = parseInt(endDate.subtract(hours, 'hours').diff(startDate, 'minutes'));

        console.log(days, hours, minutes);

        if(hours >= 12) {
            hours -= 12;
            days += 1;

            if(hours >= 12) {
                hours -= 12;
                days += 1;
            }
        }

        console.log(days, hours, minutes);

        setFinalPrice((days * 12 + hours) * price);
        setDisplayDays(days);
        setDisplayHours(hours);
    };
    
    useEffect(() => {
        if(realStartTime && realEndTime) {
            calcTotal();
        }
    }, [realStartTime, realEndTime]);

    const formatDate = (date) => {
        if(!date) {
            return "";
        }
        const dateFragments = date.split("-");
        const [year, month, dayTime] = [...dateFragments];

        const time = dayTime.split('T')[1];
        const day = dayTime.split('T')[0];

        return `${month}/${day}/${year} at ${time}`;
    };

    return (
        <>
            <div className="booking-box__container">
                <div className="booking-box__header">
                    <div className="booking-box__price">
                        <span className="booking-box__price-number">{`$${price}`}</span> / hour
                    </div>
                </div>
                <div className="booking-box__choose-dates">
                    <div className="booking-box__choose-dates-wrapper">
                        <input
                            type="text"
                            onFocus={(e) => e.target.type = 'datetime-local'}
                            onBlur={(e) => {
                                e.target.type = 'text';
                                setStartTime(formatDate(e.target.value))
                            }}
                            name="starttime"
                            value={startTime}
                            onChange={(e) => {
                                setStartTime(e.target.value);
                                setRealStartTime(e.target.value);
                            }}
                            className="booking-box__date-picker"
                            placeholder="Choose a date"
                        />
                        <span className="booking-box__floating-label">
                            Start Time
                        </span>
                    </div>
                    <div className="booking-box__choose-dates-wrapper">
                        <input
                            type="text"
                            onFocus={(e) => e.target.type = 'datetime-local'}
                            onBlur={(e) => {
                                e.target.type = 'text';
                                setEndTime(formatDate(e.target.value))
                            }}
                            name="endtime"
                            value={endTime}
                            onChange={(e) => {
                                setEndTime(e.target.value);
                                setRealEndTime(e.target.value);
                            }}
                            className="booking-box__date-picker"
                            placeholder="Choose a date"
                        />
                        <span className="booking-box__floating-label">
                            End Time
                        </span>
                    </div>
                </div>
                {finalPrice &&
                (<div className="booking-box__price-calculations">
                    <div className="day-by-price-calcs">
                        <div className="day-by-price-calcs-title">
                            {`$${price} x ${displayDays} days (12 hours)`}
                        </div>
                        <div className="day-by-price-calcs-total">
                            {`$${displayDays * 12 * price}`}
                        </div>
                    </div>
                    <div className="day-by-price-calcs">
                        <div className="day-by-price-calcs-title">
                            {`$${price} x ${displayHours} hours`}
                        </div>
                        <div className="day-by-price-calcs-total">
                            {`$${displayHours * price}`}
                        </div>
                    </div>
                    <div className="total-price-display">
                        <div className="total-price-display-title">
                            Total
                        </div>
                        <div className="total-price-display-value">
                            {`$${finalPrice}`}
                        </div>
                    </div>
                </div>)}
                <button
                    className="booking-box__book-button"
                    onClick={() => dispatch(showCreateBookingModal())}
                >
                    Reserve This Listing
                </button>
            </div>
        </>
    )
}