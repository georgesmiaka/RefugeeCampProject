import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./view/screens/Home";
import Document from "./view/screens/Document";
import About from "./view/screens/About";
import NavBar from "./view/components/navbar";
import Footer from "./view/components/footer";
import "./view/styles/style.css";

function App() {
  return (
    <><NavBar /><BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Document />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter><Footer/></>
  );
}

export default App;
