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

  const entry = {
    copy: `<span>A Comunidade Servos da Cruz é mantida pela Divina Providência.
    Pessoas generosas são guiadas por Deus, através das doações sua misericórdia se manisfesta e nossa missão se realiza.
    Torne-se canal da Providência, seja um benfeitor, a sua contribuição é livre e espontânea.</span>`,
  }

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
