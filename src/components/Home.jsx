import React, { useState } from "react";
import axios from "axios";
// import fetch from "isomorphic-fetch";
import classNames from "classnames";
import "../styles/styles.scss";
import Search from "./Search";

export default function Home(props) {

  return (
    <div className="home">
      <p className="homelogo">Norisuke Movies</p>
    </div>
  );
}