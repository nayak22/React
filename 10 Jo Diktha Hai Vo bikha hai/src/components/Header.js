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
    <div className="header flex justify-between bg-gray-800 text-white">
      <div>
        <button class="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <span class="text-lg font-semibold">
          <img
            className="logo w-24 rounded-full"
            src={LOGO_URL}
            alt="company-logo"
          />
        </span>
      </div>

      <div className="nav-items  items-center hidden lg:block space-x-4">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/">Cart</Link>
          </li>
          <li className="px-4">
            <button className="login-btn" onClick={logintoApp}>
              {btnLogin}
            </button>
          </li>
          <li className="px-4">{onlineStatus ? "Online🟢" : "Offline🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
