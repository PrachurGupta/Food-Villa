import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Child-constructor " + this.props.name);
  }

  async componentDidMount() {
    console.log("Child-componentDidMount "); // + this.props.name
    this.timer = setInterval(() => {
      console.log("NAMASTE REaCT OP");
    }, 1000);
    // const data = await fetch("https://api.github.com/users/PrachurGupta");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo: json,
    // });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component will unmount");
  }

  render() {
    const { count } = this.state;
    console.log("Child-render " + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this?.state?.userInfo?.avatar_url} />
        <h2>Name: {this?.state?.userInfo?.name}</h2>
        <h2>Location: {this?.state?.userInfo?.location}</h2>
      </div>
    );
  }
}

export default Profile;
