import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MovieRow from "../components/MovieRow"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <MovieRow />
    </Layout>
  )
}

export default IndexPage
