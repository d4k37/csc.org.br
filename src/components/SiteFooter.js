import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const SiteFooter = () => {
  const {
    craft: {
      globalSet: { legalDisclaimer },
    },
  } = useStaticQuery(graphql`
    {
      craft {
        globalSet {
          ... on Craft_footer_GlobalSet {
            legalDisclaimer
          }
        }
      }
    }
  `)

  return (
    <footer className="border-t border-gray-400 bg-gray-300">
      <div className="container py-16 lg:py-24 text-center text-gray leading-loose text-sm">
        <p className="mb-2">{legalDisclaimer}</p>
        <p>
          <Link to="/cookie-notice" className="underline">
            View our cookie notice
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
