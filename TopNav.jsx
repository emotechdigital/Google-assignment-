import React from "react";
import { Link } from "react-router-dom";
import { Grid3x3, User } from "lucide-react";
import "./TopNav.css";

export default function TopNav() {
  return (
    <div className="top-nav">
      <div className="top-nav-left" />
      <div className="top-nav-right">
        <Link to="/about">About</Link>
        <Link to="/products">Store</Link>
        <span>Gmail</span>
        <span>Images</span>
        <button className="icon-btn" aria-label="apps">
          <Grid3x3 size={20} color="#5f6368" />
        </button>
        <div className="avatar">
          <User size={16} />
        </div>
      </div>
    </div>
  );
}
