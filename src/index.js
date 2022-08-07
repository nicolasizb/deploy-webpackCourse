import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './styles/global.scss';

// El primer elemento que recibe es nuestra aplicación
// con 'document.getElementById' nos permite poder mostrar dentro de un archivo HTML nuestra aplicación
ReactDOM.render(<App />, document.getElementById('app'))