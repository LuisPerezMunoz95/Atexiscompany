import React from "react";
import "./Selecter.scss";

function Selecter(props) {
  function handleChange(event) {
    const newQuery = { ...props.query, passengersNumber: event.target.value };
    props.setQuery(newQuery);
  }
  return (
    <select className="selecter" onChange={handleChange}>
      {props.options.map((element, index) => (
        <option key={index}>{element}</option>
      ))}
    </select>
  );
}

export default Selecter;
