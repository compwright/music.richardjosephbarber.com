import React from 'react'
import { Link } from 'gatsby'

const GroupedWorks = ({ key, nodes }) => (
  <article key={key} name={encodeURIComponent(key)} style={{ width: '25em' }}>
    <a name={key} />
    <h1>{key}</h1>
    <ul className="list-unstyled">
      {nodes.map(({ node: { data: { Number, Title } } }) => (
        <li key={Number}>
          <Link to={`/songs/entry/${Number}`}>{Title}</Link>
        </li>
      ))}
    </ul>
  </article>
)

export default GroupedWorks
