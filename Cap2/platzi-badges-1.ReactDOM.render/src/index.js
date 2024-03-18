
import React from 'react';
import ReactDOM from 'react-dom';

const jsx= <h1>HOla, realizando prácticas</h1>
const element = React.createElement('a',{href:'https;//plazti.com', 'Ir a platzi'},'Hola, soy Celia')
const element2 = React.createElement('h1',{},`HOla, soy Celia`)
const container = document.getElementById('app');

// ReactDOM.render(__qué_queremos renderizzar_, __dónde__ lo vamos a renderizzar);
ReactDOM.render(element2, container);
