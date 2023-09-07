import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
