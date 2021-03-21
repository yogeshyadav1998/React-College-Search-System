import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

import App from './App';

const store = createStore(reducers,compose(applyMiddleware(thunk)))

const app = <Provider store = {store}>
        <App/>
    </Provider>

ReactDom.render(app, document.getElementById('root'));