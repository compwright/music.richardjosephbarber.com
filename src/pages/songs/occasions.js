import React from 'react'
import { graphql } from 'gatsby'

import { groupCategorically, excludeOther } from '../../lib/group'
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
            Occasion
          }
        }
      }
    }
  }
`

const pageTitle = 'Occasions'

const OccasionsPage = ({ data }) => (
  <Layout pageTitle={pageTitle}>
    <h1 className="display-3 my-5">{pageTitle}</h1>
    <div className="d-flex flex-wrap">
      {groupCategorically(data.allAirtable.edges, 'node.data.Occasion')
        .filter(excludeOther)
        .map(GroupedWorks)}
    </div>
  </Layout>
)

export default OccasionsPage
