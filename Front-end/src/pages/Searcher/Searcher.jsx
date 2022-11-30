import Origins from "../../components/Origins/Origins";
import TypeOfTrip from "../../components/TypeOfTrip/TypeOfTrip";
import Destinations from "../../components/Destinations/Destinations";
import Selecter from "../../components/Selecter/Selecter";
import { useState } from "react";
import "./Searcher.scss";
function Searcher(props) {
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState({
    from: "",
    to: "",
    Type_of_trip: "One-way",
    LayOver: false,
    Luggage: false,
    NºPeople: 1,
    goDay: "",
    goHour: "",
    returnDay: "",
    returnHour: "",
  });
  const [onewayTrip, setOneWayTrip] = useState(true);
  const [originTrip, setOriginTrip] = useState("");

  function handleLayOver(event) {
    const newQuery = { ...query, LayOver: !query.LayOver };
    setQuery(newQuery);
    setSearch(false);
  }
  function handleLuggage(event) {
    const newQuery = { ...query, Luggage: !query.Luggage };
    setQuery(newQuery);
    setSearch(false);
  }
  function handleQuery(event) {
    console.log(query);
    alert("Make conection to Database");
    setSearch(true);
  }
  function handleGoDay(event) {
    const newQuery = { ...query, goDay: event.target.value };
    setQuery(newQuery);
    setSearch(false);
  }
  function handleGoTime(event) {
    const newQuery = { ...query, goHour: event.target.value };
    setQuery(newQuery);
    setSearch(false);
  }
  function handleReturnDay(event) {
    const newQuery = { ...query, returnDay: event.target.value };
    setQuery(newQuery);
    setSearch(false);
  }
  function handleReturnTime(event) {
    const newQuery = { ...query, returnHour: event.target.value };
    setQuery(newQuery);
    setSearch(false);
  }
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
  const NumbersOFPeople = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
      <div className="formTrip">
        <label className="searcher-label">From:</label>
        <Origins
          cities={props.cities}
          originTrip={originTrip}
          setOriginTrip={setOriginTrip}
          query={query}
          setQuery={(newQuery) => {
            setQuery(newQuery);
            setSearch(false);
          }}
        />
        <label className="searcher-label">To:</label>
        <Destinations
          cities={props.cities}
          originTrip={originTrip}
          query={query}
          setQuery={(newQuery) => {
            setQuery(newQuery);
            setSearch(false);
          }}
        />
        <label className="searcher-label">Type of trip:</label>
        <TypeOfTrip
          setOneWayTrip={setOneWayTrip}
          typeOfTrip={props.typeOfTrip}
          query={query}
          setQuery={(newQuery) => {
            setQuery(newQuery);
            setSearch(false);
          }}
        />
        <label className="searcher-label">LayOver:</label>
        <input className="checkbox" type="checkbox" onClick={handleLayOver} />
        <label className="searcher-label">Luggage:</label>
        <input className="checkbox" type="checkbox" onClick={handleLuggage} />
        <label className="searcher-label">NºPeople:</label>
        <Selecter options={NumbersOFPeople} query={query} setQuery={setQuery} />
        <input className="date" type="date" onChange={handleGoDay} />
        <input className="date" type="time" onChange={handleGoTime} />
        <input
          className="date"
          type="date"
          hidden={onewayTrip}
          onChange={handleReturnDay}
        />
        <input
          className="date"
          type="time"
          hidden={onewayTrip}
          onChange={handleReturnTime}
        />
        <input
          className="submit"
          type="submit"
          value="Search"
          onClick={handleQuery}
        />
      </div>
      <div className="Results" hidden={!search}>
        Results:
      </div>
      <div className="tableResults" hidden={!search}>
        <table>
          <thead>
            <tr id="tableHeader">
              {headerTable.map((element, index) => (
                <th key={index}>{element}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {flights.map((element, index) => (
              <tr key={index}>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Searcher;
