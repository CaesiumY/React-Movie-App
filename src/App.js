import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <div>
      <HashRouter>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
