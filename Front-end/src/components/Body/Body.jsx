import Searcher from "../../pages/Searcher/Searcher";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import { Route, Routes } from "react-router-dom";
function Body(props) {
  return (
    <div className="MainContainerBody">
      <Routes>
        <Route
          path=""
          element={
            <Searcher cities={props.cities} typeOfTrip={props.typeOfTrip} />
          }
          exact
        ></Route>
        <Route
          path="*"
          element={
            <Searcher cities={props.cities} typeOfTrip={props.typeOfTrip} />
          }
          exact
        ></Route>
        <Route path="/signup" element={<Signup />} exact></Route>
        <Route path="/login" element={<Login />} exact></Route>
      </Routes>
    </div>
  );
}
export default Body;
