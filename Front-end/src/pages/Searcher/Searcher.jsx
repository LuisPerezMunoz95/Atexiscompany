import Origins from "../../components/Origins/Origins";
import TypeOfTrip from "../../components/TypeOfTrip/TypeOfTrip";
import Destinations from "../../components/Destinations/Destinations";
import Selecter from "../../components/Selecter/Selecter";
import axios from "axios";
import { useState } from "react";
import "./Searcher.scss";
function Searcher(props) {
  const flightUrl = "http://localhost:8083/api/flight";
  const flightsPopulated = [];
  const [flights, setFlights] = useState([]);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState({
    originsList: "",
    destinationsList: "",
    Type_of_trip: "One-way",
    layOver: false,
    luggage: false,
    passengersNumber: 1,
    dayDate: "",
    timeDate: "",
    returnDay: "",
    returnHour: "",
  });
  const [onewayTrip, setOneWayTrip] = useState(true);
  const [originTrip, setOriginTrip] = useState("");
  const NumbersOFPeople = [1, 2];
  // const airLines = ["Iberia", "BritishAirWays", "Ryanair"];
  const airLines = ["Iberia"];
  const dayDates = [
    "2022-12-01",
    "2022-12-02",
    "2022-12-03",
  ];
  const times = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];
  const layOvers = [true, false];
  const luggages = [true, false];
  // const prices = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  const prices = [100];
  const durations = [
    "1 hr",
  ];

  function populate() {
    props.cities.map((origin) => {
      props.cities.map((destination) => {
        NumbersOFPeople.map((people) => {
          airLines.map((airline) => {
            dayDates.map((dayDate) => {
              layOvers.map((layOver) => {
                luggages.map((luggage) => {
                  times.map((time) => {
                    durations.map((duration) => {
                      prices.map((price) => {
                        const flight = {
                          "airLines": airline,
                          "dayDate": dayDate,
                          "destinationsList": destination,
                          "layOver": layOver,
                          "luggage": luggage,
                          "originsList": origin,
                          "passengersNumber": people,
                          "price": price,
                          "timeDate": time,
                          "transitTime": duration,
                          "tripSelected": "One-Way",
                        };
                        // flightsPopulated.push(flight)
                        axios.post(flightUrl,flight)
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  function handleLayOver(event) {
    const newQuery = { ...query, layOver: !query.layOver };
    setQuery(newQuery);
    setSearch(false);
  }
  function handleLuggage(event) {
    const newQuery = { ...query, luggage: !query.luggage };
    setQuery(newQuery);
    setSearch(false);
  }
  function handleGoDay(event) {
    const newQuery = { ...query, dayDate: event.target.value };
    setQuery(newQuery);
    setSearch(false);
  }
  function handleGoTime(event) {
    const newQuery = { ...query, timeDate: event.target.value };
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
  function checkResults(result) {
    return (
      query.layOver === result.layOver &&
      query.luggage === result.luggage &&
      query.dayDate === result.dayDate &&
      query.timeDate === result.timeDate &&
      query.originsList === result.originsList &&
      query.destinationsList === result.destinationsList &&
      query.passengersNumber === result.passengersNumber
    );
  }
  function handleQuery(event) {
    axios.get(flightUrl).then((response) => {
      setFlights(response.data.filter(checkResults));
    });
    populate();
    console.log(flightsPopulated.length)
    setSearch(true);
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
                <td>{element.id}</td>
                <td>{element.originsList}</td>
                <td>{element.destinationsList}</td>
                <td>{element.dayDate}</td>
                <td>{element.timeDate}</td>
                <td>{element.airLines}</td>
                <td>{element.layOver ? "Yes" : "No"}</td>
                <td>{element.luggage ? "Yes" : "No"}</td>
                <td>{element.transitTime}</td>
                <td>{element.price}€</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Searcher;
