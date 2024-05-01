import React from "react";
import "./App.css";
import NavigateBar from "./components/NavigateBar/NavigateBar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="Page">
      <NavigateBar />
      <div className="main">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
