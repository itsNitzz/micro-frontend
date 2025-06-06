import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export const App  = () =>{
    return <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
        <Switch>
            <Route exact path='/pricing' component={Pricing}/>
            <Route path='/' component={Landing}/>
        </Switch>
        </BrowserRouter>
    </StylesProvider>
}