import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const logintoApp = () => {
    btnLogin === "Login" ? setBtnLogin("Log Out") : setBtnLogin("Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="company-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <li>
            <button className="login-btn" onClick={logintoApp}>
              {btnLogin}
            </button>
          </li>
          <li>{onlineStatus ? "Online🟢" : "Offline🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
