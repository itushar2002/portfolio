import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import { Email } from "./components/Email";
import { useRef } from "react";
const App = () => {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Project />
      <Email />
    </div>
  );
};

export default App;
