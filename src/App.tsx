import { useContext } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HotFavouriteSection from "./components/HotFavouriteSection/HotFavouriteSection";
import MoviesSection from "./components/MoviesSection/MoviesSection";
import SearchResults from "./components/SearchResults/SearchResults";
import { GlobalContext } from "./context/GlobalContext";
import useDebounce from "./hooks/useDebounce";
import { MultiSearch, requests } from "./services/constants";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const { searchQuery, setData, data } = useContext(GlobalContext);
  const debouncedSearchTerm: string = useDebounce<string>(searchQuery, 1100);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      MultiSearch(debouncedSearchTerm).then((results) => {
        setData(results.results);
        setIsSearching(false);
      });
    } else {
      setIsSearching(true);
    }
  }, [debouncedSearchTerm, setData]);

  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Results */}
      <div style={{ marginTop: "10vh" }}>
        {data.length !== 0 ? (
          <SearchResults />
        ) : (
          <>
            <MoviesSection
              sectionHeading="Trending Today🔥"
              url={requests.fetchTrendingToday}
            />
            <HotFavouriteSection />
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
            <HotFavouriteSection />
            <MoviesSection
              sectionHeading="Action Movies Of Time🐱‍🏍"
              url={requests.fetchAction}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
