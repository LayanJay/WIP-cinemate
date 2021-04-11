import React, { useEffect, useState } from "react"
import SimilarMovie from "../components/SimilarMovie"

const GetSimilarMovies = ({ movieID }) => {
  const [simiMovies, setSimiMovies] = useState([])

  // getting similar movies
  useEffect(() => {
    const getSimilarMovies = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${process.env.GATSBY_API_KEY}&language=en-US&page=1`

      const res = await fetch(url)
      const data = await res.json()
      const similarMovies = await data.results.slice(0, 8).map(item => item)
      setSimiMovies(similarMovies)
    }

    getSimilarMovies()
  }, [movieID])
  return (
    <section className="w-full bg-gray-900 rounded-2xl shadow-2xl md:p-4 py-5 px-3">
      <h2 className="font-semibold md:text-2xl text-xl py-2 mb-4 border-b-2 border-white md:w-52 w-48">
        Similar Movies
      </h2>
      <div className="flex flex-wrap md:justify-start justify-evenly">
        {simiMovies.map(movie => (
          <SimilarMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default GetSimilarMovies
