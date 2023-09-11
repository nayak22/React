import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: 2,
      userInfo: {
        name: "DeveloperName",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    // console.log("Components Mounted Successfully!!");
    const data = await fetch("https://api.github.com/users/nayak22");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log(this.state.userInfo);
    console.log(this.state.userInfo.name);
  }

  componentWillUnmount() {
    console.log("component unmount");
  }

  render() {
    return (
      <div className="user-card">
        <img
          className="user-img"
          // src="https://media.licdn.com/dms/image/D4D03AQElaI5OioE7nA/profile-displayphoto-shrink_200_200/0/1663823144105?e=1700092800&v=beta&t=hViaOJo8J7OxJ71RpJrIFA4aHCRsb8jlQaMsIyDC9y8"
          src={this.state.userInfo.avatar_url}
          alt="Profile Picture"
        />

        <div className="user-container">
          <h2>
            {/* {this.props.firstName} {this.props.lastName} */}
            {this.state.userInfo.name}
          </h2>

          <p className="user-title">Software Engineer</p>
          <p>
            .NET Developer with {this.state.experience} years of experience in
            developing web-based application using C#.Net, ASP.Net MVC, SQL
            server, web API etc. Skilled in Architecting and executing
            customized, data driven solutions. Expertise in gathering and
            defining requirements, design, development, testing, maintenance,
            enhancement, production support of business applications, manage
            documentation and optimize code.
          </p>
          <p>
            <button className="contact-button">Contact</button>
            {/* <button
              className="contact-button"
              onClick={() => {
                this.setState({
                  experience: this.state.experience + 1,
                });
              }}
            >
              Change Experience
            </button> */}
          </p>
        </div>
      </div>
    );
  }
}

export default UserClass;
