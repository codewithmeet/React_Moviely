import { posterBaseURL } from "../../services/constants";
import "./MovieCard.css";

const MovieCard = (props: {
  movieName: string;
  movieDate: string;
  moviePoster: string;
}) => {
  return (
    <div className="App__MovieCardWrapper">
      <img src={posterBaseURL + props.moviePoster} alt="test" />
      <div className="App__MovieCardDetails">
        <h4>{props.movieName}</h4>
        <p>{props.movieDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
