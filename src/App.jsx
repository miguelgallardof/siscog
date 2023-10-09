//import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home, About } from "./pages";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
