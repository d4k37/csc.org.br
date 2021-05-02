import React, { useEffect } from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import PropTypes from "prop-types"
import SiteHeader from "./SiteHeader"
import SiteHeaderMobile from "./SiteHeaderMobile"
import SiteFooter from "./SiteFooter"
import DonateBar from "./DonateBar"
import VideoModal from "./VideoModal"
import aos from "aos"
import "./../style.css"
import "./../aos/dist/aos.css"

const Layout = ({ children, grayBg, showDonateBar }) => {
  useEffect(() => {
    aos.init({
      duration: 400,
    })
  }, [])

  const headerData = useStaticQuery(graphql`
    {
      allContentfulGrouping {
        nodes {
          id
          introText
          pagesInThisGroup {
            id
            uri
            title
            image {
              fluid {
                base64
                src
                srcSet
              }
            }
          }
          slug
          title
          uid
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        bodyAttributes={{
          "data-mk-cookie-element": "#cookie-notice",
          "data-mk-cookie-notice-element-heading-level": "2",
          "data-mk-language": "en",
          "data-mk-key": "d5e92cab-c06b-4b2d-8f7e-a3e535152ea6",
        }}
      />
      <SkipNavLink />
      <SiteHeaderMobile headerData={headerData.allContentfulGrouping.nodes} />
      <SiteHeader headerData={headerData.allContentfulGrouping.nodes} />
      <main className={grayBg ? `bg-gray-300` : `bg-white`}>
        <SkipNavContent />
        {children}
      </main>
      {showDonateBar && <DonateBar />}
      <SiteFooter />
      <VideoModal />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  grayBg: PropTypes.bool,
  showDonateBar: PropTypes.bool,
}

Layout.defaultProps = {
  grayBg: false,
  showDonateBar: true,
}

export default Layout
