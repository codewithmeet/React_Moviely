import { MouseEvent } from "react";
import { posterBaseURL } from "../../services/constants";
import "./MovieCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useHistory } from "react-router";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const MovieCard = (props: {
  movieName: string;
  movieDate: string;
  moviePoster: string;
  movieId: number;
}) => {
  const history = useHistory();
  const { setData } = useContext(GlobalContext);

  const handleClick = (e: MouseEvent) => {
    setData([]);
    history.push(`/movie-details/${e.currentTarget.id}`);
  };

  return (
    <div className="App__MovieCardWrapper">
      <LazyLoadImage
        id={`${props.movieId}`}
        onClick={handleClick}
        alt={`${props.movieName} poster`}
        src={posterBaseURL + props.moviePoster}
        effect="black-and-white"
        delayTime={5000}
      />

      <div className="App__MovieCardDetails">
        <h4>{props.movieName}</h4>
        <p>{props.movieDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
