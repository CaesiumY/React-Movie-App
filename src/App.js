import React from "react";

function Potato(props) {
  return <h1>I like {props.fav}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Potato fav="ramen" />
    </div>
  );
}

export default App;
