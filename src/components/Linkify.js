import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Linkify = ({ children, link, className }) => {
  let newChildren

  if (link.startsWith("/")) {
    newChildren = React.createElement(
      Link,
      {
        to: link,
        className,
      },
      children
    )
  } else if (!link.startsWith("mailto:")) {
    newChildren = React.createElement(
      "a",
      {
        href: link,
        target: "_blank",
        rel: "nofollower noopener",
        className,
      },
      children
    )
  } else {
    newChildren = React.createElement(
      "a",
      {
        href: link,
        className,
      },
      children
    )
  }

  return <>{newChildren}</>
}

Linkify.defaultProps = {
  className: ``,
}

Linkify.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Linkify
