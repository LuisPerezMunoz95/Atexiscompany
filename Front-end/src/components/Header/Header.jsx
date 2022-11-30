import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  function goHome() {
    navigate("/home");
  }
  return (
    <div className="Header">
      <button className="title" onClick={goHome}>
        Atexis Company
      </button>
      <div className="Login">
        <Link className="link" to="/login">
          Login
        </Link>
        <Link className="link" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}
export default Header;
