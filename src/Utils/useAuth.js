import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = () => {
      isLoggedIn
        ? (setIsLoggedIn(false),
          (document.getElementById("demo").innerHTML = "Log In"))
        : (setIsLoggedIn(true),
          (document.getElementById("demo").innerHTML = "Log Out"),
          [isLoggedIn]);
    };
    window.addEventListener("click", auth);

    return () => {
      window.removeEventListener("click", auth);
    };
  });

  return isLoggedIn;
};

export default useAuth;
