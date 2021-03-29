import * as React from "react"

import request from "../utils/request"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MovieRow from "../components/MovieRow"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <MovieRow title="now playing" getURL={request.fetchNowPlaying} />
    </Layout>
  )
}

export default IndexPage
