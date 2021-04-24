import React from "react"
import { graphql } from "gatsby"
import moment from "moment"
import tailwindCommon from "~utils/tailwindCommon"
import SEOMatic from "~components/SEOMatic"
import Layout from "~components/Layout"
import Image from "~components/Image"
import ContentBlocks from "~components/ContentBlocks"
import Button from "~components/Button"

const BlogPost = ({ data, pageContext }) => {
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
      <div className="container mb-16 pt-16 text-center">
        <h1
          className={`${
            entry.title.length > 50
              ? tailwindCommon.subheading
              : tailwindCommon.heading
          } mb-8`}
          data-aos="fade-in"
        >
          {entry.title}
        </h1>
        <p className="text-gray text-sm lg:text-lg" data-aos="fade-in">
          Posted by {entry.author.fullName} on{" "}
          {moment(entry.postDate).format("Do MMMM YYYY")}
        </p>
      </div>
      <ContentBlocks blocks={entry.contentBuilder} />
      {/* NOTE: We show a custom button for this post. */}
      {entry.uri !== "blog/finding-connection-read-our-pamphlet" && (
        <div
          className="container-sm flex justify-center pb-16"
          data-aos="fade-in"
        >
          <Button link="/blog">View more on the blog</Button>
        </div>
      )}
    </Layout>
  )
}

export const BlogPostQuery = graphql`
  query($entryUri: String) {
    craft {
      entry: entries(section: ["blogPost"], uri: [$entryUri]) {
        title
        uri
        postDate
        author {
          fullName
        }
        ... on Craft_blogPost_blogPost_Entry {
          image {
            ... on Craft_images_Asset {
              url
              altText
            }
          }
          contentBuilder {
            ...FragmentContentBuilder
          }
        }
      }
      seo: seomatic(uri: $entryUri, asArray: true) {
        ...FragmentSEOMatic
      }
    }
  }
`

export default BlogPost
