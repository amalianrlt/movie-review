import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Route } from "react-router-dom";
import store from "./store";

import HomePage from "./modules/HomePage";
import DetailOverview from "./modules/DetailOverview";

function App() {
  return (
    <Provider store={store}>
          <Route path="/" exact><HomePage/></Route>
          <Route path="/overview" exact><DetailOverview/></Route>
          {/* <LoginForm/> */}
    </Provider>
  );
}

export default App;
