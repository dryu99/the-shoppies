import axios from 'axios';
const baseUrl = 'http://www.omdbapi.com/?apikey=fbc21677&type=movie';

const search = async (searchText, page=1) => {
  const res = await axios.get(`${baseUrl}&s=${searchText}&page=${page}`);
  if (requestSuccessful(res.data)) {
    return res.data.Search;
  } else {
    throw new Error(res.data.Error);
  }
};

const requestSuccessful = (omdbData) => {
  return omdbData.Response.toLowerCase() === 'true' ? true : false;
};

export default {
  search
};