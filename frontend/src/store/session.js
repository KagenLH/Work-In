import { csrfFetch } from "./csrf";

const CREATE_SESSION = 'session/CREATE_SESSION';
const DESTROY_SESSION = 'session/DESTROY_SESSION';

const initialState = {
    user: null
}

const createSession = (payload) => {
    return {
        type: CREATE_SESSION,
        payload
    };
};

const destroySession = () => {
    return {
        type: DESTROY_SESSION
    }
}

export const loginUser = (credentials) => async dispatch => {
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential: credentials.credential, password: credentials.password })
    });

    if(res.ok) {
        const user = await res.json();
        dispatch(createSession(user));
        return user;
    }
};

export const restoreLogin = () => async dispatch => {
    const res = await csrfFetch('/api/session');

    if(res.ok) {
        const user = await res.json();
        if(user.user !== null) {
            dispatch(createSession(user));
        }
        return user;
    }
}

export const signUp = (userData) => async dispatch => {
    const { username, password, email, avatarUrl } = userData;
    const res = await csrfFetch('/api/users', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, email, avatarUrl })
    });

    if(res.ok) {
        const user = await res.json();
        dispatch(createSession(user));
        return user;
    }
}

export const logoutUser = () => async dispatch => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE',
    });

    if(res.ok) {
        const json = res.json();
        dispatch(destroySession());
        return json.message;
    }
}

const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_SESSION: {
            const newState = { user: { ...action.payload } };
            return newState;
        }
        case DESTROY_SESSION: {
            return { user: null };
        }
        default: 
            return state;
    }
};

export default sessionReducer;