import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header header />
      <section className="lg:mx-5 md:mx-3 mx-2">
        <NowPlaying />
      </section>
    </Layout>
  )
}

export default IndexPage
