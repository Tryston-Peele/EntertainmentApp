import React from "react";
import styles from "../../dist/output.css";
import data from "../../data.json";
import TrendingCard from "./TrendingCard";
import "./trendingstyles.css";
function Trending() {
  return (
    <div className="w-[2000px] h-[250px] flex justify-between items-center border-2 border-solid border-[black]">
      {data.movies.map((movie) => {
        if (movie.isTrending) {
          return (
            <TrendingCard
              title={movie.title}
              category={movie.category}
              year={movie.year}
              rating={movie.rating}
              src={movie.thumbnail.trending?.large}
              object={movie}
              bookmarked={movie.isBookmarked}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Trending;
