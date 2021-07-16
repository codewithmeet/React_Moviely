import "./MovieDetail.css";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetMovieDetails } from "../../services/constants";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { bannerBaseURL } from "../../services/constants";
import HotFavouriteSection from "../HotFavouriteSection/HotFavouriteSection";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import SearchResults from "../SearchResults/SearchResults";

interface URIParams {
  movieId: string | undefined;
}

const MovieDetail = () => {
  const params = useParams<URIParams>();
  const history = useHistory();
  const { MovieDetail, setMovieDetail, data } = useContext(GlobalContext);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      !params.movieId ||
      typeof params.movieId === null ||
      typeof params.movieId === undefined
    )
      return history.push("/");
    (async () => {
      setLoading(true);
      try {
        const details = await GetMovieDetails(params.movieId);
        setMovieDetail(details);

        setLoading(false);
      } catch (error) {
        history.push("/");
      }
    })();
  }, [params.movieId]);

  const styles = {
    backgroundSize: "cover",
    backgroundPosition: "right -100px top",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bannerBaseURL}/${MovieDetail.backdrop_path})`,
  };

  return (
    <>
      {data.length !== 0 ? (
        <div style={{ marginTop: "10vh" }}>
          <SearchResults />
        </div>
      ) : (
        <div className="App__MovieDetailWrapper">
          <div className="App__MovieDetailContainer">
            {Loading ? <LoadingScreen /> : <HotFavouriteSection />}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
