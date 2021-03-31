import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Movie from "./Movie"

const NowPlaying = () => {
  const [visible, setVisible] = useState(8)
  const data = useStaticQuery(pageQuery)
  const movies = data.nowPlaying.nodes
  return (
    <div>
      <h2>Now Playing</h2>
      <section className="flex flex-wrap justify-center">
        {movies?.slice(0, visible).map(movie => {
          if (movie?.poster_path) {
            return <Movie key={movie.id} movie={movie} />
          }
        })}
      </section>
    </div>
  )
}

const pageQuery = graphql`
  query {
    nowPlaying: allTmdbMiscNowPlayingMovies(
      sort: { fields: popularity, order: DESC }
      limit: 28
    ) {
      nodes {
        id
        original_title
        poster_path
      }
    }
  }
`

export default NowPlaying
