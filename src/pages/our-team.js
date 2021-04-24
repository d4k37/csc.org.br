import React from "react"
import { graphql } from "gatsby"

import tailwindCommon from "./../utils/tailwindCommon"
import SEOMatic from "./../components/SEOMatic"
import Layout from "./../components/LayoutTest"
import PersonCard from "./../components/PersonCard"

const OurTeamPage = ({ data }) => {
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
        {entry.teamGroups.map((group, i) => (
          <section
            key={i}
            className="pb-16 md:pb-24 lg:pb-40"
            aria-label={group.heading}
            data-aos="fade-in"
          >
            <h2 className="mb-8 font-bold uppercase tracking-wider">
              {group.heading}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:col-gap-10 row-gap-12">
              {group.members.map((member, i) => (
                <PersonCard key={i} {...member} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  )
}

export const OurTeamPageQuery = graphql`
  {
    craft {
      entries(section: "ourTeam") {
        title
        ... on Craft_ourTeam_ourTeam_Entry {
          teamGroups {
            ... on Craft_teamGroups_group_BlockType {
              heading
              members {
                title
                ... on Craft_team_team_Entry {
                  image {
                    ... on Craft_images_Asset {
                      ...FragmentImage
                    }
                  }
                  role
                  copy
                }
              }
            }
          }
        }
      }
      seo: seomatic(uri: "our-team", asArray: true) {
        ...FragmentSEOMatic
      }
    }
  }
`

export default OurTeamPage
