import React, { useEffect, useState } from "react"

import Movie from "../components/Movie"

import fetcher from "../utils/fetcher"

function MovieRow({ title, getURL }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getMovies() {
      const results = await fetcher
        .get(getURL)
        .then(({ data }) => setMovies(data.results))
      return results
    }

    getMovies()
  }, [getURL])
  return (
    <div>
      <h1>{title}</h1>
      <section>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  )
}

export default MovieRow
