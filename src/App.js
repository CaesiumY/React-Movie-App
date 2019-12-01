import React from "react";

const dummy_props = [
  {
    id: 1,
    name: "ramen",
    country: "japan"
  },
  {
    id: 2,
    name: "curry",
    country: "india"
  },
  {
    id: 3,
    name: "sundae",
    country: "korea"
  },
  {
    id: 4,
    name: "pasta",
    country: "italy"
  }
];
function Potato(props) {
  return (
    <h1>
      I like {props.name} from {props.country}
    </h1>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      {dummy_props.map(item => (
        <Potato key={item.id} name={item.name} country={item.country} />
      ))}
    </div>
  );
}

export default App;
