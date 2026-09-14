import React from "react";
import { Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import PageNav from "./components/PageNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Company from "./pages/Company";
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
