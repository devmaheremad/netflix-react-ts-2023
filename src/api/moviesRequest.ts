const moviesRequest: { requestLink: string; title: string }[] = [
  // {
  //   title: "Upcoming",
  //   requestLink: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`,
  // },
  // {
  //   title: "Top Rated",
  //   requestLink: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`,
  // },
  {
    title: "Popular",
    requestLink: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`,
  },
  {
    title: "Comedy",
    requestLink: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=35`,
  },
  {
    title: "Horror",
    requestLink: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=27`,
  },
];

export default moviesRequest;
