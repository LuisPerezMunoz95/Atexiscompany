import "./App.scss";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  const cities = [
    "",
    "Paris",
    "Barcelona",
    "London",
    "Munich",
    "Miami",
    "Madrid",
  ];
  const typeOfTrip = ["One-way", "Round-trip"];
  return (
    <div className="App">
      <Header />
      <Body cities={cities} typeOfTrip={typeOfTrip} />
    </div>
  );
}

export default App;
