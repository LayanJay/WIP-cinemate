import React, { useEffect, useState } from 'react'
import Credit from './Credit'

const GetMovieCredits = ({ movieID }) => {
  const [credits, setCredits] = useState([])

  // getting movie credits
  useEffect(() => {
    const getMovieCredits = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${process.env.GATSBY_API_KEY}&language=en-US`

      const res = await fetch(url)
      const data = await res.json()
      const credits = await data.cast.slice(0, 8).map(item => item)

      setCredits(credits)
    }

    getMovieCredits()
  }, [movieID])

  console.log(credits)
  return (
    <section className="w-full bg-gray-900 rounded-2xl shadow-2xl md:p-5 py-5 px-2 mb-5">
      <h2 className="font-semibold md:text-2xl text-xl py-2 mx-2 mb-4 border-b-2 border-white md:w-52 w-48">
        Credits
      </h2>
      <div className="flex flex-wrap md:justify-start justify-evenly">
        {credits.map(credit => (
          <Credit key={credit.id} credit={credit} />
        ))}
      </div>
    </section>
  )
}

export default GetMovieCredits
