import React, { useEffect, useState } from "react"

const PostMovieRating = ({ movieID }) => {
  const [inputVal, setInputVal] = useState(0)
  const [rating, setRating] = useState()
  const [successMsg, setSuccessMsg] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    setRating(inputVal)
    setInputVal(0)
  }

  // posting movie ratings to the movie db
  useEffect(() => {
    // POST request using fetch inside useEffect React hook

    if (rating) {
      const postRating = async () => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json;charset=utf-8" },
          body: JSON.stringify({ value: rating }),
        }
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}/rating?api_key=${process.env.GATSBY_API_KEY}&session_id=${process.env.GATSBY_SESSION_ID}`,
          requestOptions
        )

        const reply = await response.json()
        setSuccessMsg(reply.success)
      }

      postRating()

      const timer = setTimeout(() => setSuccessMsg(), 5000)
      return () => clearTimeout(timer)
    }
  }, [rating, movieID])
  return (
    <>
      <form className="flex flex-col flex-wrap mb-4" onSubmit={handleSubmit}>
        <label
          htmlFor="rating"
          className="text-lg font-semibold text-indigo-300 mb-2"
        >
          Vote for this movie...
        </label>
        <div className="flex flex-wrap mb-2">
          <input
            className="py-2 px-4 mr-2"
            id="rating"
            type="range"
            value={inputVal}
            min={0}
            max={10}
            onChange={e => setInputVal(e.target.value)}
          ></input>
          <p className="mr-2 bg-indigo-700 py-2 px-3 rounded-3xl shadow-lg">
            {inputVal}
          </p>
        </div>
        <div className="flex flex-wrap">
          <button
            type="reset"
            onClick={() => setInputVal(0)}
            className="bg-red-600 hover:bg-white hover:text-gray-900 focus:outline-none font-medium transition ease-in py-2 px-4 mr-2 rounded-3xl shadow-lg"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-indigo-700 hover:bg-white hover:text-gray-900 focus:outline-none font-medium transition ease-in py-2 px-4 mr-2 rounded-3xl shadow-lg"
          >
            Rate
          </button>
        </div>
      </form>
      {/* rating submit messages */}
      {successMsg && successMsg === true ? (
        <div className="fixed z-40 bottom-6 right-6 bg-green-700 py-4 px-4 rounded-2xl transition ease-in">
          Rating Submitted
        </div>
      ) : (
        ""
      )}
      {successMsg && successMsg !== true ? (
        <div className="fixed z-40 bottom-6 right-6 bg-red-600 py-6 px-4">
          Failed, try again later
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default PostMovieRating
