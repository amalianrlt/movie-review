import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import LoginForm from './components/LoginForm';
import HomePage from './modules/HomePage'
import DetailOverview from './modules/DetailOverview'
import OverviewTab from './components/OverviewTab';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <LoginForm/> */}
        <HomePage/>
      </div>
    </Provider>
  );
}

export default App;
