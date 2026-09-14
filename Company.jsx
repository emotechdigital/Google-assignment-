import React from "react";
import "./ContentPage.css";

export default function Company() {
  return (
    <div className="content-page">
      <h2>Company info</h2>
      <div className="info-row"><strong>Founded:</strong> September 4, 1998, in Menlo Park, California</div>
      <div className="info-row"><strong>Founders:</strong> Larry Page and Sergey Brin</div>
      <div className="info-row"><strong>Headquarters:</strong> Googleplex, Mountain View, California</div>
      <div className="info-row"><strong>Parent company:</strong> Alphabet Inc. (since 2015)</div>
      <div className="info-row"><strong>CEO:</strong> Sundar Pichai — CEO of both Google and Alphabet</div>
      <div className="info-row"><strong>Focus areas:</strong> Search, advertising, cloud computing, consumer hardware, and artificial intelligence</div>
    </div>
  );
}
