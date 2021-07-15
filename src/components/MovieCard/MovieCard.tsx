import { posterBaseURL } from "../../services/constants";
import "./MovieCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieCard = (props: {
  movieName: string;
  movieDate: string;
  moviePoster: string;
}) => {
  return (
    <div className="App__MovieCardWrapper">
      <LazyLoadImage
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
