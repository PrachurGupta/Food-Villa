import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namaste React Op");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Clear Interval");
    };
  }, []);
  return (
    <div>
      <h2>Profile Component</h2>
      <h3>Name: {props.name}</h3>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          count === 0 ? setCount(1) : setCount(0);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
