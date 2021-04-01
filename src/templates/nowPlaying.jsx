import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const MovieTemplate = ({ data }) => {
  const movie = data.movie
  const {
    original_language,
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
    vote_count,
  } = movie

  const imagePath = `https://image.tmdb.org/t/p/w500${poster_path}`
  return (
    <Layout>
      <SEO title={original_title} description={overview} />
      <Header />
      <h1>{original_title}</h1>
      <img src={imagePath} alt={original_title} />
      <p>{original_language}</p>
      <p>{vote_average}</p>
      <p>{vote_count}</p>
    </Layout>
  )
}

export default MovieTemplate

export const pageQuery = graphql`
  query($id: String!) {
    movie: tmdbMiscNowPlayingMovies(id: { eq: $id }) {
      id
      original_language
      original_title
      overview
      poster_path
      release_date(formatString: "MMM DD YYYY")
      vote_average
      vote_count
    }
  }
`
