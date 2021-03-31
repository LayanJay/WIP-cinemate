import * as React from "react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      {/* bg-[#001220] */}
      <div className="bg-gray-800 min-h-screen text-white">
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
