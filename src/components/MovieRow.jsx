import React, { useState } from "react"

import Movie from "../components/Movie"

function MovieRow({ title, getURL }) {
  const [movies, setMovies] = useState([])

  return (
    <div>
      <h1>{title}</h1>
      {/* <section>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </section> */}
    </div>
  )
}

export default MovieRow
