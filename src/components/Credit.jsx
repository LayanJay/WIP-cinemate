import React from "react"

const Credit = ({ credit }) => {
  const { id, character, name, known_for_department, profile_path } = credit
  const imagePath = `https://image.tmdb.org/t/p/w500${profile_path}`
  return (
    <div className="grid grid-rows-1 grid-cols-2 gap-5 max-w-xs m-4">
      <div className="col-span-1">
        <img
          className="rounded-xl shadow-xl"
          src={imagePath}
          alt={name}
          loading="lazy"
        />
      </div>
      <div className="col-span-1"></div>
    </div>
  )
}

export default Credit
