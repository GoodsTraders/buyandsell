import {combineReducers} from 'redux';

const authStore = function (state = { isAuth: false }, action) {
    switch(action.type) {
        case 'TOGGLE_AUTH':
            return { isAuth : action.payload };
            break;
    }
    return state;
}

const itemStore = function (state = { items: [] }, action) {
    switch(action.type) {
        case 'GET_ITEMS':
            return { items : action.payload };
            break;
    }
    return state;
}

const userStore = function (state = { name: 'null', photo: null, email: null }, action) {
    switch(action.type) {
        case 'GET_USER':
            var newName = action.payload.name;
            var newPhoto = action.payload.photo;
            var newEmail = action.payload.email;
            return Object.assign({},state,{ name: newName, photo: newPhoto, email: newEmail })
            break;
    }
    return state;
}

const allReducers = combineReducers({
    authStore,
    itemStore,
    userStore
})

export default allReducers;