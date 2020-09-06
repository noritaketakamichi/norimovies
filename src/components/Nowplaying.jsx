import React,{useState} from "react";
import fetch from "isomorphic-fetch";
import "../styles/movies.scss";

export default function Nowplaying() {

  const [movies, setmovies] = useState([]);

  //array of nowplaying movie
  let movieData;
  let url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=222aa08dd47be356d45b65f113dd0c24&language=en-US";
  fetch(url)
  .then((res) => res.json())
  .then((res) => {
    setmovies(res.results);
  });

  return (
    <>
      {movies.map((movie) => {
        let src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        return <img className="imageCell" src={src} />;
      })}
    </>
  );
}
