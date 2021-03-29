import * as React from "react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-[#001220] text-white">
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
