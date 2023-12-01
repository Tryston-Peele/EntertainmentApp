import React from "react";
import { useState, useEffect } from "react";
import Trending from "../components/Trending";
// import data from "../../data.json";
import "../App.css";
import SideMenu from "../components/SideMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookmarks from "./Bookmarks";
import MovieShell from "../components/MovieShell";
import axios from "axios";
import TrendingCard from "../components/TrendingCard";

function Home({}) {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({ title: "testing", id: "34" });

  const handleUpdate = async (movie: any) => {
    if (movie.isBookmarked) {
      try {
        const response = await fetch(
          `http://localhost:3000/movies/${movie.id}`,
          {
            method: "PATCH", // Use 'PUT' if you want to replace the entire object
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ isBookmarked: false }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        console.log("Post updated successfully");

        // Clear the input field
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (!movie.isBookmarked) {
      try {
        const response = await fetch(
          `http://localhost:3000/movies/${movie.id}`,
          {
            method: "PATCH", // Use 'PUT' if you want to replace the entire object
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ isBookmarked: true }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        console.log("Post updated successfully");

        // Clear the input field
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response: any) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  let renderedElement;

  if (search === "") {
    renderedElement = movies.map((movie: any) => {
      if (!movie.isTrending) {
        return (
          <MovieShell
            title={movie.title}
            bookmarked={movie.isBookmarked}
            object={movie}
            rating={movie.rating}
            category={movie.category}
            year={movie.year}
            src={movie.thumbnail.regular.medium}
          />
        );
      }
    });
  } else {
    renderedElement = movies.map((movie: any) => {
      if (movie.title.toLowerCase().includes(search.toLowerCase())) {
        return (
          <MovieShell
            title={movie.title}
            bookmarked={movie.isBookmarked}
            object={movie}
            rating={movie.rating}
            category={movie.category}
            year={movie.year}
            src={movie.thumbnail.regular.medium}
          />
        );
      }
    });
  }

  return (
    <>
      <div className=" flex w-full flex-col border-2 border-solid border-[blue] bg-[rgb(0,4,27)]">
        <div className=" flex flex-row mt-[20px]">
          <img
            className="w-[20px] h-[20px]"
            src="../../icon-search.svg"
            alt=""
          />
          <input
            placeholder="Search for movies or TV series"
            className="border-2 border-solid border-[black] text-[15px] w-[300px] h-[20px] bg-[rgb(0,4,27)] "
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Trending />
        <h1>Recomended for you</h1>
        <div className="flex flex-row flex-wrap border-2 border-solid border-[red]">
          {renderedElement}
        </div>
      </div>

      {/* <div className="flex flex-col border-solid border-[blue]">
        <div className="flex flex-row mt-[20px]">
          <img
            className="w-[20px] h-[20px]"
            src="../../icon-search.svg"
            alt=""
          />
          <input
            placeholder="Search for movies or TV series"
            className="border-2 border-solid border-[black] text-[15px] w-[250px] bg-[rgb(0,4,27)] "
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Trending />
        <h1>Recomended for you</h1>
        <div className="flex flex-row flex-wrap border-2 border-solid border-[red]">
          {renderedElement}
        </div>
      </div> */}
    </>
  );
}

export default Home;
