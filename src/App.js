import React from "react";
import { Provider } from "react-redux";
import "./style/scss/HomePage.scss";
import store from "./store";
import Routes from "./components/routes/Routes";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
