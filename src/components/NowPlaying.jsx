import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Movie from './Movie'

const NowPlaying = () => {
  const [visible, setVisible] = useState(8)
  const data = useStaticQuery(pageQuery)
  const movies = data.nowPlaying.nodes

  const handleClick = () => setVisible(prev => prev + 8)
  return (
    <div className="font-primary py-10 ">
      <h2 className="font-semibold text-4xl text-center py-4 mb-4 mx-auto border-b-2 border-white max-w-xs">
        Now Playing
      </h2>
      <section className="flex flex-wrap justify-center">
        {movies?.slice(0, visible).map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </section>
      <div className="flex justify-center py-5">
        <button
          type="button"
          onClick={handleClick}
          className="bg-indigo-700 hover:bg-white hover:text-gray-900 focus:outline-none font-medium transition ease-in py-2 px-4 rounded-3xl shadow-lg"
        >
          View More
        </button>
      </div>
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
        title
        poster_path
      }
    }
  }
`

export default NowPlaying
