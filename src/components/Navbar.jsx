import React from "react"
import { Link } from "gatsby"
import brand from "../images/brand.svg"

const Navbar = () => {
  return (
    <div>
      <header className="py-4 w-full">
        <nav className="flex justify-center items-center">
          <Link to="/">
            <img
              className="md:h-14 h-10"
              src={brand}
              alt="brand logo"
              loading="lazy"
            />
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
