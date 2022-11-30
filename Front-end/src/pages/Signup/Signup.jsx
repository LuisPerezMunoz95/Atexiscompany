import logo from "../../assets/logo.png";
import "./Signup.scss";
function Signup() {
  return (
    <div className="PrimaryContainer">
      <img id="logo" src={logo}></img>
      <form className="signupForm">
        <label>Name:</label>
        <input type="text"></input>
        <label>Surname:</label>
        <input type="password"></input>
        <label>Nationality:</label>
        <input type="password"></input>
        <label>Age:</label>
        <input type="password"></input>
        <label>DNI:</label>
        <input type="password"></input>
        <input className="signup" type="submit" value="Sign up" />
      </form>
    </div>
  );
}
export default Signup;
