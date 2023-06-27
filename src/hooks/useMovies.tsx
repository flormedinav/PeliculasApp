import {useEffect, useState} from 'react';

import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([]);

  const getMovies = async () => {
    const response = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setMoviesInCinema(response.data.results);

    setIsLoading(false);
  };

  useEffect(() => {
    //now_playing
    getMovies();
  }, []);

  return {
    moviesInCinema,
    isLoading,
  };
};
