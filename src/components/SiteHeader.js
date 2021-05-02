import React, { Fragment } from "react"
import { Link } from "gatsby"
import Logo from "./../images/logo.png"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "./Button"
import NavItemWithDropdown from "./NavItemWithDropdown"
import NavItem from "./NavItem"
import navigationLinks from "./../utils/navigation"

const SiteHeader = ({ headerData }) => {
  const getDropdownContent = slug => {
    return headerData.filter(entry => entry.slug === slug)[0]
  }
  return (
    <>
      <header className="hidden md:block relative sticky top-0 w-full border-b border-gray-400 bg-white z-50">
        <div className="lg:absolute py-4 lg:py-0 h-full w-full z-10 px-8 pointer-events-none">
          <div className="flex justify-between items-center h-full">
            <Link to="/" className="pointer-events-auto">
              <StaticImage
                src="./../images/logo.png"
                alt="Logo"
                placeholder="blurred"
                layout="fixed"
                height="40"
              />
            </Link>
            <div className="pointer-events-auto">
              <Button
                link="https://donate.thecaresfamily.org.uk"
                type="auxiliary"
              >
                Donate
              </Button>
            </div>
          </div>
        </div>
        <nav className="relative z-0 px-8 lg:px-0">
          <ul className="flex items-center justify-between lg:justify-center">
            {navigationLinks.map(link => (
              <Fragment key={link.uri}>
                {link.hasDropdown ? (
                  <NavItemWithDropdown
                    dropDownContent={getDropdownContent(link.uri)}
                    slug={link.uri}
                  >
                    {link.title}
                  </NavItemWithDropdown>
                ) : (
                  <NavItem href={link.uri}>{link.title}</NavItem>
                )}
              </Fragment>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default SiteHeader
