import { csrfFetch } from "./csrf";


const ADD_USER_BOOKING = 'userBookings/ADD_USER_BOOKING';
const LOAD_USER_BOOKINGS = 'userBookings/LOAD_USER_BOOKINGS';
const REMOVE_USER_BOOKING = 'userBookings/REMOVE_USER_BOOKING';

export const addUserBooking = (payload) => {
    return {
        type: ADD_USER_BOOKING,
        payload,
    }
};

export const loadUserBookings = (payload) => {
    return {
        type: LOAD_USER_BOOKINGS,
        payload,
    }
};

export const removeUserBooking = (payload) => {
    return {
        type: REMOVE_USER_BOOKING,
        payload,
    }
};

export const fetchUserBookings = (user) => async dispatch => {
    if(user) {
        const res = await csrfFetch('/api/bookings');

        if(res.ok) {
            const bookings = await res.json();
    
            return dispatch(loadUserBookings(bookings));
        }
    }
};

const initialState = [

];

export default function userBookingReducer(state=initialState, action) {
    switch(action.type) {
        case ADD_USER_BOOKING:
            return [ ...state, action.payload ];
        case LOAD_USER_BOOKINGS:
            return [ ...action.payload ];
        case REMOVE_USER_BOOKING:
            const newState = [...state];
            const deletedBooking = newState.find(booking => booking.id === action.payload);
            delete newState[newState.indexOf(deletedBooking)];
            return newState;
        default:
            return state;
    }
}