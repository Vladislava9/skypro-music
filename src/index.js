import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import App from './App'
import { Global } from './BaseStyledComponents';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Global/>
    <App state={store.getState()}/>
    </>
    
);


