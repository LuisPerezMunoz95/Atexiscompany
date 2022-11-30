import Origins from "../../components/Origins/Origins";
import TypeOfTrip from "../../components/TypeOfTrip/TypeOfTrip";
import Destinations from "../../components/Destinations/Destinations";
import NumberOFPeople from "../../components/NumberOFPeople/NumberOFPeople";
import { useState } from "react";
import "./Searcher.scss";
function Searcher(props) {
  const [onewayTrip, setOneWayTrip] = useState(true);
  const [originTrip, setOriginTrip] = useState("");
  const headerTable = [
    "Id",
    "From",
    "To",
    "Date",
    "Hour",
    "Company",
    "LayOver",
    "Luggage",
    "Duration",
    "Price",
  ];
  const flights = [
    {
      Id: 1,
      From: "Paris",
      To: "Barcelona",
      Date: "30/11/2022",
      Hour: "14:30",
      Company: "Iberia",
      LayOver: "0",
      Luggage: "Yes",
      Duration: "3 h",
      Price: "100€",
    },
    {
      Id: 2,
      From: "Paris",
      To: "Barcelona",
      Date: "30/11/2022",
      Hour: "14:30",
      Company: "Iberia",
      LayOver: "0",
      Luggage: "Yes",
      Duration: "3 h",
      Price: "100€",
    },
    {
      Id: 3,
      From: "Paris",
      To: "Barcelona",
      Date: "30/11/2022",
      Hour: "14:30",
      Company: "Iberia",
      LayOver: "0",
      Luggage: "Yes",
      Duration: "3 h",
      Price: "100€",
    },
    {
      Id: 4,
      From: "Paris",
      To: "Barcelona",
      Date: "30/11/2022",
      Hour: "14:30",
      Company: "Iberia",
      LayOver: "0",
      Luggage: "Yes",
      Duration: "3 h",
      Price: "100€",
    },
    {
      Id: 5,
      From: "Paris",
      To: "Barcelona",
      Date: "30/11/2022",
      Hour: "14:30",
      Company: "Iberia",
      LayOver: "0",
      Luggage: "Yes",
      Duration: "3 h",
      Price: "100€",
    },
    {
      Id: 6,
      From: "Paris",
      To: "Barcelona",
      Date: "30/11/2022",
      Hour: "14:30",
      Company: "Iberia",
      LayOver: "0",
      Luggage: "Yes",
      Duration: "3 h",
      Price: "100€",
    },
    {
      Id: 7,
      From: "Paris",
      To: "Barcelona",
      Date: "30/11/2022",
      Hour: "14:30",
      Company: "Iberia",
      LayOver: "0",
      Luggage: "Yes",
      Duration: "3 h",
      Price: "100€",
    },
    {
      Id: 8,
      From: "Paris",
      To: "Barcelona",
      Date: "30/11/2022",
      Hour: "14:30",
      Company: "Iberia",
      LayOver: "0",
      Luggage: "Yes",
      Duration: "3 h",
      Price: "100€",
    },
    {
      Id: 9,
      From: "Paris",
      To: "Barcelona",
      Date: "30/11/2022",
      Hour: "14:30",
      Company: "Iberia",
      LayOver: "0",
      Luggage: "Yes",
      Duration: "3 h",
      Price: "100€",
    },
    {
      Id: 10,
      From: "Paris",
      To: "Barcelona",
      Date: "30/11/2022",
      Hour: "14:30",
      Company: "Iberia",
      LayOver: "0",
      Luggage: "Yes",
      Duration: "3 h",
      Price: "100€",
    },
    {
      Id: 11,
      From: "Paris",
      To: "Barcelona",
      Date: "30/11/2022",
      Hour: "14:30",
      Company: "Iberia",
      LayOver: "0",
      Luggage: "Yes",
      Duration: "3 h",
      Price: "100€",
    },
  ];
  return (
    <div className="PrimaryContainer">
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
      <div className="tableResults">
        <table>
          <tr id="tableHeader">
            {headerTable.map((element) => (
              <th>{element}</th>
            ))}
          </tr>
          {flights.map((element, index) => (
            <tr>
              <td>{element.Id}</td>
              <td>{element.From}</td>
              <td>{element.To}</td>
              <td>{element.Date}</td>
              <td>{element.Hour}</td>
              <td>{element.Company}</td>
              <td>{element.LayOver}</td>
              <td>{element.Luggage}</td>
              <td>{element.Duration}</td>
              <td>{element.Price}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default Searcher;
