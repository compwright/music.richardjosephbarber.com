import React, { Fragment } from 'react'

const Authorship = ({ Words, Scripture, Music, Arrangement }) => {
  if (Words && Music && Words === Music) {
    return (
      <Fragment>
        Words and music by {Words}
        {Arrangement && `, arranged by ${Arrangement}`}
      </Fragment>
    )
  } else if (Scripture && Music) {
    return (
      <Fragment>
        Words from {Scripture}; music by {Music}
        {Arrangement && `, arranged by ${Arrangement}`}
      </Fragment>
    )
  } else if (Words && Music) {
    return (
      <Fragment>
        Words by {Words}, music by {Music}
        {Arrangement && `, arranged by ${Arrangement}`}
      </Fragment>
    )
  } else if (Words) {
    return (
      <Fragment>
        Words by {Words}
        {Arrangement && `, arranged by ${Arrangement}`}
      </Fragment>
    )
  } else if (Music) {
    return (
      <Fragment>
        Music by {Music}
        {Arrangement && `, arranged by ${Arrangement}`}
      </Fragment>
    )
  } else if (Arrangement) {
    return <Fragment>Arrangement by {Arrangement}</Fragment>
  } else {
    return null
  }
}

export default Authorship
