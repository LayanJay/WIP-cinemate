import React from "react"
import { Link } from "gatsby"
import brand from "../images/brand.svg"

const Navbar = () => {
  return (
    <div className="relative">
      <header className="py-4 w-full rounded-b-3xl lg:mx-5 md:mx-3 mx-2">
        <nav className="flex justify-center items-center">
          <Link to="/">
            <img className="md:h-14 h-10" src={brand} alt="brand logo" />
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
