import React from "react"
import PropTypes from "prop-types"

const Copy = ({ html }) => (
  <>
    <div className="copy md:text-lg" dangerouslySetInnerHTML={{ __html: html }}></div>
  </>
)

Copy.propTypes = {
  html: PropTypes.string.isRequired,
}

export default Copy
