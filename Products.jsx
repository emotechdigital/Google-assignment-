import React from "react";
import "./ContentPage.css";

const products = [
  { name: "Search", desc: "The core product — helps people find information, answers, and websites instantly." },
  { name: "Gmail", desc: "Free email service with spam protection, smart replies, and built-in video calling." },
  { name: "Maps", desc: "Real-time navigation, traffic data, and local business information worldwide." },
  { name: "Drive", desc: "Cloud storage for files, with built-in tools for docs, sheets, and slides." },
  { name: "Photos", desc: "Automatic backup and smart organization for photos and videos." },
  { name: "Chrome", desc: "A fast, widely used web browser built around speed and security." },
  { name: "YouTube", desc: "The world's largest video-sharing platform, owned by Google since 2006." },
  { name: "Android", desc: "The most widely used mobile operating system, powering phones worldwide." },
  { name: "Gemini", desc: "Google's family of AI models, built into Search, Workspace, and standalone apps." },
];

export default function Products() {
  return (
    <div className="content-page" style={{ maxWidth: 900 }}>
      <h2>Products</h2>
      <p>A look at some of the products Google builds and maintains.</p>
      <div className="card-grid">
        {products.map((p) => (
          <div className="card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
