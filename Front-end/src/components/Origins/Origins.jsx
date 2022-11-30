function Origins(props) {
  function handleOrigin(event) {
    const newQuery = { ...props.query, from: event.target.value };
    props.setQuery(newQuery);
    props.setOriginTrip(event.target.value);
  }
  return (
    <select className="selecter" onChange={handleOrigin}>
      {props.cities.map((element, index) => (
        <option key={index}>{element}</option>
      ))}
    </select>
  );
}
export default Origins;
