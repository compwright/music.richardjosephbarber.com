import React from 'react'
import { graphql } from 'gatsby'

import { groupAlphabetically } from '../../lib/group'
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
          }
        }
      }
    }
  }
`

const pageTitle = 'Compositions'

const AlphabeticalPage = ({ data }) => (
  <Layout pageTitle={pageTitle}>
    <h1 className="display-3 my-5">{pageTitle}</h1>
    <p className="lead">Complete alphabetical listing</p>
    <p className="mb-5">
      {groupAlphabetically(data.allAirtable.edges, 'node.data.Title').map(
        ({ key }) => (
          <>
            <a href={`#${key}`} className="btn btn-light">
              {key}
            </a>
            &nbsp;
          </>
        )
      )}
    </p>
    {groupAlphabetically(data.allAirtable.edges, 'node.data.Title').map(
      GroupedWorks
    )}
  </Layout>
)

export default AlphabeticalPage
