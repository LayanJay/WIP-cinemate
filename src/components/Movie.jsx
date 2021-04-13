import React from "react"
import { Link } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

export default function Movie({ movie }) {
  const { title, poster_path } = movie

  const imagePath = `https://image.tmdb.org/t/p/w500${poster_path}`
  return (
    <div className="m-4 bg-transparent rounded-2xl shadow-2xl max-w-[300px]">
      <Link to={`/${kebabCase(title)}/`}>
        <img
          className="max-w-[300px] rounded-2xl transform hover:scale-105 transition ease-in"
          src={imagePath}
          alt={title}
          loading="lazy"
        />
      </Link>
    </div>
  )
}
