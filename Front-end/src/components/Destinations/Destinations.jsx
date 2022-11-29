import "./Destinations.scss";
function Destinations(props) {
  return (
    <select className="to">
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
