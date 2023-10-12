import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About } from "./pages";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

import './index.scss'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
