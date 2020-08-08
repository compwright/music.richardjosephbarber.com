import React, { Fragment } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import RecordingEmbed from './recording'

const query = graphql`
  query {
    allAirtable(
      filter: { table: { eq: "Compositions" } }
      sort: { fields: [data___Number], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          data {
            Number
            Title
            Publications {
              data {
                Distributor
                URL
              }
            }
            Recordings {
              data {
                Type
                URL
              }
            }
          }
        }
      }
    }
  }
`

const LatestWork = data => {
  const {
    Number,
    Title,
    Publications,
    Recordings,
  } = data.allAirtable.edges[0].node.data

  return (
    <Fragment>
      <h2 className="card-title">
        Latest work:{' '}
        <Link
          to={`/songs/entry/${Number}`}
          className="d-block d-sm-inline font-weight-normal"
        >
          {Title}
        </Link>
      </h2>
      {Recordings &&
        Recordings.find(({ data }) => data.Type === 'SoundCloud') && (
          <RecordingEmbed
            {...Recordings.find(({ data }) => data.Type === 'SoundCloud').data}
            className="mt-2 mb-3"
          />
        )}
      {Publications && Publications[0] && (
        <a
          href={Publications[0].data.URL}
          target="_blank"
          className="btn btn-primary"
        >
          Buy at {Publications[0].data.Distributor}
        </a>
      )}
    </Fragment>
  )
}

export default () => <StaticQuery query={query} render={LatestWork} />
