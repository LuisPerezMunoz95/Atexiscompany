import logo from "../../assets/logo.png";
import "./Login.scss";
function Login() {
  return (
    <div className="PrimaryContainer">
      <img id="logo" src={logo}></img>
      <form className="loginForm">
        <label>User:</label>
        <input type="text"></input>
        <label>Password:</label>
        <input type="password"></input>
        <input className="signup" type="submit" value="Login" />
      </form>
    </div>
  );
}
export default Login;
