import React from 'react'

const SimilarMovie = ({ movie }) => {
  const { title, poster_path } = movie

  const imagePath = `https://image.tmdb.org/t/p/w500${poster_path}`
  return (
    <div className="p-2">
      <img
        className="max-w-xs md:w-36 w-36 rounded-2xl shadow-lg transform transition hover:scale-105"
        src={imagePath}
        alt={title}
        loading="lazy"
      />
    </div>
  )
}

export default SimilarMovie
