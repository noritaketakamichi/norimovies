import React, { useEffect, useState } from 'react';
import Nowplaying from './Nowplaying';
import Navber from './Navber';
import Searchedmovie from './Searchedmovie.jsx';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import YouTube from '@u-wave/react-youtube';
import '../styles/movies.scss';

export default function MovieInfo(props) {
	const [selectedMovie, setselectedMovie] = useState([]);
	const [videoinfo, setvideoinfo] = useState([]);

	const { params } = props.match;
	const history = useHistory();

	useEffect(() => {
		let url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=222aa08dd47be356d45b65f113dd0c24&language=en-US`;
		axios.get(url).then((res) => {
			console.log(res.data);
			setselectedMovie(res.data);
		});

		let videourl = `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=222aa08dd47be356d45b65f113dd0c24&language=en-US`;
		axios.get(videourl).then((res) => {
			console.log(res.data);
			setvideoinfo(res.data.results);
		});
	}, []);

	const linkToInfo = (e) => {
		console.log(e);
		history.push('/');
		// return <Redirect  to={"/movie/1/"} />
	};

	return (
		<>
			<button onClick={linkToInfo}>Home</button>
			<p className="selectedMovieName">{selectedMovie.title}</p>
			<img className="selectedMovieImg" src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} />
			<div>
				{videoinfo.map((video) => {
					return <YouTube video={video.key} autoplay />;
				})}
			</div>
		</>
	);
}
