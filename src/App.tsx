import React, { useState, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBarApp from "./components/ui-components/header/";
import AppRouter from "./components/containers/appRouter";
import { BrowserRouter as Router } from "react-router-dom";
import {reducer} from "reducer"
import {starsReducer} from "reducer/starsreducer"

const initialState = {
  meals: [],
  orders: [],
  users: [],
  lastOrderTime: "220-07-01",
  anotherConfigurationOption: { startsColor: "red" },
};

interface IConfig {
  starsColor: string;
}
export const MealsContext: any = React.createContext(null);
export const ConfigurationContext: any = React.createContext(null);



function App() {

  const [mealsState, dispatch] = useReducer(reducer, initialState);
  console.log(mealsState)
  const initialConfigurationState = { starsColor: "red" };

  const [getConfig, setConfig] = useReducer(starsReducer,initialConfigurationState);

  return (
    <Router>
      <ConfigurationContext.Provider value={[getConfig, setConfig]}>
        <MealsContext.Provider value={[mealsState, dispatch]}>
          <div className="container">
            <NavBarApp />
            <AppRouter />
          </div>
        </MealsContext.Provider>
      </ConfigurationContext.Provider>
    </Router>
  );
}

export default App;
