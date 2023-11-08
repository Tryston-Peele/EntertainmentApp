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

// function searchMovie() {
//   const newArray = data.map((movie) => {
//     return movie.title;
//   });
//   console.log(newArray);
// }

// const newArray = data.map((movie) => {
//   return movie.title;
// });

function Home({}) {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({ title: "testing", id: "34" });

  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/movies", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     // Assuming you want to handle the response (e.g., display a success message)
  //     const data = await response.json();
  //     console.log("Response from JSON Server:", data);

  //     // Clear the form inputs
  //     setFormData({ title: "", id: "" });
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }

  // };

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

  function handleSearch() {
    // let renderedElement;
    // if (search === "") {
    //   renderedElement = movies.map((movie) => {
    //     if (!movie.isTrending) {
    //       return (
    //         <MovieShell
    //           title={movie.title}
    //           bookmarked={movie.isBookmarked}
    //           object={movie}
    //         />
    //       );
    //     }
    //   });
    // } else {
    //   renderedElement = data.map((movie) => {
    //     if (movie.title.toLowerCase().includes(search.toLowerCase())) {
    //       return <MovieShell title={movie.title} />;
    //     }
    //   });
    // }
  }

  let renderedElement;

  if (search === "") {
    renderedElement = movies.map((movie: any) => {
      if (!movie.isTrending) {
        return (
          <MovieShell
            title={movie.title}
            bookmarked={movie.isBookmarked}
            object={movie}
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
          />
        );
      }
    });
  }

  return (
    <>
      {/* <div className="content">
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => console.log(newArray)}>test</button>
        <Trending />;<div className="movieContainer">{renderedElement}</div>
      </div> */}

      <div>
        <input
          className="border-2 border-solid border-[black]"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Trending />

        {renderedElement}
        {movies?.map((movie: any) => {
          return (
            <>
              {/* <div key={movie?.title}>{movie?.title}</div>;
              <button onClick={() => handleUpdate(movie)}>click me</button> */}
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;
