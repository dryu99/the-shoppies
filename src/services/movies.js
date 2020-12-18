const baseUrl = 'http://www.omdbapi.com/?apikey=fbc21677&type=movie';

const search = async (searchText, page=1) => {
  const response = await fetch(`${baseUrl}&s=${searchText}&page=${page}`);
  const data = await response.json();

  if (requestSuccessful(data)) {
    return data.Search;
  } else {
    throw new Error(data.Error);
  }
};

const requestSuccessful = (omdbData) => {
  return omdbData.Response.toLowerCase() === 'true' ? true : false;
};

export default {
  search
};