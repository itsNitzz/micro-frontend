import React, {lazy, Suspense, useState, useEffect} from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import {createBrowserHistory} from 'history';

import Header from "./components/Header";

const MarketingLazy = lazy(() => import("./components/MarketingRoot"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(()=>import("./components/DashboardApp"))

const generateClassName = createGenerateClassName({
  productionPrefix: "ca",
});

const history = createBrowserHistory();

const App = () => {

  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(()=>{
    isSignIn && history.push('/dashboard')

  }, [isSignIn])

  return (
    <Router history = {history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header signedIn={isSignIn} onSignOut={()=>setIsSignIn(false)} />
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
            <Route path="/auth">
               <AuthAppLazy onSignIn= {()=>setIsSignIn(true)} />
            </Route>
            <Route path='/dashboard'>
            {!isSignIn && <Redirect to='/'/>}
            <DashboardLazy/>
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;