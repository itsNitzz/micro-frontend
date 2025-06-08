import React, {lazy, Suspense, useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";

const MarketingLazy = lazy(() => import("./components/MarketingRoot"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "ca",
});

const App = () => {

  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header signedIn={isSignIn} onSignOut={()=>setIsSignIn(false)} />
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
            <Route path="/auth">
               <AuthAppLazy onSignIn= {()=>setIsSignIn(true)} />
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
