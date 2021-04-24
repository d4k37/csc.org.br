import React from "react"
import PropTypes from "prop-types"
import tailwindCommon from "./../utils/tailwindCommon"

import Linkify from "./Linkify"

const Button = ({ children, link, type }) => {
  let buttonStyle

  switch (type) {
    case "primary":
      buttonStyle = "text-white bg-black hover:text-black hover:bg-yellow"
      break
    case "auxiliary":
      buttonStyle = "text-black bg-yellow hover:text-white hover:bg-black"
      break
    default:
      buttonStyle = "text-black"
  }

  const buttonClass = `text-center inline-block px-8 py-4 rounded-full ${buttonStyle} ${tailwindCommon.transition}`

  return (
    <Linkify link={link} className={buttonClass}>
      {children}
    </Linkify>
  )
}

Button.defaultProps = {
  type: `primary`,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default Button
