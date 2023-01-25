import React from "react";
import { Outlet, outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile.js";
import Profile from "./ProfileClass.js";

class About extends React.Component {
  constructor(props) {
    super(props);
    
    console.log("Parent-Constructor");
  }

  componentDidMount() {
    

    console.log("Parent-ComponentDidMount");
  }

  render() {
    console.log("Parent-render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is the asd About About About</p>
        {/* <ProfileFunctionalComponent name={"Akshay"} /> */}
        <ProfileFunctionalComponent />
      </div>
    );
  }
}

export default About;


