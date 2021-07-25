import { csrfFetch } from "./csrf";

const REVIEWS_SET_REVIEWS = '/reviews/REVIEWS_SET_REVIEWS';
const REVIEWS_REMOVE_REVIEW = '/reviews/REVIEWS_REMOVE_REVIEW';
const REVIEWS_ADD_REVIEW = '/reviews/REVIEWS_ADD_REVIEW';
const REVIEWS_EDIT_REVIEW = '/reviews/REVIEWS_EDIT_REVIEW';

export const setReviews = (payload) => {
    return {
        type: REVIEWS_SET_REVIEWS,
        payload,
    };
};

const addReview = (payload) => {
    return {
        type: REVIEWS_ADD_REVIEW,
        payload,
    };
};

const removeReview = (payload) => {
    return {
        type: REVIEWS_REMOVE_REVIEW,
        payload,
    };
};

const updateReview = (payload) => {
    return {
        type: REVIEWS_EDIT_REVIEW,
        payload,
    };
};

export const createReview = (payload) => async dispatch => {
    const { bookingId, numStars, content } = payload;

    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            bookingId,
            numStars,
            content,
        }),
    });

    if(res.ok) {
        const review = await res.json();
        dispatch(addReview(review));
    } else {
        console.log("Something went wrong creating the review.");
    }
};

export const editReview = (payload) => async dispatch => {

};

export const deleteReview = (payload) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${payload}`, {
        method: 'DELETE',
    });

    if(res.ok) {
        dispatch(removeReview(payload));
    }
};

const initialState = [

];

const reviewsReducer = (state=initialState, action) => {
    switch (action.type) {
        case REVIEWS_SET_REVIEWS: {
            return [ ...action.payload ];
        }
        case REVIEWS_ADD_REVIEW: {
            return [ ...state, action.payload ];
        }
        case REVIEWS_EDIT_REVIEW: {
            const newState = [ ...state ];
            const updateIndex = newState.findIndex(review => review.id === action.payload.id);
            newState[updateIndex] = action.payload;
            return newState;
        }
        case REVIEWS_REMOVE_REVIEW: {
            const newState = [ ...state ];
            delete newState[newState.findIndex(review => review.id === action.payload)];
            return newState;
        }
        default: 
            return state;
    }
};

export default reviewsReducer;