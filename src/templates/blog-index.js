import React from "react"
import { graphql } from "gatsby"
import tailwindCommon from "./../utils/tailwindCommon"
import SEOMatic from "./../components/SEOMatic"
import Layout from "./../components/Layout"
import Pagination from "./../components/Pagination"
import BlogCard from "./../components/BlogCard"

const BlogIndexPage = ({ data, pageContext }) => {
  const {
    entry: [entry],
    posts,
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-gap-10 row-gap-12">
          {posts.map(post => (
            <BlogCard key={post.uid} {...post} />
          ))}
        </div>
        <Pagination {...pageContext} />
      </div>
    </Layout>
  )
}

export const BlogIndexPageQuery = graphql`
  query($limit: Int, $offset: Int, $entryUri: String) {
    craft {
      entry: entries(section: ["blog"]) {
        title
        uri
      }
      posts: entries(section: ["blogPost"], limit: $limit, offset: $offset) {
        uid
        title
        uri
        postDate
        ... on Craft_blogPost_blogPost_Entry {
          image {
            ...FragmentImage
          }
        }
      }
      seo: seomatic(uri: $entryUri, asArray: true) {
        ...FragmentSEOMatic
      }
    }
  }
`

export default BlogIndexPage
