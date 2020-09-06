import React, { useState } from "react";
import axios from "axios";
// import fetch from "isomorphic-fetch";
import classNames from "classnames";
import "../styles/movies.scss";
import { useHistory } from 'react-router-dom';

export default function Nowplaying(props) {
  const [movies, setmovies] = useState([]);

  const [focus, setfocus] = useState(false);

const history = useHistory();

  let url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=222aa08dd47be356d45b65f113dd0c24&language=en-US";
  axios.get(url).then((res) => {
    setmovies(res.data.results);
  });

  const linkToInfo = (e) => {
    
    console.log(e)
    history.push("/movie/1/")
    // return <Redirect  to={"/movie/1/"} />
  };

  return (
    <>
    <p className="movieName">Now Playing</p>
    <div class="row">
      <div class="row__inner">
        {movies.map((movie) => {
          let src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          return (
            <img
              className={classNames("imageCell", { big: focus })}
              src={src}
              onClick={e=>{
                console.log(movie)
                history.push(`/movie/${movie.id}/`)
              }}
            />

          );
        })}
      </div>
    </div>
    </>
  );
}
