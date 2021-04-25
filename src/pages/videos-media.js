import React, { useContext } from "react"
import { graphql } from "gatsby"
import SEOMatic from "./../components/SEOMatic"
import Layout from "./../components/LayoutTest"
import Image from "./../components/Image"
import tailwindCommon from "./../utils/tailwindCommon"
import { VideoModalContext } from "./../utils/context"
import { BiPlayCircle } from "@react-icons/all-files/bi/BiPlayCircle"

const VideoMediaPage = ({ data }) => {
  const {
    entries: [entry],
    seo,
  } = data.craft

  const { setVideo } = useContext(VideoModalContext)

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
        <section className="pb-32">
          <h3
            className="uppercase font-bold tracking-wider mb-10"
            data-aos="fade-in"
          >
            Our videos
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {entry.ourVideos.map(video => (
              <a
                href="#0"
                key={video.id}
                onClick={e => {
                  e.preventDefault()
                  setVideo({
                    vendor: video.videoVendor,
                    id: video.videoId,
                  })
                }}
                className={`${tailwindCommon.card} block cursor-pointer video-block`}
                data-aos="fade-in"
              >
                <div className="relative">
                  <Image
                    {...video.image[0]}
                    wrapperClass="overflow-hidden h-72"
                    imageClass="h-full w-full object-cover rounded-t-lg"
                  />
                  <BiPlayCircle
                    className={`inset-0 m-auto w-20 md:w-auto absolute z-10 play-icon ${tailwindCommon.transition}`}
                  />
                </div>
                <div className="p-6">{video.caption}</div>
              </a>
            ))}
          </div>
        </section>

        <section className="pb-32">
          <h3
            className="uppercase font-bold tracking-wider mb-10"
            data-aos="fade-in"
          >
            In the media
          </h3>
          <div className="grid lg:grid-cols-3 gap-8 lg:row-gap-12">
            {entry.inTheMedia.map(block => (
              <article
                key={block.id}
                className={`${tailwindCommon.card} flex flex-col justify-between p-8`}
                data-aos="fade-in"
              >
                <div>
                  <Image
                    {...block.logo[0]}
                    wrapperClass="overflow-hidden mb-8"
                    imageClass="h-10 w-auto relative z-10"
                    useRatio={false}
                  />
                  <div
                    className="copy leading-7 mb-8"
                    dangerouslySetInnerHTML={{ __html: block.copy }}
                  ></div>
                </div>
                <a
                  href={block.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline ${tailwindCommon.transition} ${tailwindCommon.hover}`}
                >
                  Read article
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

// export const VideoMediaPageQuery = graphql`
//   {
//     craft {
//       entries(section: "videosMedia") {
//         title
//         ... on Craft_videosMedia_videosMedia_Entry {
//           id
//           ourVideos {
//             ... on Craft_ourVideos_video_BlockType {
//               id
//               videoVendor
//               videoId
//               image {
//                 ...FragmentImage
//               }
//               caption
//             }
//           }
//           inTheMedia {
//             ... on Craft_inTheMedia_testimonial_BlockType {
//               id
//               logo {
//                 ...FragmentImage
//               }
//               copy
//               articleUrl
//             }
//           }
//         }
//       }
//       seo: seomatic(uri: "videos-media", asArray: true) {
//         ...FragmentSEOMatic
//       }
//     }
//   }
// `

export default VideoMediaPage
