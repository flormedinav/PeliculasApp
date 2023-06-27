import {useState, useEffect} from 'react';

import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailResponse, castResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailResponse.data,
      cast: castResponse.data.cast,
    });
  };

  //Con el useEffect nos aseguramos que cuando llame a la customHooks se mande la petición
  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
