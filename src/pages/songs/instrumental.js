import React from 'react'
import { graphql } from 'gatsby'

import { groupCategorically } from '../../lib/group'
import Layout from '../../components/layout'
import GroupedWorks from '../../components/grouped-works'

export const pageQuery = graphql`
  query {
    allAirtable(
      filter: {
        table: { eq: "Compositions" }
        data: { Type: { eq: "Instrumental" } }
      }
      sort: { fields: [data___Title] }
    ) {
      edges {
        node {
          data {
            Number
            Title
            Instruments
          }
        }
      }
    }
  }
`

const pageTitle = 'Instrumental'

const InstrumentsPage = ({ data }) => (
  <Layout pageTitle={pageTitle}>
    <h1 className="display-3 my-5">{pageTitle}</h1>
    <div className="d-flex flex-wrap">
      {groupCategorically(data.allAirtable.edges, 'node.data.Instruments').map(
        GroupedWorks
      )}
    </div>
  </Layout>
)

export default InstrumentsPage
