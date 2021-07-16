import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { requests } from "../../services/constants";
import HotFavouriteSection from "../HotFavouriteSection/HotFavouriteSection";
import MoviesSection from "../MoviesSection/MoviesSection";
import SearchResults from "../SearchResults/SearchResults";

const MovieDisplayHOC = () => {
  const { data } = useContext(GlobalContext);

  return (
    <div style={{ marginTop: "10vh" }}>
      {data.length !== 0 ? (
        <SearchResults />
      ) : (
        <>
          <MoviesSection
            sectionHeading="Trending Today🔥"
            url={requests.fetchTrendingToday}
          />

          <MoviesSection
            sectionHeading="Trending This Week🚀"
            url={requests.fetchTrendingWeek}
          />
          <MoviesSection
            sectionHeading="Spooky Horror👻"
            url={requests.fetchHorror}
          />
          <MoviesSection
            sectionHeading="Top Romance Movies❤️"
            url={requests.fetchRomance}
          />

          <MoviesSection
            sectionHeading="Action Movies Of Time🐱‍🏍"
            url={requests.fetchAction}
          />
        </>
      )}
    </div>
  );
};

export default MovieDisplayHOC;
