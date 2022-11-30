import "./TypeOfTrip.scss";
function TypeOfTrip(props) {
  function handleTypeOfTrip(event) {
    const newQuery = { ...props.query, Type_of_trip: event.target.value };
    props.setQuery(newQuery);
    if (event.target.value === "One-way") {
      props.setOneWayTrip(true);
    } else {
      props.setOneWayTrip(false);
    }
  }
  return (
    <select className="type" onChange={handleTypeOfTrip}>
      {props.typeOfTrip.map((element, index) => (
        <option key={index}>{element}</option>
      ))}
    </select>
  );
}
export default TypeOfTrip;
