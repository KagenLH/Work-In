const SHOW_MODAL = '/modals/SHOW_MODAL';
const CLOSE_MODAL = '/modals/CLOSE_MODAL';

const showModal = () => {
    return {
        type: SHOW_MODAL
    };
};

const closeModal = () => {
    return {
        type: SHOW_MODAL
    };
};

const initalState = {
    showModal: false
}

export const loginModalReducer = (state=initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return { showModal: true };
        case CLOSE_MODAL:
            return { showModal: false };
        default:
            return state;
    }
}

export const signupModalReducer = (state=initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return { showModal: true };
        case CLOSE_MODAL:
            return { showModal: false };
        default:
            return state;
    }
}