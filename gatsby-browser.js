// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
//import "./src/style.css"
import "./src/styles/global.css"

// Highlighting for code blocks
//import "prismjs/themes/prism.css"

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import ContextWrapper from "./src/components/ContextWrapper"

export const wrapPageElement = ({ element, props }) => {
  return <ContextWrapper {...props}>{element}</ContextWrapper>
}
