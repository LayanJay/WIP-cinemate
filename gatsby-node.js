const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
        query {
            nowPlayingMovies: allTmdbMiscNowPlayingMovies(sort: {fields: popularity, order: DESC}) {
              nodes {
                id
                original_title
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
        const path = `/now-playing/${_.kebabCase(node.original_title)}/`
        createPage({
            path,
            component: movieTemplate,
            context: {
                id: node.id,
            },
        })
    })
}

