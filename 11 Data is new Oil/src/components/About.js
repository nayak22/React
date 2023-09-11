import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading text-4xl font-bold text-black-500 my-5 ml-5">
        About Us
      </h1>
      <User />
    </div>
  );
};

export default About;
