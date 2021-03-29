import * as React from "react"
import Navbar from "./Navbar"
import bgBlob from "../images/blob.svg"

export default function Header() {
  return (
    <div className="lg:mx-5 md:mx-3 mx-2 rounded-b-3xl shadow-2xl bg-gradient-to-r from-indigo-600 to-gray-900">
      <Navbar />
      <section className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5 font-primary px-5 py-16">
        <div className="md:col-span-1 md:col-start-1 md:col-end-2 flex flex-col justify-center items-center">
          <div className="md:px-8">
            <h1 className="font-bold md:text-5xl sm:text-4xl text-3xl mb-4">
              Unlimited movies, TV shows, and more.
            </h1>
            <h3 className="font-semibold text-lg">
              Popular ones, what's trending, upcomming in a one place
            </h3>
            {/* search bar */}
          </div>
        </div>
        <div className="md:col-span-1 md:col-start-2 md:col-end-3 flex justify-center items-center">
          <img className="md:block hidden transition" src={bgBlob} alt="blob" />
        </div>
      </section>
    </div>
  )
}
