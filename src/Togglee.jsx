import React, { useState } from "react";
import "./Home.css";
import { Login, Register } from "./pages";
function Togglee() {
  const [currentForm, setCurrentForm] = useState("login");
  return (
    <div>
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}
export default Togglee;
