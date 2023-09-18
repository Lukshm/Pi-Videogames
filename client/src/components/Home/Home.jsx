import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllGenres,
  setGameByName,
  orderCards,
  setOrder,
  filterByGenre,
  gamesOrigin,
} from "../../Redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const genreRes = useSelector((state) => state.getAllGenres);
  const [filterGenres, setFilterGenres] = useState({
    genreOne: "select Genre One",
    genreTwo: "select Genre Two",
  });
  const [order, setLocalOrder] = useState("");

  useEffect(() => {
    dispatch(setAllGenres());
  }, [filterGenres]);

  const handleReset = () => {
    dispatch(setGameByName(""));
    dispatch(filterByGenre(""));
    dispatch(orderCards(""));
    dispatch(setOrder(""));
    setFilterGenres({
      genreOne: "select Genre One",
      genreTwo: "select Genre Two",
    })
  };
  const handleSort = (e) => {
    let selector = e.target.value;
    setLocalOrder(selector);
    dispatch(setOrder(selector));
  };
;
  const handleFilterOne = (e) => {
    setFilterGenres({
      ...filterGenres,
      genreOne: e.target.value,
    });
    dispatch(filterByGenre({
      ...filterGenres,
      genreOne: e.target.value
    }))
  };
  const handleFilterTwo = (e) => {
    setFilterGenres({
      ...filterGenres,
      genreTwo: e.target.value,
    });
    dispatch(filterByGenre({
      ...filterGenres,
      genreTwo: e.target.value
    }))
  };
  const filterOrigin = (e) => {
    const { value } = e.target;
    dispatch(gamesOrigin(value));
  };

  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.selectors}>
        <select value={order} onChange={handleSort}>
          {["Select order", "A-Z", "Z-A", "Best rated", "Least rated"].map(
            (order, index) => (
              <option key={index} value={order}>
                {order}
              </option>
            )
          )}
        </select>

        <select
          value={
            filterGenres.genreOne === "select Genre One"
              ? ""
              : filterGenres.genreOne
          }
          onChange={handleFilterOne}
        >
          <option disabled value="">
            Select Genre
          </option>
          {genreRes.map((genre) => {
            return (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            );
          })}
        </select>

        {filterGenres.genreOne !== "select Genre One" ? (
          <select
            value={
              filterGenres.genreTwo === "select Genre Two"
                ? ""
                : filterGenres.genreTwo
            }
            onChange={handleFilterTwo}
          >
            <option disabled value="">
              Select second Genre
            </option>
            <option value="">All</option>
            {genreRes.map((genre) => {
              return (
                <option key={genre.id} value={genre.name}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        ) : null}

        <select name="Origin" onChange={filterOrigin}>
          <optgroup label="Origin">
            <option value="api">API</option>
            <option value="db">DB</option>
          </optgroup>
        </select>

        <button onClick={handleReset}>Reset</button>

      </div>

      <Cards />
    </div>
  );
};

export default Home;
