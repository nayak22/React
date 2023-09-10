import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

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
        </ul>
      </div>
    </div>
  );
};

export default Header;
