const SET_BOOKING_HOURS = 'booking/SET_BOOKING_HOURS';
const SET_BOOKING_DAYS = 'booking/SET_BOOKING_DAYS';
const SET_BOOKING_TOTAL = 'booking/SET_BOOKING_TOTAL';
const SET_BOOKING_START = 'booking/SET_BOOKING_START';
const SET_BOOKING_END = 'booking/SET_BOOKING_END';
const SET_BOOKING_ALL = 'booking/SET_BOOKING_ALL';

export const setBookingInfo = (payload) => {
    return {
        type: SET_BOOKING_ALL,
        payload,
    };
};

export const setBookingHours = (payload) => {
    return {
        type: SET_BOOKING_HOURS,
        payload,
    };
};

export const setBookingDays = (payload) => {
    return {
        type: SET_BOOKING_DAYS,
        payload,
    };
};

export const setBookingTotal = (payload) => {
    return {
        type: SET_BOOKING_TOTAL,
        payload,
    };
};

export const setBookingStart = (payload) => {
    return {
        type: SET_BOOKING_START,
        payload,
    };
};

export const setBookingEnd = (payload) => {
    return {
        type: SET_BOOKING_END,
        payload,
    };
};

const initialState = {
    hours: null,
    days: null,
    total: null,
    start: null,
    end: null,
};

export default function bookingReducer(state=initialState, action) {
    switch(action.type) {
        case SET_BOOKING_ALL:
            return { ...action.payload };
        case SET_BOOKING_HOURS:
            return { ...state, hours: action.payload };
        case SET_BOOKING_DAYS:
            return { ...state, days: action.payload };
        case SET_BOOKING_TOTAL:
            return { ...state, total: action.payload };
        case SET_BOOKING_START:
            return { ...state, start: action.payload };
        case SET_BOOKING_END:
            return { ...state, end: action.payload };
        default:
            return state;
    }
}
