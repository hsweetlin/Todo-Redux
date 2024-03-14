import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers';

const root: HTMLElement |null = document.getElementById('root');
const element = ReactDOM.createRoot(root as HTMLElement );

const store = createStore(rootReducer);

element.render(
     <Provider store={store}>
     <App/> 
     </Provider>
)