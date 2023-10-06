import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store'
import App from './App'
import { Global } from './BaseStyledComponents';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
        <BrowserRouter >
            <Global />
            <App />
        </BrowserRouter>
    </Provider>
);


