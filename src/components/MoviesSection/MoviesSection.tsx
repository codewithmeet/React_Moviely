import { useState } from "react";
import { useEffect } from "react";
import { Moviely } from "../../services/constants";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesSection.css";
import { useHistory } from "react-router";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const MoviesSection = (props: {
  sectionHeading: string;
  url: string;
  data?: any;
}) => {
  const { setLoading } = useContext(GlobalContext);
  const [Movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        if (typeof props.data !== "undefined") {
          return setMovies(props.data);
        } else {
          const response = await Moviely.get(props.url);
          return setMovies(response.data.results);
        }
      } catch (error) {
        return history.push("/404");
      }
    })();
  }, [props.url]);

  return (
    <div className="App__MoviesSectionWrapper">
      <h2>{props.sectionHeading}</h2>
      <div className="App__MovieSection">
        {Movies?.map((e: any) => (
          <MovieCard
            moviePoster={e.poster_path}
            movieName={e.original_title}
            movieDate={e.release_date}
            movieId={e.id}
            key={e.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
