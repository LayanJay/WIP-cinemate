import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import GetSimilarMovies from "../components/GetSimilarMovies"
import GetMovieCredits from "../components/GetMovieCredits"
import PostMovieRating from "../components/PostMovieRating"

const MovieTemplate = ({ data }) => {
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

  return (
    <Layout>
      <SEO title={title} description={overview} />
      <Header />

      <section className="relative lg:mx-8 md:mx-5 mx-2 py-8 font-primary">
        <section className="grid grid-rows-1 grid-cols-1 lg:grid-cols-9 gap-6 mb-5">
          <div className="lg:col-span-3 flex justify-center items-start bg-gray-900 rounded-2xl shadow-2xl md:p-4 p-3">
            <img
              className="shadow-2xl rounded-2xl w-80"
              src={imagePath}
              alt={title}
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center items-baseline bg-gray-900 rounded-2xl shadow-2xl md:p-5 py-5 px-3">
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

            {/* posting movie ratings */}
            <PostMovieRating movieID={miscNowPlayingMoviesId} />

            <div className="flex flex-wrap">
              <p className="bg-white text-gray-900 font-medium text-sm py-2 px-4 mr-3 mb-3 rounded-3xl shadow-lg">
                Vote Average: {vote_average}
              </p>
              <p className="bg-white text-gray-900 font-medium text-sm py-2 px-4 mr-3 mb-3 rounded-3xl shadow-lg">
                Vote Count: {vote_count}
              </p>
            </div>
          </div>
        </section>

        {/* credits */}
        <GetMovieCredits movieID={miscNowPlayingMoviesId} />

        {/* similar movies */}
        <GetSimilarMovies movieID={miscNowPlayingMoviesId} />
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
