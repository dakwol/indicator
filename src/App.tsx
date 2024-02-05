import React, { FC, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter, Router } from "react-router-dom";
import { useDispatch } from "react-redux";

const App: FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
