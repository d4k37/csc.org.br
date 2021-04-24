import React from "react"
import { graphql, Link } from "gatsby"
import tailwindCommon from "~utils/tailwindCommon"
import SEOMatic from "~components/SEOMatic"
import Layout from "~components/Layout"
import Pagination from "~components/Pagination"
import BlogCard from "~components/BlogCard"

const StoriesIndexPage = ({ data, pageContext }) => {
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
        {pageContext.hasEntries ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-gap-10 row-gap-12">
              {posts.map(post => (
                <BlogCard key={post.uid} {...post} />
              ))}
            </div>
            <Pagination {...pageContext} />
          </>
        ) : (
          <div class="container-sm copy mb-16" data-aos="fade-in">
            <p>
              Sorry, there are no story posts currently. Please try our{" "}
              <Link to="/blog">Blog</Link> page.
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const StoriesIndexPageQuery = graphql`
  query($limit: Int, $offset: Int, $entryUri: String, $relatedTo: [Int]) {
    craft {
      entry: entries(section: ["stories"]) {
        title
        uri
      }
      posts: entries(
        section: ["blogPost"]
        relatedTo: $relatedTo
        limit: $limit
        offset: $offset
      ) {
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

export default StoriesIndexPage
