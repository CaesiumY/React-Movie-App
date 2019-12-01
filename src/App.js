import React from "react";
import PropTypes from "prop-types";

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

function Food(props) {
  return (
    <h1>
      I like {props.name} from {props.country}
    </h1>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      {dummy_props.map(item => (
        <Food key={item.id} name={item.name} country={item.country} />
      ))}
    </div>
  );
}

export default App;
