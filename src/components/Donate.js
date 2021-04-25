import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Button from "./Button"

const Donate = () => {
  const data = {} //useStaticQuery(graphql`
  //   {
  //     craft {
  //       entries(section: "donate") {
  //         title
  //         ... on Craft_donate_donate_Entry {
  //           copy
  //         }
  //       }
  //     }
  //   }
  // `)

  const entry = data.craft.entries[0]

  return (
    <>
      <div
        className="copy text-center"
        dangerouslySetInnerHTML={{ __html: entry.copy }}
        data-aos="fade-in"
      ></div>
      <div className="flex justify-center mt-8 mb-4">
        <div className="flex flex-wrap items-center">
          <div data-aos="fade-in">
            <Button link="https://donate.csc.org.br" type="auxiliary">
              Donate
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Donate
