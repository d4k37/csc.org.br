import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavItem = ({ href, children }) => {
  return (
    <li className="lg:px-4 lg:mx-4">
      <Link to={href}>{children}</Link>
    </li>
  )
}

NavItem.defaultProps = {}

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

export default NavItem
