import React from "react"
import request from "../utils/request"

export default function Movie({ movie }) {
  const {
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie
  const imagePath = request.fetchImages + poster_path
  return (
    <div>
      <img className="max-w-xs" src={imagePath} alt={original_title} />
      <h1>{original_title}</h1>
    </div>
  )
}
