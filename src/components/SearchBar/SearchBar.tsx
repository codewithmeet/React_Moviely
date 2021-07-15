import { useContext, useState, useRef, useEffect } from "react";
import "./SearchBar.css";
import { RiSearchEyeLine } from "react-icons/ri";
import OutsideClickHandler from "react-outside-click-handler";
import { GlobalContext } from "../../context/GlobalContext";

const SearchBar = () => {
  const { searchQuery, searchHandler } = useContext(GlobalContext);
  const [open, set] = useState(false);
  const searchBarRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: any) => {
    searchHandler(e.target.value);
  };

  useEffect(() => {
    if (!open) {
      searchHandler("");
    }
    return () => {};
  }, [open, searchHandler]);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        set((open) => false);
        searchHandler("");
      }}
    >
      <div className="App__SearchBarWrapper">
        <form
          autoComplete="off"
          autoCapitalize="sentences"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="App__InputContainer">
            <input
              id={open ? "active" : "inActive"}
              ref={searchBarRef}
              type="text"
              placeholder="Enter Movie Name..."
              onChange={handleInput}
              value={searchQuery}
            />
            <span onClick={() => set((open) => !open)}>
              <RiSearchEyeLine size={20} />
            </span>
          </div>
        </form>
      </div>
    </OutsideClickHandler>
  );
};

export default SearchBar;
