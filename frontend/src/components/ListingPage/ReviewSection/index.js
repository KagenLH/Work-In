import { useSelector } from 'react-redux';

import { formatForReview } from '../../../utils/date';
import './ReviewSection.css';

export default function ReviewSection({ reviews, average }) {
    return (
        <div className="review-section__container">
            <div className="review-section__header">
                <div className="review-section__header-title">
                    <span className="review-section__header-title-star">
                        <i className="fas fa-star"></i>
                    </span>
                    {`${average.toFixed(2)} - ${reviews.length} reviews`}
                </div>
            </div>
            <div className="review-section__body">
                {reviews.map(review => (
                    <div className="review-section__review" key={review.id}>
                        <div className="review-header">
                            <div className="review-username">
                                {review.User.username}
                            </div>
                            <div className="review-date">
                                {formatForReview(new Date(review.Booking.startTime).toLocaleDateString("en-US", {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }))}
                            </div>
                        </div>
                        <div className="review-content">
                            {review.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}