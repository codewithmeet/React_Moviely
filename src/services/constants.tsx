import axios from "axios";

const apiKey = "e1666ee2389596938c1171ebf31e74b8";

// Poster BaseUrl
export const posterBaseURL =
  "https://www.themoviedb.org/t/p/w440_and_h660_face";

// Banner BaseUrl
export const bannerBaseURL =
  "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/";

// Trailer Video

// Trailer ThumbNail Url
export const trailerThumbnail = (trailerId: string | undefined) =>
  `i.ytimg.com/vi/${trailerId}/original.jpg`;

export const Moviely = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const requests = {
  // Trendings
  fetchTrendingToday: `/trending/movie/day?api_key=${apiKey}&language=en-US`,
  fetchTrendingWeek: `/trending/movie/week?api_key=${apiKey}&language=en-US`,

  // upcoming
  fetchUpcoming: `/movie/upcoming?api_key=${apiKey}&language=en-US`,

  // Horror
  fetchHorror: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=27`,

  // Romance
  fetchRomance: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=10749`,

  // Action
  fetchAction: `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=28`,
};

export const MultiSearch = async (search: string) => {
  const response = Moviely.get(
    `/search/multi?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
  );

  return (await response).data;
};

export const GetMovieDetails = async (movieId: string | undefined) => {
  const response = Moviely.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos,images,credits,recommendations`
  );

  return (await response).data;
};

export const GetMovieTrailerUrl = (trailerKey: string, trailerSite: string) => {
  if (trailerSite === "YouTube") {
    return `https://youtu.be/${trailerKey}`;
  }
};
