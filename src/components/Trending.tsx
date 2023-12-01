import React from "react";
import styles from "../../dist/output.css";
import data from "../../data.json";
import TrendingCard from "./TrendingCard";
import "./trendingstyles.css";
function Trending() {
  return (
    <div className="flex border-2 border-solid h-[200px] min-h-[200px] overflow-x-auto overfloww-y-hidden border-[red]">
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
