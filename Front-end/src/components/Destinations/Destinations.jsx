function Destinations(props) {
  function handleDestination(event) {
    const newQuery = { ...props.query, to: event.target.value };
    props.setQuery(newQuery);
  }
  return (
    <select className="selecter" onChange={handleDestination}>
      {props.cities.map((element, index) =>
        props.originTrip === element ? (
          props.originTrip === "" ? (
            <option key={index}>{element}</option>
          ) : (
            ""
          )
        ) : (
          <option key={index}>{element}</option>
        )
      )}
    </select>
  );
}
export default Destinations;
