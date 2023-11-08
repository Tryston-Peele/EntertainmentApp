import React from "react";
import "../App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function SideMenu() {
  return (
    <div className="sideMenuContainer">
      <Link to="/bookmarks">
        <button>bookmarks</button>
      </Link>
    </div>
  );
}

export default SideMenu;
