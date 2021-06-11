import React from 'react'

const Credit = ({ credit }) => {
  const { character, name, known_for_department, profile_path } = credit
  const imagePath = `https://image.tmdb.org/t/p/w500${profile_path}`
  return (
    <div className="grid grid-rows-1 grid-cols-2 gap-4 max-w-xs md:m-3 my-2">
      <div className="col-span-1">
        <img
          className="rounded-xl shadow-xl"
          src={imagePath}
          alt={name}
          loading="lazy"
        />
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <p className="font-light text-sm text-gray-200 mb-1">
          {known_for_department} as
        </p>
        <h4 className="font-medium text-xl text-indigo-300 mb-3">
          {character}
        </h4>
        <p className="font-light text-sm text-gray-200 mb-1">In real life</p>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default Credit
