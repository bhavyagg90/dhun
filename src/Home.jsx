import React, { useState } from "react";
import "./Home.css";
import { Login, Register } from "./pages";
import Switch from "./Switch";
import App from "./App";
function Home() {
  return (
    <>
      {localStorage.getItem("id") !== null ? <App /> : <Switch />}
    </>
  );
}

export default Home;
