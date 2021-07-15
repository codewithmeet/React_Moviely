import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import MovieCard from "../MovieCard/MovieCard";
import "./SearchResults.css";

const SearchResults = () => {
  const { data } = useContext(GlobalContext);

  console.log(data);

  return (
    <div className="App__SearchResultsWrapper">
      <div className="App__SearchResultsContainer">
        {data?.map((e: any) => {
          if (e.poster_path === null || typeof e.poster_path === "undefined") {
            return false;
          }
          if (
            e.original_title === null ||
            typeof e.original_title === "undefined"
          ) {
            return false;
          }
          return (
            <MovieCard
              moviePoster={e.poster_path}
              movieName={e.original_title}
              movieDate={e.release_date}
              key={e.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
