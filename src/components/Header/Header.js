import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>User Information Hub</h1>

      <nav>
        <a href="/home">Home</a>
        <a href="/people">Search for More Person </a>
        <a href="/exit">Exit</a>
      </nav>
    </div>
  );
};

export default Header;
