import React from "react";
import { useState } from "react";

function MovieShell({ title, bookmarked, object }) {
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

  return (
    <>
      <div className="movieShell">
        {title}
        <button
          onClick={() => handleUpdate(object)}
          className="text-1xl font-bold underline"
        >
          click me
        </button>
      </div>
    </>
  );
}

export default MovieShell;
