import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const DetailsList = ({ items }) =>
  Object.entries(items).length > 0 && (
    <dl className="row">
      {Object.entries(items)
        .filter(([attribute, value]) => !!value)
        .map(([attribute, value], i) => (
          <Fragment key={i}>
            <dt className="col-sm-2">{attribute}</dt>
            <dd className="col-sm-10">
              {Array.isArray(value) ? value.join(', ') : value}
            </dd>
          </Fragment>
        ))}
    </dl>
  )

DetailsList.propTypes = {
  items: PropTypes.object,
}

DetailsList.defaultProps = {
  items: {},
}

export default DetailsList
