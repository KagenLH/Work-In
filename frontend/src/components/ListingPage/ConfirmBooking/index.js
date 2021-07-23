import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';

import './ConfirmBooking.css';
import { csrfFetch } from '../../../store/csrf';
import { closeCreateBookingModal } from '../../../store/modals';
import { formatDate } from '../../../utils/date';

export default function ConfirmBooking({ show, image, name }) {
    const dispatch = useDispatch();
    const listingId = useParams().id;

    const bookingInfo = useSelector(state => state.booking);

    if(!show) {
        return null;
    }

    const createBooking = async () => {
        const { start, end } = bookingInfo;

        const res = await csrfFetch('/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                listingId,
                startTime: start,
                endTime: end,
            })
        });

        if(res.ok) {
            const booking = await res.json();
            console.log(booking);
            dispatch(closeCreateBookingModal());
        } else {
            console.log("Something went wrong.");
        }
    };

    return (
        <div className="confirm-booking__container">
            <div className="confirm-booking__content">
                <div className="confirm-booking__header">
                    <button
                        className="confirm-booking__close-button"
                        onClick={() => dispatch(closeCreateBookingModal())}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="confirm-booking__title">
                        Confirm your booking
                    </div>
                </div>
                <div className="confirm-booking__body">
                    <div className="confirm-booking__listing-name">
                        {name}
                    </div>
                    <img
                        src={image}
                        className="confirm-booking__listing-image"
                    />
                    <div className="confirm-booking__booking-info">
                        <div className="confirm-booking__booking-dates">
                            <div className="confirm-booking__booking-start">
                                {`Start time: ${formatDate(bookingInfo.start)}`}
                            </div>
                            <div className="confirm-booking__booking-end">
                                {`End time: ${formatDate(bookingInfo.end)}`}
                            </div>
                        </div>
                        <div className="confirm-booking__days-hours">
                            {`${bookingInfo.days} days and ${bookingInfo.hours} hours`}
                        </div>
                        <div className="confirm-booking__total">
                            <div className="confirm-booking__total-title">
                                Total:
                            </div>
                            <div className="confirm-booking__total-value">
                                {`$${bookingInfo.total}`}
                            </div>
                        </div>
                    </div>
                    <button
                        className="confirm-booking__submit"
                        onClick={createBooking}
                    >
                        Reserve Listing
                    </button>
                </div>
            </div>
        </div>
    );
}