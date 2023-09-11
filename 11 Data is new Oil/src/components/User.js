import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function User() {
  const [userInfo, setUserInfo] = useState({
    avatar_url: "",
    name: "Loading",
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/nayak22");

    const json = await data.json();
    setUserInfo(json);
    console.log(json);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-5">
      <Link to="#">
        <img className="rounded-t-lg" src={userInfo.avatar_url} alt="" />
      </Link>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {userInfo.name}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          .NET Developer with 2.5+ years of experience in developing web-based
          application using C#.Net, ASP.Net MVC, SQL server, web API etc.
          Skilled in Architecting and executing customized, data driven
          solutions. Expertise in gathering and defining requirements, design,
          development, testing, maintenance, enhancement, production support of
          business applications, manage documentation and optimize code.
        </p>
        <Link
          to="https://www.linkedin.com/in/samrath-nayak-245330106/"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default User;
