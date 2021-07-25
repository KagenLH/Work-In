import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { formatForReview } from '../../../utils/date';
import { deleteReview } from '../../../store/reviews';
import './ReviewSection.css';

export default function ReviewSection({ reviews, average }) {

    const user = useSelector(state => state.session.user?.user);

    const dispatch = useDispatch();

    const [userReview, setUserReview] = useState(reviews.find(review => review?.userId === user?.id));
    const otherReviews = reviews.filter(review => review.userId !== user?.id);

    const destroyReview = async () => {
        await dispatch(deleteReview(userReview.id));
        setUserReview(null);
    };

    if(!reviews.length) return null;

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
                {!!userReview && (
                    <div className="review-section__body-user-review">
                        <div className="review-user-review__title">
                            You left this review
                        </div>
                        <div className="review-user-review__header">
                            <div className="review-user-review-username">
                                {userReview?.User.username}
                            </div>
                            <div className="review-user-review-date">
                                {formatForReview(new Date(userReview?.Booking.startTime).toLocaleDateString("en-US", {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                }))}
                            </div>
                        </div>
                        <div className="review-user-review__content">
                            {userReview.content}
                        </div>
                        <div className="review-user-review__buttons">
                            <button
                                className="review-user-review__edit"
                            >
                                Edit Review
                            </button>
                            <button 
                                className="review-user-review__delete"
                                onClick={destroyReview}
                            >
                                Delete Review
                            </button>
                        </div>
                    </div>
                )}
                {otherReviews.map(review => (
                    <div className="review-section__review" key={review?.id}>
                        <div className="review-header">
                            <div className="review-username">
                                {review?.User.username}
                            </div>
                            <div className="review-date">
                                {formatForReview(new Date(review?.Booking.startTime).toLocaleDateString("en-US", {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                }))}
                            </div>
                        </div>
                        <div className="review-content">
                            {review?.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}