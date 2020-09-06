import React, { useState } from "react";
import axios from "axios";
// import fetch from "isomorphic-fetch";
import classNames from "classnames";
import "../styles/movies.scss";

export default function Nowplaying() {
  const [movies, setmovies] = useState([]);

  const [focus, setfocus] = useState(false);

  let url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=222aa08dd47be356d45b65f113dd0c24&language=en-US";
  axios.get(url).then((res) => {
    setmovies(res.data.results);
  });

  const bigger = () => {
    setfocus(true);
  };

  return (
    <div class="row">
      <div class="row__inner">
        {movies.map((movie) => {
          let src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          return (
            <img
              className={classNames("imageCell", { big: focus })}
              src={src}
              onFocus={bigger}
            />
          );
        })}
      </div>
    </div>
  );
}
