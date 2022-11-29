import Origins from "../../components/Origins/Origins";
import TypeOfTrip from "../../components/TypeOfTrip/TypeOfTrip";
import Destinations from "../../components/Destinations/Destinations";
import NumberOFPeople from "../../components/NumberOFPeople/NumberOFPeople";
import appLogo from "../../assets/background-image.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Searcher.scss";
function Searcher(props) {
  const [onewayTrip, setOneWayTrip] = useState(true);
  const [originTrip, setOriginTrip] = useState("");
  return (
    <div className="PrimaryContainer">
      <div className="Login">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
        {/* <label>User:</label>
        <input type="text"></input>
        <label>Password:</label>
        <input type="password"></input> */}
      </div>
      <div className="Searcher">Searcher:</div>
      <form className="formTrip" action="">
        <label className="searcher-label">From:</label>
        <Origins
          cities={props.cities}
          originTrip={originTrip}
          setOriginTrip={setOriginTrip}
        />
        <label className="searcher-label">To:</label>
        <Destinations cities={props.cities} originTrip={originTrip} />
        <label className="searcher-label">Type of trip:</label>
        <TypeOfTrip
          setOneWayTrip={setOneWayTrip}
          typeOfTrip={props.typeOfTrip}
        />
        <label className="searcher-label">LayOver:</label>
        <input type="checkbox" />
        <label className="searcher-label">Luggage:</label>
        <input type="checkbox" />
        <label className="searcher-label">NºPeople:</label>
        <NumberOFPeople />
        <input className="date" type="date" />
        <input className="date" type="time" />
        <input className="date" type="date" hidden={onewayTrip} />
        <input className="date" type="time" hidden={onewayTrip} />
        <input className="submit" type="submit" value="Search" />
      </form>
      <div className="Results">Results:</div>
      <img className="logoImg" src={appLogo}></img>
    </div>
  );
}
export default Searcher;
