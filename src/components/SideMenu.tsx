import React from "react";
import "../App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function SideMenu() {
  return (
    <div className="h-[600px] bg-[#202d41] items-center flex-[0_0_130px] border-2 border-solid border-[black] ml-[30px] mr-[20px]">
      <Link to="/">
        <img
          src="../../icon-nav-home.svg"
          alt=""
          className="mt-[10px] mb-[20px] ]"
        />
      </Link>

      <Link to="/bookmarks">
        <img src="../../icon-bookmark-full.svg" alt="" />
      </Link>
    </div>
  );
}

export default SideMenu;
