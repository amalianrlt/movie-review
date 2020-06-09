import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Switch, Router, Route } from "react-router-dom";
import store from "./store";
import LoginForm from "./components/LoginForm";
import HomePage from "./modules/HomePage";
import DetailOverview from "./modules/DetailOverview";

function App() {
  return (
    <Provider store={store}>
        <Switch>
          <Route path="/" exact><HomePage/></Route>
          <Route path="/overview" exact><DetailOverview/></Route>
          {/* <LoginForm/> */}
        </Switch>
    </Provider>
  );
}

export default App;
