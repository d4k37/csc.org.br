const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  const pageFields = `
  edges {
    node {
      contentful_id
      sys {
        contentType {
          sys {
            id
          }
        }
      }
      title
      slug
    }
  }`
  return graphql(`
    {
      allContentfulLanding {
        ${pageFields}
      }
      allContentfulPage {
        ${pageFields}
      }
      allContentfulPost {
        ${pageFields}
      }
    }
    `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const pageNodes = _.concat(
      _.map(result.data.allContentfulLanding.edges, ({ node }) => node),
      _.map(result.data.allContentfulPage.edges, ({ node }) => node),
      _.map(result.data.allContentfulPost.edges, ({ node }) => node)
    )

    pageNodes.forEach(node => {
      const template = node.sys.contentType.sys.id
      const contentfulId = node.contentful_id
      const component = path.resolve(`./src/templates/${template}`)
      const slug = node.slug

      // if slug is not defined, don't create a page
      if (!slug) {
        console.error(
          `Error: page of type "${template}" and contentful id "${contentfulId}" does not have a "slug" field, page will not be created`
        )
        return
      }

      const pagePath = template === "post" ? `blog/${_.trim(slug, "/")}` : slug

      const page = {
        path: pagePath,
        component: component,
        context: {
          contentfulId: contentfulId,
        },
      }

      createPage(page)
    })
  })
}

// // Get all markdown blog posts sorted by date
// const result = await graphql(
//   `
//     {
//       allMarkdownRemark(
//         sort: { fields: [frontmatter___date], order: ASC }
//         limit: 1000
//       ) {
//         nodes {
//           id
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   `
// )

// if (result.errors) {
//   reporter.panicOnBuild(
//     `There was an error loading your blog posts`,
//     result.errors
//   )
//   return
// }

// const posts = result.data.allMarkdownRemark.nodes

// // Create blog posts pages
// // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
// // `context` is available in the template as a prop and as a variable in GraphQL

// if (posts.length > 0) {
//   posts.forEach((post, index) => {
//     const previousPostId = index === 0 ? null : posts[index - 1].id
//     const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

//     createPage({
//       path: post.fields.slug,
//       component: blogPost,
//       context: {
//         id: post.id,
//         previousPostId,
//         nextPostId,
//       },
//     })
//   })
// }
//}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
