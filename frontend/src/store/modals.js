const SHOW_LOGIN_MODAL = '/modals/SHOW_LOGIN_MODAL';
const CLOSE_LOGIN_MODAL = '/modals/CLOSE_LOGIN_MODAL';
const SHOW_SIGNUP_MODAL = '/modals/SHOW_SIGNUP_MODAL';
const CLOSE_SIGNUP_MODAL = '/modals/CLOSE_SIGNUP_MODAL';
const SHOW_LISTING_DELETE_MODAL = '/modals/SHOW_LISTING_DELETE_MODAL';
const CLOSE_LISTING_DELETE_MODAL = '/modals/CLOSE_LISTING_DELETE_MODAL';
const SHOW_CREATE_BOOKING_MODAL = '/modals/SHOW_CREATE_BOOKING_MODAL';
const CLOSE_CREATE_BOOKING_MODAL = '/modals/CLOSE_CREATE_BOOKING_MODAL';
const BOOKING_MODAL_POST = '/modals/BOOKING_MODAL_POST';
const BOOKING_MODAL_DELETE = '/modals/BOOKING_MODAL_DELETE';

export const showLoginModal = () => {
    return {
        type: SHOW_LOGIN_MODAL
    };
};

export const closeLoginModal = () => {
    return {
        type: CLOSE_LOGIN_MODAL
    };
};

export const showSignupModal = () => {
    return {
        type: SHOW_SIGNUP_MODAL
    };
};

export const closeSignupModal = () => {
    return {
        type: CLOSE_SIGNUP_MODAL
    }
};

export const showDeleteModal = () => {
    return {
        type: SHOW_LISTING_DELETE_MODAL
    };
};

export const closeDeleteModal = () => {
    return {
        type: CLOSE_LISTING_DELETE_MODAL
    };
};

export const showCreateBookingModal = () => {
    return {
        type: SHOW_CREATE_BOOKING_MODAL
    };
};

export const closeCreateBookingModal = () => {
    return {
        type: CLOSE_CREATE_BOOKING_MODAL
    };
};

export const setBookingModalPost = () => {
    return {
        type: BOOKING_MODAL_POST,
    };
};

export const setBookingModalDelete = () => {
    return {
        type: BOOKING_MODAL_DELETE,
    };
};

const initialState = {
    showModal: false
};

const initialBookingState = {
    showModal: false,
    context: "post",
};

export const loginModalReducer = (state=initialState, action) => {
    switch (action.type) {
        case SHOW_LOGIN_MODAL:
            return { showModal: true };
        case CLOSE_LOGIN_MODAL:
            return { showModal: false };
        default:
            return state;
    }
};

export const signupModalReducer = (state=initialState, action) => {
    switch (action.type) {
        case SHOW_SIGNUP_MODAL:
            return { showModal: true };
        case CLOSE_SIGNUP_MODAL:
            return { showModal: false };
        default:
            return state;
    }
};

export const deleteListingModalReducer = (state=initialState, action) => {
    switch(action.type) {
        case SHOW_LISTING_DELETE_MODAL:
            return { showModal: true };
        case CLOSE_LISTING_DELETE_MODAL:
            return { showModal: false };
        default:
            return state;
    }
};

export const createBookingModalReducer = (state=initialBookingState, action) => {
    switch(action.type) {
        case SHOW_CREATE_BOOKING_MODAL:
            return { ...state, showModal: true };
        case CLOSE_CREATE_BOOKING_MODAL:
            return { ...state, showModal: false };
        case BOOKING_MODAL_POST:
            return { ...state, context: "post" };
        case BOOKING_MODAL_DELETE:
            return { ...state, context: "delete" };
        default:
            return state;
    }
};