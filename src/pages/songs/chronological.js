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
            Copyright_Year
          }
        }
      }
    }
  }
`

const pageTitle = 'Compositions'

const ChronologicalPage = ({ data }) => (
  <Layout pageTitle={pageTitle}>
    <h1 className="display-3 my-5">{pageTitle}</h1>
    <p className="lead">Complete chronological listing</p>
    <p className="mb-5">
      {groupCategorically(
        data.allAirtable.edges,
        'node.data.Copyright_Year'
      ).map(({ key }) => (
        <>
          <a href={`#${key}`} className="btn btn-light">
            {key}
          </a>
          &nbsp;
        </>
      ))}
    </p>
    {groupCategorically(data.allAirtable.edges, 'node.data.Copyright_Year').map(
      GroupedWorks
    )}
  </Layout>
)

export default ChronologicalPage
