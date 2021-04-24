import React from "react"
import { graphql } from "gatsby"
import tailwindCommon from "./../utils/tailwindCommon"
import SEOMatic from "./../components/SEOMatic"
import Layout from "./../components/LayoutTest"
import Image from "./../components/Image"

const SupporterCard = ({ supporterUrl, children, className }) => {
  if (supporterUrl) {
    return (
      <a
        href={supporterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        data-aos="fade-in"
      >
        {children}
      </a>
    )
  } else {
    return (
      <article className={className} data-aos="fade-in">
        {children}
      </article>
    )
  }
}

const OurSupportersPage = ({ data }) => {
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
        <section className="pb-16 lg:pb-32" data-aos="fade-in">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
            {entry.supporters.map(supporter => (
              <SupporterCard
                key={supporter.id}
                {...supporter}
                className={`${tailwindCommon.card} flex justify-center items-center py-8 px-4 lg:py-12 lg:px-8 ${tailwindCommon.transition} ${tailwindCommon.hover}`}
              >
                <Image
                  {...supporter.logo[0]}
                  useRatio={false}
                  wrapperClass="overflow-hidden"
                  imageClass="max-h-24 w-auto relative z-10"
                />
              </SupporterCard>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const OurSupportersPageQuery = graphql`
  {
    craft {
      entries(section: "ourSupporters") {
        title
        ... on Craft_ourSupporters_ourSupporters_Entry {
          id
          supporters {
            ... on Craft_supporters_supporter_BlockType {
              id
              logo {
                ...FragmentImage
              }
              supporterUrl
            }
          }
        }
      }
      seo: seomatic(uri: "supporters", asArray: true) {
        ...FragmentSEOMatic
      }
    }
  }
`

export default OurSupportersPage
