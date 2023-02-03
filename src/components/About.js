import React from "react";
import { Outlet, outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile.js";
import Profile from "./ProfileClass.js";
import UserContext from "../Utils/UserContext.js";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent-Constructor");
  }

  componentDidMount() {
    console.log("Parent-ComponentDidMount");
  }

  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({user}) => <h4 className="font-bold text-xl p-10">{user.name} - {user.email}</h4>}
        </UserContext.Consumer>
        <p>This is the asd About About About</p>
        {/* <ProfileFunctionalComponent name={"Akshay"} /> */}
        <ProfileFunctionalComponent />
      </div>
    );
  }
}

export default About;
