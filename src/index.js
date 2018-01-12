import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import cartReducer from './products/cart';
import productsReducer from './products/products';
import App from './App';
import productsData from './phones/products';
import 'bootstrap/dist/css/bootstrap.css';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

let store = createStore(
    rootReducer,
    {
        products: productsData // initial store values
    }
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
