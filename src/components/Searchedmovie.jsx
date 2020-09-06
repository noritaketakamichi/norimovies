import React, { useState } from "react";
import axios from "axios";
import "../styles/movies.scss";

export default function Searchedmovie(props) {
  return (
      <>
      <p className="movieName">Result of {props.text}</p>
    <div>
      {props.searchedResult.map((movie) => {
        let src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        return (
            // <div className="movieInfo">
          <img
            className="imageCell"
            src={src}
          />
                    //   {/* <p className="movieName">{movie.original_title}</p> */}
            //  </div>
        );
      })}
    </div>  
    </>
  );
}
