import React from "react"
import { graphql } from "gatsby"
import tailwindCommon from "./../utils/tailwindCommon"
import SEOMatic from "./../components/SEOMatic"
import Layout from "./../components/LayoutTest"
import Image from "./../components/Image"
import Copy from "./../components/Copy"

const AboutPage = ({ data }) => {
  const {
    entries: [entry],
    seo,
  } = data.craft

  return (
    <Layout>
      <SEOMatic {...seo} />

      <div className="overflow-x-hidden">
        {entry.zigZagContent.map((row, i) => {
          const isEven = i % 2 === 0

          return (
            <div
              key={i}
              className={
                "lg:flex lg:flex-no-wrap lg:items-stretch " +
                (isEven ? "" : " lg:flex-row-reverse")
              }
            >
              <div
                className="relative lg:w-6/12"
                data-aos={isEven ? "fade-left" : "fade-right"}
              >
                <Image
                  {...row.image[0]}
                  ratio="4:5"
                  imageClass="lg:absolute top-0 left-0 w-full h-full max-h-3/5 lg:max-h-full object-cover"
                  wrapperClass="zigzag-image"
                />
              </div>
              <div
                className={
                  `flex items-center lg:w-6/12 px-4 lg:px-16 lg:px20` +
                  (i === 0 ? " pt-12 pb-16 md:pt-20 md:pb-24" : "py-16 py-24")
                }
                data-aos={isEven ? "fade-right" : "fade-left"}
              >
                <div className="max-w-xl mx-auto">
                  {i === 0 && (
                    <h1 className={`${tailwindCommon.heading} mb-8`}>
                      {entry.title}
                    </h1>
                  )}
                  <Copy html={row.copy} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const AboutPageQuery = graphql`
  {
    craft {
      entries(section: "aboutUs") {
        title
        ... on Craft_aboutUs_aboutUs_Entry {
          zigZagContent {
            ... on Craft_zigZagContent_row_BlockType {
              copy
              image {
                ... on Craft_images_Asset {
                  ...FragmentImage
                }
              }
            }
          }
        }
      }
      seo: seomatic(uri: "about", asArray: true) {
        ...FragmentSEOMatic
      }
    }
  }
`

export default AboutPage
