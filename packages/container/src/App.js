import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import MarketingRoot from "./components/MarketingRoot";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "ca",
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingRoot />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
