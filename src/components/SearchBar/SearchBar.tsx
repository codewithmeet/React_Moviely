import { useContext, useState } from "react";
import "./SearchBar.css";
import { RiSearchEyeLine } from "react-icons/ri";

const SearchBar = () => {
  const [open, set] = useState(false);
  return (
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
          type="text"
          placeholder="Enter Movie Name..."
        />
        <span onClick={() => set((open) => !open)}>
          <RiSearchEyeLine size={20} />
        </span>
      </div>
    </form>
  );
};

export default SearchBar;
