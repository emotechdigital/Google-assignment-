import React from "react";
import "./Logo.css";

export default function Logo({ small = false }) {
  return (
    <h1 className={`logo${small ? " small" : ""}`}>
      <span className="blue">G</span>
      <span className="red">o</span>
      <span className="yellow">o</span>
      <span className="blue">g</span>
      <span className="green">l</span>
      <span className="red">e</span>
    </h1>
  );
}
