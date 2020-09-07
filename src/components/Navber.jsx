import React, { useState } from "react";
import axios from "axios";
// import fetch from "isomorphic-fetch";
import classNames from "classnames";
import "../styles/navber.scss";
import Search from "./Search";

export default function Navber(props) {

  return (
    <div class="navber">
      <Search settext={props.settext}/>
    </div>
  );
}