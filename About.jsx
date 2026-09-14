import React from "react";
import "./ContentPage.css";

const pillars = [
  {
    title: "Our approach",
    desc: "Building products that work for everyone, tested at a global scale and designed to be accessible from day one.",
  },
  {
    title: "Our commitments",
    desc: "Operating responsibly, protecting user privacy, and investing in sustainability and clean energy across our operations.",
  },
  {
    title: "Our history",
    desc: "Started in 1998 as a research project by two Stanford PhD students, now a technology company used by billions of people daily.",
  },
];

export default function About() {
  return (
    <div className="content-page">
      <h2>About Google</h2>
      <p>
        Google's mission is to organize the world's information and make it
        universally accessible and useful. That idea has guided the company
        since it started as a search engine and now shapes everything from
        Search and Maps to Android and its AI research.
      </p>
      <p>
        The company was founded by Larry Page and Sergey Brin while they were
        PhD students at Stanford University, and has grown into one of the
        world's largest technology companies, operating as part of Alphabet
        Inc. since 2015.
      </p>
      <div className="card-grid">
        {pillars.map((p) => (
          <div className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
