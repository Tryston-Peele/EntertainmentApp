import React from "react";
import { useState } from "react";

function MovieShell({
  title,
  bookmarked,
  object,
  rating,
  category,
  src,
  year,
}) {
  const handleUpdate = async (movie: any) => {
    console.log("testing");
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
      <div className="w-[250px] h-[210px] bg-[rgb(0,4,27)] mr-[30px] flex flex-col">
        <div
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[250px] h-[150px] "
        >
          <div className="ml-[200px] mt-2.5 flex w-[25px] h-[25px] justify-center items-center bg-[#868686] rounded-[50%]">
            <img
              src={
                bookmarked
                  ? "../../icon-bookmark-full.svg"
                  : "../../icon-bookmark-empty.svg"
              }
              alt=""
              onClick={() => handleUpdate(object)}
            />
          </div>
        </div>

        <div className="flex flex-row">
          <h6 className="text-[10px] text-[rgb(199,199,199)] mr-[2px]">
            {year} •
          </h6>
          <img
            className="w-[10px] h-[10px] mr-[2px]"
            src={
              category === "Movie"
                ? "../../icon-category-movie.svg"
                : "../../icon-category-tv.svg"
            }
            alt=""
          />
          <h6 className="text-[10px] text-[rgb(199,199,199)] mr-[2px]">
            {category} •
          </h6>
          <h6 className="text-[10px] text-[rgb(199,199,199)]">{rating}</h6>
        </div>
        <h6 className="text-[15px] text-[rgb(248,248,248)]">{title}</h6>
      </div>
    </>
  );
}

export default MovieShell;
