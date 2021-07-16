import "./HotFavouriteSection.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPlay } from "react-icons/fa";
import { bannerBaseURL, posterBaseURL } from "../../services/constants";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import YoutubePlayer from "../Player/Player";
import MoviesSection from "../MoviesSection/MoviesSection";

const HotFavouriteSection = () => {
  const { MovieDetail } = useContext(GlobalContext);

  const styles = {
    backgroundSize: "cover",
    backgroundPosition: "right -80px top",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bannerBaseURL}/${MovieDetail.backdrop_path})`,
  };

  return (
    <div className="App__HotFavouriteSectionWrapper">
      <div className="App__HotFavouriteSectionContainer" style={styles}>
        <div className="App__HotFavouriteSection">
          <div className="App__HotFavouriteCardWrapper">
            <img
              src={`${posterBaseURL}/${MovieDetail.poster_path}`}
              alt="test"
            />
            <div className="App__HotFavouriteCardDetails">
              <h1>{MovieDetail.original_title}</h1>
              <span> Action, Adventure, Thriller</span>

              <h4 id="overviewdetails">{MovieDetail.tagline}</h4>
              <p>OVERVIEW</p>
              <h4>{MovieDetail.overview}</h4>
              <div className="App__HotFavouriteBottomBar">
                {/* Rating Container */}
                <div className="App__HotFavouriteRatingWrapper">
                  <div className="App__HotFavouriteRatingContainer">
                    <CircularProgressbar
                      styles={{
                        root: {
                          borderRadius: "100px",
                          boxShadow: " 0 0 10px #454569d0",
                        },
                        trail: {
                          stroke: "#454569",
                        },
                        path: {
                          stroke: "#7ba7c3",
                        },
                        text: {
                          color: "#7ba7c3",
                          fontWeight: "bold",
                        },
                      }}
                      value={MovieDetail.vote_average * 10}
                      text={`${MovieDetail.vote_average * 10}%`}
                    />
                  </div>
                  <h4>User Rating</h4>
                </div>
                {/* Play Trailer */}
                {/* <div className="App__HotFavouritePlayButton">
                {console.log(MovieTrailer.key)}
                <button className="HotFavouritePlayBtn">
                  <FaPlay /> <h4>Play Trailer</h4>
                </button>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {typeof MovieDetail.videos.results[0] !== "undefined" && (
        <div className="App__MovieTrailerContianer">
          <h2>🔥{MovieDetail.videos.results[0].name}🔥</h2>
          <YoutubePlayer />
        </div>
      )}
      {MovieDetail.recommendations.results.length !== 0 && (
        <MoviesSection
          sectionHeading="Recommendations🎥"
          url=""
          data={MovieDetail.recommendations.results}
        />
      )}
    </div>
  );
};

export default HotFavouriteSection;
