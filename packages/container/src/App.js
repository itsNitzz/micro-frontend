import React from "react";
import { BrowserRouter } from "react-router-dom";

import MarketingRoot from "./components/MarketingRoot";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingRoot />
      </div>
    </BrowserRouter>
  );
};

export default App;
