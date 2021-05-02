import React, { Fragment, useContext } from "react"
import { graphql } from "gatsby"
import tailwindCommon from "./../utils/tailwindCommon"
import Layout from "./../components/LayoutTest"
import SEOMatic from "./../components/SEOMatic"
import Button from "./../components/Button"
import BlogCard from "./../components/BlogCard"
import CharityCard from "./../components/CharityCard"
import TweetCard from "./../components/TweetCard"
import GroupingHome from "./../components/GroupingHome"
import Image from "./../components/Image"
import LinkLine from "./../components/LinkLine"
import { BiPlayCircle } from "@react-icons/all-files/bi/BiPlayCircle"
import { VideoModalContext } from "./../utils/context"

const HomePage = ({ data }) => {
  // const {
  //   entry,
  //   actionGrouping,
  //   voiceGrouping,
  //   powerGrouping,
  //   posts,
  //   tweets,
  //   seo,
  // } = data.craft
  const entry = data.contentfulLanding
  const { setVideo } = useContext(VideoModalContext)

  return (
    <Layout>
      {/* <SEOMatic {...seo} /> */}
      <a
        href="#0"
        className="block relative px-4 mx-auto video-block max-w-1440 mt-16"
        onClick={e => {
          e.preventDefault()
          setVideo({
            vendor: entry.videoVendor,
            id: entry.videoId,
          })
        }}
      >
        <Image
          height={entry.image[0].gatsbyImageData.height}
          width={entry.image[0].gatsbyImageData.width}
          url={entry.image[0].fluid.src}
          useRatio={false}
        />
        <BiPlayCircle
          className={`inset-0 m-auto w-20 md:w-auto absolute z-10 play-icon ${tailwindCommon.transition}`}
        />
      </a>

      <div className="py-16">
        <div className="container text-center" data-aos="fade-in">
          <div
            className="hero-title"
            dangerouslySetInnerHTML={{ __html: entry.heroTitle }}
          ></div>
        </div>
        <div className="container-sm text-center" data-aos="fade-in">
          <div
            className="copy mb-8"
            dangerouslySetInnerHTML={{ __html: entry.heroCopy }}
          ></div>
          <div className="flex flex-col lg:flex-row justify-center">
            <Button type="primary" link={entry.primaryButtonUrl}>
              {entry.primaryButtonText}
            </Button>
            <div className="mb-4 lg:mx-2 lg:mb-0"></div>
            <Button type="auxiliary" link={entry.auxiliaryButtonUrl}>
              {entry.auxiliaryButtonText}
            </Button>
          </div>
        </div>
      </div>

      {/* <section className="bg-gray-300 py-16">
        <div className="container">
          <div className="mb-16 lg:mb-32">
            <h2
              className={`${tailwindCommon.subheading} mb-4`}
              data-aos="fade-in"
            >
              {entry.charitiesHeading}
            </h2>
            <div
              className="copy mb-16"
              dangerouslySetInnerHTML={{ __html: entry.charitiesCopy }}
              data-aos="fade-in"
            ></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {entry.charities.map(charity => (
                <CharityCard key={charity.id} {...charity} />
              ))}
            </div>
          </div>
          <div className="mb-16 lg:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GroupingHome {...actionGrouping[0]} />
              <GroupingHome {...voiceGrouping[0]} />
              <GroupingHome {...powerGrouping[0]} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="relative">
                <BlogCard key={entry.impactPost.id} {...entry.impactPost[0]} />
                <div className="absolute top-0 left-0 z-10 py-6 px-5 lg:px-10 pointer-events-none">
                  <h2
                    className={`${tailwindCommon.subheading} text-white`}
                    data-aos="fade-in"
                  >
                    Impact
                  </h2>
                </div>
              </div>
            </div>
            <aside>
              <h3
                className="text-center inline-block px-4 py-2 mb-8 font-bold rounded-full text-white bg-black"
                data-aos="fade-in"
              >
                At a glance
              </h3>
              <div className="flex flex-wrap mb-12 lg:mb-8">
                {entry.atAGlance.map((block, i) => (
                  <dl
                    key={block.id}
                    className={`flex flex-col items-center text-center w-1/2 ${
                      i % 2 ? "pl-2 lg:pl-4" : "pr-2 lg:pr-4"
                    } mb-4 lg:mb-8`}
                    data-aos="fade-in"
                  >
                    <dt className="text-xl font-bold">{block.figure}</dt>
                    <dd>{block.caption}</dd>
                  </dl>
                ))}
              </div>
              <h3
                className="text-center inline-block px-4 py-2 mb-4 font-bold rounded-full text-white bg-black"
                data-aos="fade-in"
              >
                Our favourite stories
              </h3>
              <ul>
                {entry.ourFavouriteStories.map(story => (
                  <li key={story.id}>
                    <LinkLine link={story.uri}>{story.title}</LinkLine>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post, i) => (
              <Fragment key={i}>
                <BlogCard key={post.uid} {...post} />
                {i === 1 && (
                  <>
                    {tweets.map(tweet => (
                      <TweetCard key={tweet.id} {...tweet} />
                    ))}
                  </>
                )}
              </Fragment>
            ))}
          </div>
          <div
            className="flex flex-col lg:flex-row justify-center"
            data-aos="fade-in"
          >
            <Button type="primary" link="/blog">
              Read the blog
            </Button>
          </div>
        </div>
      </section> */}
    </Layout>
  )
}

export const HomePageQuery = graphql`
  {
    contentfulLanding {
      id
      title
      videoId
      videoVendor
      heroCopy
      heroTitle
      primaryButtonText
      primaryButtonUrl
      auxiliaryButtonText
      auxiliaryButtonUrl
      image {
        gatsbyImageData
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
  }
`

// export const HomePageQuery = graphql`
//   {
//     craft {
//       entry(section: "home") {
//         ... on Craft_home_home_Entry {
//           id
//           title
//           videoId
//           videoVendor
//           image {
//             ... on Craft_images_Asset {
//               ...FragmentImage
//             }
//           }
//           heroCopy
//           heroTitle
//           primaryButtonText
//           primaryButtonUrl
//           auxiliaryButtonText
//           auxiliaryButtonUrl
//           charitiesCopy
//           charitiesHeading
//           charities {
//             ... on Craft_charities_charity_BlockType {
//               id
//               charityName
//               copy
//               logoColor
//               websiteUrl
//               image {
//                 ... on Craft_images_Asset {
//                   ...FragmentImage
//                 }
//               }
//             }
//           }
//           impactPost {
//             uri
//             title
//             postDate
//             id
//             ... on Craft_blogPost_blogPost_Entry {
//               uri
//               title
//               image {
//                 ... on Craft_images_Asset {
//                   ...FragmentImage
//                 }
//               }
//             }
//           }
//           atAGlance {
//             ... on Craft_atAGlance_stat_BlockType {
//               id
//               figure
//               caption
//             }
//           }
//           ourFavouriteStories {
//             uri
//             title
//             id
//           }
//         }
//       }
//       actionGrouping: entries(section: "grouping", slug: ["action"]) {
//         ... on Craft_grouping_grouping_Entry {
//           ...FragmentGrouping
//         }
//       }
//       voiceGrouping: entries(section: "grouping", slug: ["voice"]) {
//         ... on Craft_grouping_grouping_Entry {
//           ...FragmentGrouping
//         }
//       }
//       powerGrouping: entries(section: "grouping", slug: ["power"]) {
//         ... on Craft_grouping_grouping_Entry {
//           ...FragmentGrouping
//         }
//       }
//       tweets: entries(section: ["tweet"], limit: 2) {
//         ... on Craft_tweet_tweet_Entry {
//           id
//           postDate
//           tweet
//           tweetUrl
//         }
//       }
//       posts: entries(
//         section: ["blogPost"]
//         search: "-alsoAppearIn:campaigns"
//         limit: 4
//       ) {
//         ... on Craft_blogPost_blogPost_Entry {
//           id
//           title
//           uri
//           postDate
//           image {
//             ... on Craft_images_Asset {
//               ...FragmentImage
//             }
//           }
//         }
//       }
//       seo: seomatic(uri: "/home", asArray: true) {
//         ...FragmentSEOMatic
//       }
//     }
//   }
// `

export default HomePage
