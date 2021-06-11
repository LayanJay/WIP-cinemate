const path = require('path')
const _ = require('lodash')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query {
        nowPlayingMovies: allTmdbMiscNowPlayingMovies(
          sort: { fields: popularity, order: DESC }
        ) {
          nodes {
            id
            title
          }
        }
      }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each movie.
  const movieTemplate = path.resolve(`src/templates/nowPlaying.jsx`)
  result.data.nowPlayingMovies.nodes.forEach(node => {
    const path = `/${_.kebabCase(node.title)}/`
    createPage({
      path,
      component: movieTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
