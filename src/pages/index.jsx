import * as React from 'react'

import Layout from '../components/layout'
import Header from '../components/header'
import SEO from '../components/seo'
import NowPlaying from '../components/NowPlaying'

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
