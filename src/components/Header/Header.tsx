import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="App__HeaderWrapper">
      <div className="App__HeaderContainer">
        <h2>
          React Moviely<span>.</span>
        </h2>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
