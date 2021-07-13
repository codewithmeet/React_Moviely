import { useState } from "react";
import { ReactPropTypes, useEffect } from "react";
import { Moviely, requests } from "../../services/constants";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesSection.css";

const MoviesSection = (props: { sectionHeading: string; url: string }) => {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await Moviely.get(props.url);
      setMovies(response.data.results);
      console.log(response);
    })();
  }, []);

  return (
    <div className="App__MoviesSectionWrapper">
      <h2>{props.sectionHeading}</h2>
      <div className="App__MovieSection">
        {Movies.map((e: any) => (
          <MovieCard
            moviePoster={e.poster_path}
            movieName={e.original_title}
            movieDate={e.release_date}
            key={e.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
