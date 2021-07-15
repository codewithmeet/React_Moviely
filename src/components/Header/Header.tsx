import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header = () => {
  const { setData } = useContext(GlobalContext);
  return (
    <div className="App__HeaderWrapper">
      <div className="App__HeaderContainer">
        <h2
          onClick={() => {
            setData([]);
          }}
        >
          React Moviely<span>.</span>
        </h2>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
