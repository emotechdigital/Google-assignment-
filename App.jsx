import React from "react";
import { Routes, Route } from "react-router-dom";
import TopNav from "./TopNav";
import PageNav from "./PageNav";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Company from "./Company";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <TopNav />
      <PageNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/company" element={<Company />} />
      </Routes>

      <Footer />
    </div>
  );
}
