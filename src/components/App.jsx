import React, { useEffect, useState } from 'react';
import Nowplaying from './Nowplaying';
import Navber from './Navber';
import Home from './Home';
import Searchedmovie from './Searchedmovie.jsx';
import axios from 'axios';
import '../styles/styles.scss';

export default function App() {
	//text in Navbar
	const [text, settext] = useState('');

	//return of API
	const [searchedResult, setsearchedResult] = useState([]);

	useEffect(() => {
		if (text !== '') {
			let url = `https://api.themoviedb.org/3/search/movie?api_key=222aa08dd47be356d45b65f113dd0c24&language=en-US&query=${text}`;
			axios.get(url).then((res) => {
				console.log(res.data.results);
				setsearchedResult(res.data.results);
			});
		}
	}, [text]);

	return (
		<>
    <Home/>
			<Navber  settext={settext} />
			{searchedResult.length === 0 ? (
				<div className="center">
					<Nowplaying />
				</div>
			) : (
				<Searchedmovie text={text} searchedResult={searchedResult} />
			)}
		</>
	);
}
