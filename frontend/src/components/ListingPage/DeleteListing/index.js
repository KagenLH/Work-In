import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { closeDeleteModal } from '../../../store/modals';
import { csrfFetch } from '../../../store/csrf';
import './DeleteListing.css';

export default function DeleteListing({ show, coverImageUrl, name, price, listingId }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteListing = async () => {
        const res = await csrfFetch(`/api/listings/${listingId}`, {
            method: 'DELETE',
        });

        if(res.ok) {
            dispatch(closeDeleteModal());
            history.push("/listings")
        }
    }

    if(!show) {
        return null;
    }

    return (
        <div className="delete-listing__container">
            <div className="delete-listing__content">
                <div className="delete-listing__header">
                    <button
                        className="delete-listing__close"
                        onClick={() => dispatch(closeDeleteModal())}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="delete-listing__header-text">
                        Confirm deletion of this listing
                    </div>
                </div>
                <div className="delete-listing__body">
                    <div className="delete-listing__body-info">
                        <div className="delete-listing__body-name">
                            {name}
                        </div>
                        <img src={coverImageUrl} alt="\A" className="delete-listing__body-image"/>
                        <div className="delete-listing__body-price">
                            {`$${price} / hour`}
                        </div>
                    </div>
                    <div className="delete-listing__confirmation-container">
                        <div className="delete-listing__confirmation">
                            Are you sure you want to delete this listing? This cannot be reversed.
                        </div>
                    </div>
                </div>
                <button
                    className="delete-listing__button"
                    onClick={deleteListing}
                >
                    Delete Listing
                </button>
            </div>
        </div>
    );
}