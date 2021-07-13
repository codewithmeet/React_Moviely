import "./App.css";
import Header from "./components/Header/Header";
import HotFavouriteSection from "./components/HotFavouriteSection/HotFavouriteSection";
import MoviesSection from "./components/MoviesSection/MoviesSection";
import SearchBar from "./components/SearchBar/SearchBar";
import { Moviely, requests } from "./services/constants";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* SearchBar */}
      {/* <SearchBar /> */}
      {/* Movie Sections */}
      <div style={{ marginTop: "10vh" }}>
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
      </div>
    </div>
  );
}

export default App;
