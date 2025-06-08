 import React from 'react';
 import ReactDOM from 'react-dom';
 import {createMemoryHistory, createBrowserHistory} from 'history';

 import {App} from './App'

 const htmlElRef =  document.getElementById('_marketing-root-dev');


  if(process.env.NODE_ENV === 'development'&&htmlElRef){
   const defaultHistory = createBrowserHistory()
    mount(htmlElRef, {defaultHistory})
 }

 function mount(el, {onNavigate, initialPath, defaultHistory}){
    let history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
 })
    onNavigate && history.listen(onNavigate)
    ReactDOM.render(<App history = {history}/>, el)

    return {
      onUpdateChildNavigation:(location) => onUpdateChildNavigation(location, history)
    }
 }

 function onUpdateChildNavigation({pathname: nextPathName}, history) {
     const {pathname}  = history.location;

    pathname!== nextPathName && history.push(nextPathName)
 }

export {mount};