import React, { useState } from "react";

export const GlobalContext = React.createContext({
  // Search Query
  searchQuery: "",
  searchHandler: (e: string) => {},

  // Loading Flag
  isLoading: true,
  setLoading: (flag: boolean) => {},

  // Data
  data: [],
  setData: (flag: any) => {},
});

interface Props {
  children: JSX.Element;
}

const GlobalProvider = ({ children }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const searchHandler = (searchQuery: string) => {
    setSearchQuery(searchQuery);
  };

  return (
    <GlobalContext.Provider
      value={{
        // Query
        searchHandler: searchHandler,
        searchQuery: searchQuery,

        // Loading Flag
        isLoading: isLoading,
        setLoading: setLoading,

        // Data
        data: data,
        setData: setData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
