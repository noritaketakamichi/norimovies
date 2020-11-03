import React, { useState } from "react";
import axios from "axios";
import "../styles/movies.scss";
import { useHistory } from 'react-router-dom';


export default function Searchedmovie(props) {
    const history = useHistory();
  return (
      <>
      <p className="movieName">Result of {props.text}</p>
    <div>
      {props.searchedResult.map((movie) => {
        let src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        return (
            // <div className="movieInfo">
          <img
            className="searchedmovie"
            src={src}
                          onClick={e=>{
                console.log(movie)
                history.push(`/movie/${movie.id}/`)
              }}
          />
                    //   {/* <p className="movieName">{movie.original_title}</p> */}
            //  </div>
        );
      })}
    </div>  
    </>
  );
}
