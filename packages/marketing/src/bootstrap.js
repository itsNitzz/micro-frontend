 import React from 'react';
 import ReactDOM from 'react-dom';

 import {App} from './App'

 const htmlElRef =  document.getElementById('_marketing-root-dev');

 const mount = (el) => {
    ReactDOM.render(<App/>, el)
 }


 if(process.env.NODE_ENV === 'development'&&htmlElRef){
    mount(htmlElRef)
    console.log('marketing')
 }

export {mount};