import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import classNames from 'classnames';
import '../styles/movies.scss';
import { useHistory } from 'react-router-dom';

export default function Nowplaying(props) {
	const [movies, setmovies] = useState([]);

	const [focus, setfocus] = useState(false);

	const history = useHistory();

  //settings of slider
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
    slidesToShow: 5,
		slidesToScroll: 5,
	};

  useEffect(() => {
    let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=222aa08dd47be356d45b65f113dd0c24&language=en-US';
    axios.get(url).then((res) => {
      setmovies(res.data.results);
    });
  }, []);


	return (
		<div　className="test">
			<p className="movieName">Now Playing</p>
			<Slider  {...settings}>
					{movies.map((movie) => {
						let src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
						return (
              <div className="imageBox">
							<img
								className={classNames('imageCell', { big: focus })}
								src={src}
								onClick={(e) => {
									history.push(`/movie/${movie.id}/`);
								}}
							/>
              </div>
						);
					})}

      </Slider>
		</div>
	);
}
