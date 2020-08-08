import React, { Fragment } from 'react'

const Copyright = ({ holder, year }) => (
  <Fragment>
    &copy; {[].concat(year).join(', ')} by {holder}. All rights reserved.
  </Fragment>
)

export default Copyright
