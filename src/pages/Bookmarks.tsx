import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      {bookmarks?.map((movie: any) => {
        if (movie.isBookmarked) {
          return <div>{movie?.title}</div>;
        }
      })}
    </div>
  );
}

export default Bookmarks;
