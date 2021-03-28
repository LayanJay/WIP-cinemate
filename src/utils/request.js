const API_KEY = process.env.GATSBY_API_KEY

const request = {
    fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchImages: `https://image.tmdb.org/t/p/w1280`
}

export default request