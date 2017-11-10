import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import App from './containers/app.js';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>
    , document.getElementById('app'));