import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
// import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Profile from "./components/Profile.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Shimmer from "./components/Shimmer.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./Utils/UserContext.js";
// import Instamart from "./components/Instamart.js"
const Instamart = lazy(() => import("./components/Instamart")); //import is a promise
const About = lazy(() => import("./components/About"));
//Upon Demand Loading --> upon render --> suspend loading

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Prachur",
    email: "asd@gmail.com",
  });


  return (
    <UserContext.Provider value={{ user: user,setUser: setUser}}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....About Us</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
