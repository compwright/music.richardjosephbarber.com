/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

const worksQuery = `
{
  allAirtable(filter: {table: {eq: "Compositions"}}) {
    edges {
      node {
        data {
          Number, Title
        }
      }
    }
  }
}
`;

const workTemplate = path.resolve("src/templates/work.js")

exports.createPages = async ({ actions, graphql }) => {
  const { data, errors } = await graphql(worksQuery)
  if (errors) {
    return Promise.reject(errors)
  }
  
  // Create post detail pages
  for (let { node } of data.allAirtable.edges) {
    actions.createPage({
      path: `/songs/entry/${node.data.Number}`,
      component: workTemplate,
      context: {
        id: node.data.Number
      },
    })
  }
}
