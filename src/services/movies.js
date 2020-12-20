// this module is used for communicating with omdb api
const baseUrl = 'https://www.omdbapi.com/?apikey=fbc21677&type=movie';

const search = async (searchText, page=1) => {
  const response = await fetch(`${baseUrl}&s=${searchText}&page=${page}`);
  const data = await response.json();

  if (requestSuccessful(data)) {
    // do a filter check b/c api sometimes returns duplicate ids
    return {
      movies: filterOutDuplicateMovies(data.Search),
      total: data.totalResults,
      error: null
    };
  } else {
    throw new Error(data.Error);
  }
};

const requestSuccessful = (omdbData) => {
  return omdbData.Response.toLowerCase() === 'true';
};

const filterOutDuplicateMovies = (movies) => {
  return Object.values(movies.reduce((acc, curr) => {
    if (!acc[curr.imdbID]) {
      acc[curr.imdbID] = curr;
    }

    return acc;
  }, {}));
};

export default {
  search
};