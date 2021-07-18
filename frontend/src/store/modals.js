const SHOW_LOGIN_MODAL = '/modals/SHOW_LOGIN_MODAL';
const CLOSE_LOGIN_MODAL = '/modals/CLOSE_LOGIN_MODAL';
const SHOW_SIGNUP_MODAL = '/modals/SHOW_SIGNUP_MODAL';
const CLOSE_SIGNUP_MODAL = '/modals/CLOSE_SIGNUP_MODAL';

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
}

export const closeSignupModal = () => {
    return {
        type: CLOSE_SIGNUP_MODAL
    }
}

const initialState = {
    showModal: false
}

export const loginModalReducer = (state=initialState, action) => {
    switch (action.type) {
        case SHOW_LOGIN_MODAL:
            return { showModal: true };
        case CLOSE_LOGIN_MODAL:
            return { showModal: false };
        default:
            return state;
    }
}

export const signupModalReducer = (state=initialState, action) => {
    switch (action.type) {
        case SHOW_SIGNUP_MODAL:
            return { showModal: true };
        case CLOSE_SIGNUP_MODAL:
            return { showModal: false };
        default:
            return state;
    }
}