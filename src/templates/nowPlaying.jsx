import { graphql, Link } from "gatsby"
import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import SimilarMovie from "../components/SimilarMovie"

const MovieTemplate = ({ data }) => {
  const [simiMovies, setSimiMovies] = useState([])

  const movie = data.movie
  const {
    miscNowPlayingMoviesId,
    original_language,
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
    vote_count,
  } = movie

  const imagePath = `https://image.tmdb.org/t/p/w500${poster_path}`

  useEffect(() => {
    const getSimilarMovies = async () => {
      const url = `https://api.themoviedb.org/3/movie/${miscNowPlayingMoviesId}/similar?api_key=${process.env.GATSBY_API_KEY}&language=en-US&page=1`

      const res = await fetch(url)
      const data = await res.json()
      const similarMovies = await data.results.map(item => item)
      setSimiMovies(similarMovies)
    }

    getSimilarMovies()
  }, [])

  console.log(simiMovies)

  return (
    <Layout>
      <SEO title={title} description={overview} />
      <Header />

      <section className="lg:mx-8 md:mx-5 mx-2 py-8 font-primary">
        <section className="grid grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-6 place-items-center">
          <div className="lg:col-span-1 flex justify-center items-start">
            <img
              className="shadow-2xl rounded-2xl"
              src={imagePath}
              alt={title}
            />
          </div>
          <div className="lg:col-span-2 flex flex-col justify-center items-baseline bg-gray-900 rounded-2xl shadow-2xl md:p-5 py-5 px-2">
            <div className="mb-5">
              <Link
                className="bg-indigo-700 hover:bg-white hover:text-gray-900 focus:outline-none font-medium transition ease-in py-2 px-4 mr-3 mb-3 rounded-3xl shadow-lg"
                to="/"
              >
                Go Back
              </Link>
            </div>
            <h1 className="font-bold lg:text-5xl md:text-3xl text-2xl mb-5">
              {title}
            </h1>
            <p className="leading-7 font-medium text-lg mb-4">{overview}</p>
            <p className="leading-7 font-normal mb-3">
              Release Date: {release_date}
            </p>
            <p className="leading-7 font-normal mb-4">
              Original Language:{" "}
              {original_language === "en" ? `English` : `${original_language}`}
            </p>
            <form className="flex flex-wrap mb-4">
              <input
                className="py-2 px-4 mr-2"
                type="range"
                min="0"
                max="10"
              ></input>
              <p className="mr-2">{/* rate value */}</p>
              <button
                type="button"
                className="bg-indigo-700 hover:bg-white hover:text-gray-900 focus:outline-none font-medium transition ease-in py-2 px-4 mr-2 rounded-3xl shadow-lg"
              >
                Rate
              </button>
            </form>
            <div className="flex flex-wrap">
              <p className="bg-white text-gray-900 font-medium py-2 px-4 mr-3 mb-3 rounded-3xl shadow-lg">
                Vote Average: {vote_average}
              </p>
              <p className="bg-white text-gray-900 font-medium py-2 px-4 mr-3 mb-3 rounded-3xl shadow-lg">
                Vote Count: {vote_count}
              </p>
            </div>

            {/* similar movies */}
            <section className="w-full flex flex-wrap md:justify-start justify-evenly">
              {simiMovies.slice(0, 6).map(movie => (
                <SimilarMovie key={movie.id} movie={movie} />
              ))}
            </section>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default MovieTemplate

export const pageQuery = graphql`
  query($id: String!) {
    movie: tmdbMiscNowPlayingMovies(id: { eq: $id }) {
      miscNowPlayingMoviesId
      original_language
      title
      overview
      poster_path
      release_date(formatString: "MMM DD YYYY")
      vote_average
      vote_count
    }
  }
`
