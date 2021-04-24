import React from "react"
import PropTypes from "prop-types"
import tailwindCommon from "./../utils/tailwindCommon"
import LinkLine from "./LinkLine"
import Image from "./Image"

const NavItemWithDropdown = ({ dropDownContent, children }) => {
  return (
    <li className="show-menu-on-hover lg:px-4 lg:mx-4">
      <a
        href="#0"
        className="py-4 lg:py-8 border-b-4 border-t-4 transition duration-300 border-white block"
      >
        {children}
      </a>
      <div className="border border-l-0 lg:border-l-1 border-r-0 lg:border-r-1 border-gray-400 p-12 bg-white w-full lg:w-192 absolute inset-x-0 mx-auto shadow rounded-t-none lg:rounded">
        <>
          <div className="flex flex-no-wrap">
            <div className="w-1/3 pr-4">
              <Image
                {...dropDownContent.image[0]}
                useRatio={false}
                disableAos={true}
              />
            </div>
            <div className="w-2/3 pl-4">
              <h2 className={`mb-4 ${tailwindCommon.subheading}`}>
                {dropDownContent.title}
              </h2>
              <p className="text-gray mb-8">{dropDownContent.introText}</p>
              <ul>
                {dropDownContent.pagesInThisGroup.map(page => (
                  <li key={page.uid}>
                    <LinkLine link={page.uri} disableAos={true}>
                      {page.title}
                    </LinkLine>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      </div>
    </li>
  )
}

NavItemWithDropdown.defaultProps = {}

NavItemWithDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  dropDownContent: PropTypes.object.isRequired,
}

export default NavItemWithDropdown
