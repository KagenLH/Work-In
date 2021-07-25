import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';

import './ConfirmBooking.css';
import { addUserBooking, removeUserBooking } from '../../../store/userBookings';
import { csrfFetch } from '../../../store/csrf';
import { closeCreateBookingModal } from '../../../store/modals';
import { formatDate } from '../../../utils/date';

export default function ConfirmBooking({ show, image, name, context, id }) {
    const dispatch = useDispatch();
    const history = useHistory();

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
            dispatch(addUserBooking(booking));
            dispatch(closeCreateBookingModal());
        } else {
            console.log("Something went wrong.");
        }
    };

    const deleteBooking = async () => {
        const res = await csrfFetch(`/api/bookings/${id}`, {
            method: 'DELETE',
        });

        if(res.ok) {
            history.push('/listings');
            dispatch(removeUserBooking(id));
            dispatch(closeCreateBookingModal());
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
                        {context === "post" ? 'Confirm your booking' : 'Confirm booking cancelation'}
                    </div>
                </div>
                <div className="confirm-booking__body">
                    <div className="confirm-booking__listing-name">
                        {name}
                    </div>
                    <img
                        src={image}
                        alt="\A"
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
                            {context === "post" && `${bookingInfo.days} days and ${bookingInfo.hours} hours`}
                        </div>
                        <div className="confirm-booking__total">
                            <div className="confirm-booking__total-title">
                                {context === "post" && 'Total: '}
                            </div>
                            <div className="confirm-booking__total-value">
                                {context === "post" && `$${bookingInfo.total}`}
                            </div>
                        </div>
                    </div>
                    <button
                        className="confirm-booking__submit"
                        onClick={context==="post" ? createBooking : deleteBooking}
                    >
                        {context === "post" ? `Reserve Listing` : `Cancel Booking`}
                    </button>
                </div>
            </div>
        </div>
    );
}