import React from "react";
import { NavLink } from "react-router-dom";
import "./PageNav.css";

const pages = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/products", label: "Products" },
  { path: "/company", label: "Company" },
];

export default function PageNav() {
  return (
    <div className="page-nav">
      {pages.map((p) => (
        <NavLink
          key={p.path}
          to={p.path}
          end={p.path === "/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {p.label}
        </NavLink>
      ))}
    </div>
  );
}
