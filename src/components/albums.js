import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'

const query = graphql`
  query {
    allAirtable(filter: { table: { eq: "Albums" } }) {
      edges {
        node {
          data {
            Name
            Artwork {
              thumbnails {
                full {
                  url
                }
              }
            }
            Spotify
            Buy
          }
        }
      }
    }
  }
`

const Albums = data =>
  data.allAirtable.edges.map(({ node: { data } }, i) => (
    <article key={i} className="card">
      <a href={data.Spotify || data.Buy} target="_blank">
        <img
          className="card-img-top"
          src={get(data, 'Artwork[0].thumbnails.full.url')}
          alt={data.Name}
        />
      </a>
      <div className="card-body text-center">
        {data.Buy && (
          <a
            className="card-link btn btn-outline-primary"
            href={data.Buy}
            target="_blank"
          >
            Buy on CD Baby
          </a>
        )}
        {data.Spotify && (
          <a
            className="card-link btn btn-primary"
            href={data.Spotify}
            target="_blank"
          >
            Listen on Spotify
          </a>
        )}
      </div>
    </article>
  ))

export default () => <StaticQuery query={query} render={Albums} />
