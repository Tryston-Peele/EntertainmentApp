import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SideMenu from "../components/SideMenu";
import MovieShell from "../components/MovieShell";
function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response: any) => {
        setBookmarks(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div className="bg-[rgb(0,4,27)] flex flex-row w-[1000px] h-[1000px]">
      <div>
        <h1>Recomended for you</h1>
        <div className="flex flex-row flex-wrap border-2 border-solid border-[black] ">
          {bookmarks?.map((movie: any) => {
            if (movie.isBookmarked) {
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
          })}
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
