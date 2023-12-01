import React from "react";
import photo from "../../i";
import "./trendingstyles.css";

function TrendingCard({
  bookmarked,
  title,
  src,
  category,
  rating,
  year,
  object,
}) {
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
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-[380px] h-[200px] border-2 border-solid border-[black] inline-block"
    >
      {/* <button
        onClick={() => handleUpdate(object)}
        className="text-1xl font-bold underline"
      >
        click me
      </button> */}

      <div className="ml-[330px] mt-2.5 flex w-[25px] h-[25px] justify-center items-center bg-[#868686] rounded-[50%]">
        <img
          src={
            bookmarked
              ? "../../icon-bookmark-full.svg"
              : "../../icon-bookmark-empty.svg"
          }
          alt=""
          onClick={() => handleUpdate(object)}
        />{" "}
      </div>

      <div className="flex flex-row mt-[100px] ml-[20px]">
        <h6 className="text-[10px] text-[rgb(199,199,199)]">{year} • </h6>
        <img
          className="w-[10px] h-[10px]"
          src={
            category === "Movie"
              ? "../../icon-category-movie.svg"
              : "../../icon-category-tv.svg"
          }
          alt=""
        />
        <h6 className="text-[10px] text-[rgb(199,199,199)]">{category} • </h6>
        <h6 className="text-[10px] text-[rgb(199,199,199)]">{rating}</h6>
      </div>
      <h6 className="text-[15px] text-[rgb(248,248,248)] ml-[20px]">{title}</h6>
    </div>
  );
}

export default TrendingCard;
