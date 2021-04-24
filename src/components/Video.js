import React from "react"
import PropTypes from "prop-types"

const Video = ({ id, vendor }) => {
  const src = vendor === 'vimeo' ? `https://player.vimeo.com/video/${id}` : `https://www.youtube.com/embed/${id}`

  return (
    <div className="aspect-ratio">
      <iframe
        src={src}
        title={vendor}
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen={true}
      ></iframe>
    </div>
  )
}

Video.defaultProps = {
  vendor: `vimeo`,
}

Video.propTypes = {
  id: PropTypes.string.isRequired,
  vendor: PropTypes.string,
}

export default Video
