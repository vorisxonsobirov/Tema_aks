import React from "react";
import "./App.css";
import NavigateBar from "./components/NavigateBar/NavigateBar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="Page">
      <NavigateBar />
      <div className="main">
        <Navbar />
        <div className="content">
          
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
