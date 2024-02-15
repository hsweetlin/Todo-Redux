import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const root: HTMLElement |null = document.getElementById('root');
const element = ReactDOM.createRoot(root as HTMLElement );

element.render(
     <App/> 
)