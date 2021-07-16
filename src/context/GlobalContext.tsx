import React, { useState } from "react";
import { MovieDetailInterface } from "../interface/movieDetail.interface";

interface Props {
  children: JSX.Element;
}

const movieDetailIntialState: MovieDetailInterface = {
  adult: false,
  backdrop_path: "",
  belongs_to_collection: "",
  budget: 0,
  genres: [],
  homepage: "",
  id: 0,
  imdb_id: "",
  original_language: "",
  original_title: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  production_companies: [],
  production_countries: [],
  release_date: "",
  revenue: 0,
  runtime: 0,
  spoken_languages: [],
  status: "",
  tagline: "",
  title: "",
  video: false,
  vote_average: 0,
  vote_count: 0,
  videos: { results: [] },
  images: { backdrops: [], logos: [], posters: [] },
  credits: { cast: [], crew: [] },
  recommendations: { page: 0, results: [], total_pages: 0, total_results: 0 },
};

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

  // Movie Details
  MovieDetail: movieDetailIntialState,
  setMovieDetail: (flag: any) => {},
});

const GlobalProvider = ({ children }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [isLoading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  const [MovieDetail, setMovieDetail] = useState(movieDetailIntialState);

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

        // Movie detail
        MovieDetail: MovieDetail,
        setMovieDetail: setMovieDetail,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
