import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      {/* <User /> */}
      <UserClass firstName={"Samrath"} lastName={"Nayak"} />
    </div>
  );
};

export default About;
