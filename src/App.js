import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./routes/Navigation";
import Detail from "./routes/Detail";
import "./css/App.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Navigation></Navigation>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/movie/:id" component={Detail}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
