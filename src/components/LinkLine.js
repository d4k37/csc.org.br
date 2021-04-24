import React from "react"
import { withPrefix } from "gatsby"
import PropTypes from "prop-types"
import tailwindCommon from "~utils/tailwindCommon"

import Linkify from "~components/Linkify"
import Arrow from "~icons/arrow.svg"

const LinkLine = ({ children, link, disableAos = false, usePrefix = true }) => (
  <div
    className="border-t border-gray-400"
    data-aos={disableAos ? "false" : "fade-in"}
  >
    <Linkify
      link={usePrefix ? withPrefix(link) : link}
      className={`flex items-center py-6 pr-6 md:text-lg ${tailwindCommon.transition} ${tailwindCommon.hover}`}
    >
      <Arrow className="flex-shrink-0 mr-4" />
      <span className="truncate">{children}</span>
    </Linkify>
  </div>
)

LinkLine.defaultProps = {
  disableAos: false,
}

LinkLine.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  disableAos: PropTypes.bool,
}

export default LinkLine
