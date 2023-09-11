import React from "react";

function User() {
  return (
    <div className="user-card">
      <img
        className="user-img"
        src="https://media.licdn.com/dms/image/D4D03AQElaI5OioE7nA/profile-displayphoto-shrink_200_200/0/1663823144105?e=1700092800&v=beta&t=hViaOJo8J7OxJ71RpJrIFA4aHCRsb8jlQaMsIyDC9y8"
        alt="Profile Picture"
      />

      <div className="user-container">
        <h2>Samrath Nayak</h2>
        <p className="user-title">Software Engineer</p>
        <p>
          .NET Developer with 2.5+ years of experience in developing web-based
          application using C#.Net, ASP.Net MVC, SQL server, web API etc.
          Skilled in Architecting and executing customized, data driven
          solutions. Expertise in gathering and defining requirements, design,
          development, testing, maintenance, enhancement, production support of
          business applications, manage documentation and optimize code.
        </p>
        <p>
          <button className="contact-button">Contact</button>
        </p>
      </div>
    </div>
  );
}

export default User;
