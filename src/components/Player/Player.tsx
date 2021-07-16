import { useContext } from "react";
import "./Player.css";
import { GlobalContext } from "../../context/GlobalContext";
import ReactPlayer from "react-player";
import { GetMovieTrailerUrl, trailerThumbnail } from "../../services/constants";
const Player = () => {
  const { MovieDetail } = useContext(GlobalContext);
  const trailerKey = MovieDetail.videos.results[0].key;
  const trailerSite = MovieDetail.videos.results[0].site;
  const trailerLightPic = trailerThumbnail(trailerKey);

  const trailerUrl = GetMovieTrailerUrl(trailerKey, trailerSite);
  console.log(trailerSite);
  console.log(trailerUrl);

  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={trailerUrl}
        key={trailerSite}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Player;
