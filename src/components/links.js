import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Links = ({ to, items }) => (
  <ul className="d-inline-block m-0 list-inline comma-separated">
    {(items || []).map(item => (
      <li key={item} className="list-inline-item">
        <Link to={`${to}#${item}`}>{item}</Link>
      </li>
    ))}
  </ul>
)

Links.propTypes = {
  to: PropTypes.string.isRequired,
  items: PropTypes.array,
}

Links.defaultProps = {
  items: [],
}

export default Links
