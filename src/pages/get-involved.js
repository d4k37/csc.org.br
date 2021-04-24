import React from "react"
import { graphql } from "gatsby"
import tailwindCommon from "./../utils/tailwindCommon"
import SEOMatic from "./../components/SEOMatic"
import Layout from "./../components/LayoutTest"

const GetInvolvedPage = ({ data }) => {
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
        <div className="grid lg:grid-cols-2 row-gap-8 col-gap-16 pb-32">
          {entry.copyBlocks.map(card => (
            <div
              className={`${tailwindCommon.card} min-w-full p-5 md:p-8 lg:p-12`}
              data-aos="fade-in"
            >
              <h2 className={`${tailwindCommon.subheading} mb-4`}>
                {card.heading}
              </h2>
              <div
                className="copy copy--break"
                dangerouslySetInnerHTML={{ __html: card.copy }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const GetInvolvedPageQuery = graphql`
  {
    craft {
      entries(section: "getInvolved") {
        title
        ... on Craft_getInvolved_getInvolved_Entry {
          copyBlocks {
            ... on Craft_copyBlocks_block_BlockType {
              heading
              copy
            }
          }
        }
      }
      seo: seomatic(uri: "get-involved", asArray: true) {
        ...FragmentSEOMatic
      }
    }
  }
`

export default GetInvolvedPage
