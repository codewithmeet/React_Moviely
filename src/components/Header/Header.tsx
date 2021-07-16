import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header = () => {
  const { setData } = useContext(GlobalContext);
  const handleClick = () => {
    setData([]);
  };

  return (
    <div className="App__HeaderWrapper">
      <div className="App__HeaderContainer">
        <h2 onClick={handleClick}>
          <Link to="/">
            React Moviely<span>.</span>
          </Link>
        </h2>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
