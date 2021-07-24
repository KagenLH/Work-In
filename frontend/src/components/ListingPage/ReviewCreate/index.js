import { useState } from 'react';

import { csrfFetch } from '../../../store/csrf';

import './ReviewCreate.css';

export default function ReviewCreate({ host, booking }) {
    const [numStars, setNumStars] = useState("3.0");
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reqNumStars = parseFloat(numStars);

        const res = await csrfFetch('/api/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                bookingId: booking.id,
                numStars: reqNumStars,
                content,
            }),
        });

        if(res.ok) {
            const review = await res.json();
            console.log(review);
        } else {
            console.log("Something went wrong creating the review.");
        }
    };

    const clearInput = (e) => {
        e.preventDefault();
        setContent('');
    };

    return (
        <div className="review-create__container">
            {`Review your experience at ${host}'s workspace`}
            <form 
                className="review-create__form"
                onSubmit={handleSubmit}
            >
                        <div className="review-create__form-rating">
                            <input
                                id="review-create__form-star5"
                                name="numStars"
                                type="radio"
                                value={"5.0"}
                                checked={numStars === "5.0"}
                                onChange={(e) => setNumStars(e.target.value)}
                                className="radio-btn hide"/>
                            <label for="review-create__form-star5" >☆</label>
                            <input
                                id="review-create__form-star4"
                                name="numStars"
                                type="radio"
                                value={"4.0"}
                                checked={numStars === "4.0"}
                                onChange={(e) => setNumStars(e.target.value)}
                                className="radio-btn hide"/>
                            <label for="review-create__form-star4" >☆</label>
                            <input
                                id="review-create__form-star3"
                                name="numStars"
                                type="radio"
                                value={"3.0"}
                                checked={numStars === "3.0"}
                                onChange={(e) => setNumStars(e.target.value)}
                                className="radio-btn hide"/>
                            <label for="review-create__form-star3" >☆</label>
                            <input
                                id="review-create__form-star2"
                                name="numStars"
                                type="radio"
                                value={"2.0"}
                                checked={numStars === "2.0"}
                                onChange={(e) => setNumStars(e.target.value)}
                                className="radio-btn hide"/>
                            <label for="review-create__form-star2" >☆</label>
                            <input
                                id="review-create__form-star1"
                                name="numStars"
                                type="radio"
                                value={"1.0"}
                                checked={numStars === "1.0"}
                                onChange={(e) => setNumStars(e.target.value)}
                                className="radio-btn hide"/>
                            <label for="review-create__form-star1" >☆</label>
                            <div class="review-create__form-clear"></div>
                        </div>
                <textarea 
                    className="review-create__form-input"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <div className="review-create__buttons-container">
                    <button
                        className="review-create__clear-text"
                        onClick={clearInput}
                    >
                        Clear
                    </button>
                    <button
                        className="review-create__submit-button"
                    >
                        Submit Review
                    </button>
                </div>
            </form>
        </div>
    );
}