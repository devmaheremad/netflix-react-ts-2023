const moviesRequest: { requestLink: string; title: string }[] = [
  {
    title: "Upcoming",
    requestLink: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=1`,
  },
  {
    title: "Top Rated",
    requestLink: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=1`,
  },
  {
    title: "Popular",
    requestLink: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=1`,
  },
];

export default moviesRequest;
