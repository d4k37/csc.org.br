import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, withPrefix } from "gatsby"
import Logo from "./../images/logo.png"
import Button from "./Button"
import LinkLine from "./LinkLine"
import navigationLinks from "./../utils/navigation"
import tailwindCommon from "./../utils/tailwindCommon"
import { BiChevronsLeft } from "@react-icons/all-files/bi/BiChevronsLeft"

const SiteHeaderMobile = ({ headerData }) => {
  const [primaryOverlayOpen, setPrimaryOverlayOpen] = useState(false)
  const [secondaryOverlayOpen, setSecondaryOverlayOpen] = useState(false)
  const [overlayData, setOverlayData] = useState(null)

  const togglePrimaryOverlayMenu = () => {
    setPrimaryOverlayOpen(!primaryOverlayOpen)
    setSecondaryOverlayOpen(false)
    setOverlayData(null)
  }

  const showSecondaryOverlayMenu = slug => {
    setSecondaryOverlayOpen(true)
    setOverlayData(headerData.filter(entry => entry.slug === slug)[0])
  }

  const hideSecondaryOverlayMenu = () => {
    setSecondaryOverlayOpen(false)
    setOverlayData(null)
  }

  return (
    <>
      <header
        className={`sticky block md:hidden top-0 z-50 w-full border-gray-400 bg-white transition duration-300 ${
          !primaryOverlayOpen && `border-b`
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <Link to="/">
            <StaticImage
              src="./../images/logo.png"
              alt="Logo"
              placeholder="blurred"
              layout="fixed"
            />
          </Link>
          <button
            className={`hamburger hamburger--squeeze ${
              primaryOverlayOpen && `is-active`
            }`}
            type="button"
            onClick={() => togglePrimaryOverlayMenu()}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </header>
      <div
        className={`fixed top-0 z-40 pt-20 pb-16 px-8 inset-0 bg-white mobile-overlay ${
          primaryOverlayOpen && `mobile-overlay-open`
        }`}
      >
        <div className="h-full flex flex-col justify-between">
          <ul className="flex flex-col justify-center items-center">
            {navigationLinks.map(link => (
              <li key={link.uri} className="text-lg">
                {link.hasDropdown ? (
                  <button
                    className="py-4"
                    onClick={() => showSecondaryOverlayMenu(link.uri)}
                  >
                    {link.title}
                  </button>
                ) : (
                  <Link className="py-4 block" to={withPrefix(link.uri)}>
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Button link="https://donate.thecaresfamily.org.uk" type="auxiliary">
            Donate
          </Button>
        </div>
      </div>
      <div
        className={`fixed z-20 pt-20 pb-16 px-4 inset-0 bg-white mobile-overlay ${
          secondaryOverlayOpen && `mobile-overlay-open`
        }`}
      >
        <div className="h-full">
          {overlayData && (
            <>
              <div className="flex mb-8">
                <div className="flex-shrink-0">
                  <button
                    className="p-4 pl-0"
                    onClick={() => hideSecondaryOverlayMenu()}
                  >
                    <BiChevronsLeft />
                  </button>
                </div>
                <div>
                  <h2 className={`mb-4 ${tailwindCommon.subheading}`}>
                    {overlayData.title}
                  </h2>
                  <p className="text-gray mb-4">{overlayData.introText}</p>
                </div>
              </div>

              <ul>
                {overlayData.pagesInThisGroup.map(page => (
                  <li key={page.uid}>
                    <LinkLine link={page.uri}>{page.title}</LinkLine>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  )
}

SiteHeaderMobile.defaultProps = {}

SiteHeaderMobile.propTypes = {}

export default SiteHeaderMobile
