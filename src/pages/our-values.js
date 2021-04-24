import React from "react"
import { graphql } from "gatsby"
import tailwindCommon from "~utils/tailwindCommon"
import SEOMatic from "~components/SEOMatic"
import Layout from "~components/Layout"
import Image from "~components/Image"

const OurValuesPage = ({ data }) => {
  const {
    entries: [entry],
    seo,
  } = data.craft

  return (
    <Layout grayBg>
      <SEOMatic {...seo} />
      <div className="container">
        <h1
          className={`${tailwindCommon.heading} text-center mb-16 pt-16`}
          data-aos="fade-in"
        >
          {entry.title}
        </h1>

        <div class="pb-16">
          {entry.values.map(block => (
            <div
              className={`${tailwindCommon.card} p-8 lg:p-12 mb-16`}
              key={block.uid}
              data-aos="fade-in"
            >
              <div class="grid grid-cols-1 lg:grid-cols-2 row-gap-8 col-gap-16">
                <Image {...block.image[0]} imageClass="w-full rounded-lg" />
                <div>
                  <h2 className={`${tailwindCommon.subheading} mb-4`}>
                    {block.heading}
                  </h2>
                  <div
                    className="copy text-gray"
                    dangerouslySetInnerHTML={{ __html: block.copy }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const OurValuesPageQuery = graphql`
  {
    craft {
      entries(section: "ourValues") {
        title
        ... on Craft_ourValues_ourValues_Entry {
          values {
            ... on Craft_values_row_BlockType {
              uid
              image {
                ... on Craft_images_Asset {
                  ...FragmentImage
                }
              }
              heading
              copy
            }
          }
        }
      }
      seo: seomatic(uri: "our-values", asArray: true) {
        ...FragmentSEOMatic
      }
    }
  }
`

export default OurValuesPage
