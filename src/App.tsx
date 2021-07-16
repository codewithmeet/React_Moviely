import { useContext } from "react";
import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import MovieDisplayHOC from "./components/MovieDisplayHOC/MovieDisplayHOC";
import NotFound from "./components/NotFound/NotFound";
import { GlobalContext } from "./context/GlobalContext";
import useDebounce from "./hooks/useDebounce";
import { MultiSearch } from "./services/constants";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const { searchQuery, setData, setLoading } = useContext(GlobalContext);
  const debouncedSearchTerm: string = useDebounce<string>(searchQuery, 1100);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);

      MultiSearch(debouncedSearchTerm).then((results) => {
        setData(results.results);
        setLoading(false);
      });
    } else {
      setIsSearching(true);
    }
  }, [debouncedSearchTerm, setData]);

  return (
    <div className="App">
      {/* Header */}
      <Header />

      <Switch>
        <Route path="/movie-details/:movieId" component={MovieDetail} exact />
        <Route path="/" component={MovieDisplayHOC} exact />
        <Route path="/test" component={LoadingScreen} exact />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
