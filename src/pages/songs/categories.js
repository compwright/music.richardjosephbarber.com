import React from 'react'
import { graphql } from 'gatsby'

import { groupCategorically } from '../../lib/group'
import Layout from '../../components/layout'
import GroupedWorks from '../../components/grouped-works'

export const pageQuery = graphql`
  query {
    allAirtable(
      filter: { table: { eq: "Compositions" } }
      sort: { fields: [data___Title] }
    ) {
      edges {
        node {
          data {
            Number
            Title
            Category
          }
        }
      }
    }
  }
`

const pageTitle = 'Categories'

const CategoriesPage = ({ data }) => (
  <Layout pageTitle={pageTitle}>
    <h1 className="display-3 my-5">{pageTitle}</h1>
    <div className="d-flex flex-wrap">
      {groupCategorically(data.allAirtable.edges, 'node.data.Category').map(
        GroupedWorks
      )}
    </div>
  </Layout>
)

export default CategoriesPage
