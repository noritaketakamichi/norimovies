import React, { useEffect,useState } from "react";
import Nowplaying from "./Nowplaying";
import Navber from "./Navber";
import Searchedmovie from "./Searchedmovie.jsx";
import axios from "axios";

export default function App() {
  const [text, settext] = useState("");
  const [searchedResult, setsearchedResult] = useState([]);

  useEffect(() => {
    if (text !== "") {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=222aa08dd47be356d45b65f113dd0c24&language=en-US&query=${text}`;
      axios.get(url).then((res) => {
        console.log(res.data.results);
        setsearchedResult(res.data.results)
      });
    }
  }, [text]);

  return (
    <>
      <Navber settext={settext} />
      {searchedResult.length === 0 ? (
      <Nowplaying />
      ):(
        <Searchedmovie text={text} searchedResult={searchedResult}/>  
      )}
    </>
  );
}
