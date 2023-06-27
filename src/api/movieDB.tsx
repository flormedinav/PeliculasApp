import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '724b938c70210273180555ea78baf57d',
    language: 'es-ES',
  },
});

export default movieDB;
