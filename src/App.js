import React from "react";

function Potato(props) {
  return (
    <h1>
      I like {props.name} from {props.country}{" "}
    </h1>
  );
}

const dummy_props = [
  {
    name: "ramen",
    country: "japan"
  },
  {
    name: "curry",
    country: "india"
  },
  {
    name: "sundae",
    country: "korea"
  },
  {
    name: "pasta",
    country: "italy"
  }
];

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      {dummy_props.map(item => (
        <Potato name={item.name} country={item.country} />
      ))}
    </div>
  );
}

export default App;
