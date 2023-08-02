import React from "react";
import User from "./User";
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        <UserContext.Consumer>
          {({ loggedUser }) => {
            return <h1>{loggedUser}</h1>;
          }}
        </UserContext.Consumer>
        <h2>Namaste React About Us page.</h2>
        <UserClass name={"First"} location={"Dehradun"} />
      </div>
    );
  }
}

export default About;
