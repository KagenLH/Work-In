import { useState } from 'react';

import './ReviewCreate.css';

export default function ReviewCreate() {
    const [numStars, setNumStars] = useState(3.0);
    const [content, setContent] = useState('');

    const handleSubmit = () => {

    };

    return (
        <div className="review-create__container">
            <form 
                className="review-create__form"
                onSubmit="handleSubmit"
            >
                        <div className="review-create__form-rating">
                            <input
                                id="review-create__form-star5"
                                name="numStars"
                                type="radio"
                                value="5.0"
                                className="radio-btn hide"/>
                            <label for="review-create__form-star5" >☆</label>
                            <input
                                id="review-create__form-star4"
                                name="numStars"
                                type="radio"
                                value="4.0"
                                className="radio-btn hide"/>
                            <label for="review-create__form-star4" >☆</label>
                            <input
                                id="review-create__form-star3"
                                name="numStars"
                                type="radio"
                                value="3.0"
                                className="radio-btn hide"/>
                            <label for="review-create__form-star3" >☆</label>
                            <input
                                id="review-create__form-star2"
                                name="numStars"
                                type="radio"
                                value="2.0"
                                className="radio-btn hide"/>
                            <label for="review-create__form-star2" >☆</label>
                            <input
                                id="review-create__form-star1"
                                name="numStars"
                                type="radio"
                                value="1.0"
                                class="radio-btn hide"/>
                            <label for="review-create__form-star1" >☆</label>
                            <div class="review-create__form-clear"></div>
                        </div>
                <textarea 
                    className="review-create__form-input"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </form>
        </div>
    );
}