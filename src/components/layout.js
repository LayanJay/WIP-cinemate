import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {

  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
