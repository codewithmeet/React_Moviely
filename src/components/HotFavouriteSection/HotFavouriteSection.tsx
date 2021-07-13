import "./HotFavouriteSection.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPlay } from "react-icons/fa";

const HotFavouriteSection = () => {
  const url =
    "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg";

  const poster =
    "https://www.themoviedb.org/t/p/w440_and_h660_face/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg";

  const styles = {
    backgroundSize: "cover",
    backgroundPosition: "right -100px top",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${url})`,
  };

  return (
    <div className="App__HotFavouriteSectionWrapper" style={styles}>
      <div className="App__HotFavouriteSectionContainer">
        <div className="App__HotFavouriteCardWrapper">
          <img src={poster} alt="test" />
          <div className="App__HotFavouriteCardDetails">
            <h1>
              Black Widow <span>Action, Adventure, Thriller</span>
            </h1>

            <h4 id="overviewdetails">She's Done Running From Her Past.</h4>
            <p>OVERVIEW</p>
            <h4>
              Natasha Romanoff, also known as Black Widow, confronts the darker
              parts of her ledger when a dangerous conspiracy with ties to her
              past arises. Pursued by a force that will stop at nothing to bring
              her down, Natasha must deal with her history as a spy and the
              broken relationships left in her wake long before she became an
              Avenger.
            </h4>
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
                    value={90}
                    text={"90%"}
                  />
                </div>
                <h4>User Rating</h4>
              </div>
              {/* Play Trailer */}
              <div className="App__HotFavouritePlayButton">
                <button id="HotFavouritePlayBtn">
                  <FaPlay /> <h4>Play Trailer</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotFavouriteSection;
