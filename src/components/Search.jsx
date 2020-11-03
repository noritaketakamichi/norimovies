import React, { useState } from "react";
import axios from "axios";
// import fetch from "isomorphic-fetch";
import classNames from "classnames";
import "../styles/homebar.scss";

export default function Search(props) {

  const search = (e) => {
    console.log(e.target.value);
    props.settext(e.target.value);
  };

  return <input className="searchfield" type="text" placeholder="Search for..."　onKeyUp={search} />;
}
