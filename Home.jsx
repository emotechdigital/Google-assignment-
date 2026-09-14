import React from "react";
import { Search, Mic, Camera } from "lucide-react";
import Logo from "../components/Logo";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Logo />
      <div className="search-box">
        <Search size={20} color="#9aa0a6" />
        <input type="text" placeholder="Search Google or type a URL" />
        <Mic size={20} color="#4285F4" />
        <Camera size={20} color="#4285F4" />
      </div>
      <div className="search-buttons">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
      <div className="lang-row">Google offered in: Yoruba Hausa Igbo Pidgin</div>
    </div>
  );
}
