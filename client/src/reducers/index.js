import {combineReducers} from 'redux';

const authStore = function (state = { isAuth: false }, action) {
    switch(action.type) {
        case 'TOGGLE_AUTH':
            console.log('TRIGGERED');
            return { isAuth : action.payload };
            break;
    }
    return state;
}

const allReducers = combineReducers({
    authStore
})

export default allReducers;