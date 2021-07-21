const OPEN_IMAGE_VIEWER = '/images/SHOW_IMAGE_VIEWER';
const CLOSE_IMAGE_VIEWER = '/images/CLOSE_IMAGE_VIEWER';
const SET_CURRENT_IMAGE = '/images/SET_CURRENT_IMAGE';

export const openImageViewer = () => {
    return {
        type: OPEN_IMAGE_VIEWER
    };
};

export const closeImageViewer = () => {
    return {
        type: CLOSE_IMAGE_VIEWER
    };
};

export const setCurrentImage = (payload) => {
    return {
        type: SET_CURRENT_IMAGE,
        payload
    };
};

const initialState = {
    showViewer: false,
    currentImage: null,
};

export const imageViewerReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_IMAGE_VIEWER:
            return { ...state, showViewer: true };
        case CLOSE_IMAGE_VIEWER:
            return { ...state, showViewer: false };
        case SET_CURRENT_IMAGE:
            return { ...state, currentImage: action.payload }
        default: 
            return state;
    }
}