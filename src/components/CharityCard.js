import React from "react"
import PropTypes from "prop-types"
import tailwindCommon from "./../utils/tailwindCommon"
import Image from "./Image"
import { BiHeartCircle } from "@react-icons/all-files/bi/BiHeartCircle"
import { BiRightArrowAlt } from "@react-icons/all-files/bi/BiRightArrowAlt"

const CharityCard = ({ charityName, copy, logoColor, websiteUrl, image }) => {
  return (
    <article
      className={`${tailwindCommon.card} flex flex-col overflow-hidden`}
      data-aos="fade-in"
    >
      <a
        className={`${tailwindCommon.transition} ${tailwindCommon.hover}`}
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          {...image[0]}
          ratio="16:9"
          wrapperClass="overflow-hidden flex-shrink-0"
        />
      </a>
      <div className="relative flex flex-col h-full justify-between p-4 pt-12 md:p-8 md:pt-12">
        <div className="mb-4">
          <a
            className="block heart-logo"
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiHeartCircle style={{ color: logoColor }} />
          </a>

          <h3 className="text-xl md:text-xl md:mb-4 font-bold leading-normal mb-3">
            <a
              className={`${tailwindCommon.transition} ${tailwindCommon.hover}`}
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {charityName}
            </a>
          </h3>
          <div
            className="copy text-gray"
            dangerouslySetInnerHTML={{ __html: copy }}
          ></div>
        </div>
        <div className="border-t border-gray-400 pt-4">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center ${tailwindCommon.transition} ${tailwindCommon.hover}`}
          >
            <BiRightArrowAlt className="flex-shrink-0 mr-4" />
            <span>Visit website</span>
          </a>
        </div>
      </div>
    </article>
  )
}

CharityCard.propTypes = {
  charityName: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  logoColor: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
}

export default CharityCard
