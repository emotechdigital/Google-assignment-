import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-location">Nigeria</div>
      <div className="footer-links">
        <div className="group">
          <span>Advertising</span>
          <span>Business</span>
          <span>How Search works</span>
        </div>
        <div className="group">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
}
