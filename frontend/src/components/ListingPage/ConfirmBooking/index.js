import { useDispatch } from 'react-redux';

import './ConfirmBooking.css';
import { closeCreateBookingModal } from '../../../store/modals';

export default function ConfirmBooking({ show }) {
    const dispatch = useDispatch();

    if(!show) {
        return null;
    }

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

                </div>
            </div>
        </div>
    );
}