import axios from 'axios';
const baseUrl = 'http://www.omdbapi.com/?apikey=fbc21677&type="movie"';

const getMoviesBySearch = async (searchText) => {
  const res = await axios.get(`${baseUrl}&s="${searchText}"`);
  // if Search prop is undefined error occurred (most likely too many results)
  return res.data.Search ? res.data.Search : [];
};

export default {
  getMoviesBySearch
};