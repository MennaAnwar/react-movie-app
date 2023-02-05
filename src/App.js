import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import Details from "./components/details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("man");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=dcb4641c`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="container-fluid movie-app">
          <Routes>
            <Route
              path="*"
              element={
                <>
                  <div className="row d-flex align-items-center mt-4 mb-4">
                    <MovieListHeading heading="Movies" />
                    <SearchBox
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                    />
                  </div>
                  <MovieList movies={movies} />
                </>
              }
            />
            <Route
              path="/details/:id"
              element={
                <>
                  <div className="row d-flex align-items-center mt-4 mb-4">
                    <div className="col-1">
                      <Link to="*">
                        <box-icon type="regular" name="arrow-back"></box-icon>
                      </Link>
                    </div>
                    <MovieListHeading heading="Movies" />
                  </div>
                  <Details />
                </>
              }
            />
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
