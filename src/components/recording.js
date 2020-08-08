import React from 'react'
import PropTypes from 'prop-types'

const SoundCloudEmbed = ({ URL, ...props }) => (
  <iframe
    {...props}
    width="100%"
    height="166"
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
      URL
    )}&color=%23673ab7&inverse=false&auto_play=false&show_user=false`}
  ></iframe>
)

SoundCloudEmbed.propTypes = {
  URL: PropTypes.string.isRequired,
}

const embedTypes = {
  SoundCloud: SoundCloudEmbed,
}

const RecordingEmbed = ({ ID, Type, ...props }) => {
  const Embed = embedTypes[Type]
  return Type && <Embed {...props} />
}

RecordingEmbed.propTypes = {
  type: PropTypes.string.isRequired,
}

export default RecordingEmbed
