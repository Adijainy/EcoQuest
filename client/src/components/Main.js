import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-richgreen-10 min-h-screen">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Main;
