const SEARCH_BUBBLE_SHOW = '/search/SEARCH_BUBBLE_SHOW';
const SEARCH_BUBBLE_HIDE = '/search/SEARCH_BUBBLE_HIDE';

export const showSearchBubble = () => {
    return {
        type: SEARCH_BUBBLE_SHOW,
    };
};

export const hideSearchBubble = () => {
    return {
        type: SEARCH_BUBBLE_HIDE,
    };
};

const initialState = {
    show: false,
}

export default function searchBubbleReducer(state=initialState, action) {
    switch (action.type) {
        case SEARCH_BUBBLE_SHOW:
            return { show: true };
        case SEARCH_BUBBLE_HIDE:
            return { show: false };
        default: 
            return state;
    }
}