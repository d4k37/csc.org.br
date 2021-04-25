import React from "react"
import { graphql } from "gatsby"
import tailwindCommon from "./../utils/tailwindCommon"
import SEOMatic from "./../components/SEOMatic"
import Layout from "./../components/Layout"
import Image from "./../components/Image"
import ContentBlocks from "./../components/ContentBlocks"

const StandardPage = ({ data }) => {
  const {
    entry: [entry],
    seo,
  } = data.craft

  return (
    <Layout>
      <SEOMatic {...seo} />
      {entry.image.length > 0 && (
        <Image
          url={entry.image[0].url}
          altText={entry.image[0].altText}
          ratio="2.25:1"
        />
      )}
      <div className="container">
        <h1
          className={`${
            entry.title.length > 30
              ? tailwindCommon.subheading
              : tailwindCommon.heading
          } text-center mb-16 pt-16`}
          data-aos="fade-in"
        >
          {entry.title}
        </h1>
      </div>
      <ContentBlocks blocks={entry.contentBuilder} />
    </Layout>
  )
}

// export const StandardPageQuery = graphql`
//   query($entryUri: String) {
//     craft {
//       entry: entries(section: ["standardPage"], uri: [$entryUri]) {
//         title
//         uri
//         ... on Craft_standardPage_standardPage_Entry {
//           image {
//             ... on Craft_images_Asset {
//               url
//               altText
//             }
//           }
//           contentBuilder {
//             ...FragmentContentBuilder
//           }
//         }
//       }
//       seo: seomatic(uri: $entryUri, asArray: true) {
//         ...FragmentSEOMatic
//       }
//     }
//   }
// `

export default StandardPage
