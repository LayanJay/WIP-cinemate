import React from "react"
import { Link } from "gatsby"

export default function Movie({ movie }) {
  const { original_title, poster_path } = movie

  const imagePath = `https://image.tmdb.org/t/p/w500${poster_path}`
  return (
    <div className="m-4 bg-transparent rounded-2xl shadow-2xl max-w-[300px]">
      <Link>
        <img
          className="max-w-[300px] rounded-2xl transform hover:scale-105 transition ease-in"
          src={imagePath}
          alt={original_title}
        />
      </Link>
    </div>
  )
}
