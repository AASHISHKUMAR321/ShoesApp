import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./componnets/Home";
import { Navbar } from "./componnets/Navbar";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./componnets/Signup";
import { Login } from "./componnets/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
