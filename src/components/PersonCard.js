import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tailwindCommon from "./../utils/tailwindCommon"
import Image from "./Image"

const PersonCardContent = ({ image, title, role, copy, fullWidthImage }) => (
  <>
    <Image
      {...image[0]}
      ratio={fullWidthImage ? "3:2" : "1:1"}
      wrapperClass={`relative overflow-hidden ${
        fullWidthImage ? "" : "w-24 h-24 mb-10 mx-auto rounded-full"
      }`}
    />
    <div className={fullWidthImage ? "p-8 md:px-10" : ""}>
      <h3 className={`text-xl font-bold mb-2`}>{title}</h3>
      <span className="block text-gray mb-6">{role}</span>
      <div
        className="copy text-sm leading-6"
        dangerouslySetInnerHTML={{ __html: copy }}
      ></div>
    </div>
  </>
)

const PersonCard = ({
  image,
  title,
  role,
  copy,
  fullWidthImage = false,
  href = null,
}) => {
  if (href) {
    return (
      <Link to={href} aria-label={title} className="block" data-aos="fade-in">
        <article
          className={`${tailwindCommon.card} ${
            fullWidthImage ? "" : "p-8 md:px-10"
          } h-full text-center ${tailwindCommon.transition} ${
            tailwindCommon.hover
          }`}
        >
          <PersonCardContent
            image={image}
            title={title}
            role={role}
            copy={copy}
            fullWidthImage={fullWidthImage}
          />
        </article>
      </Link>
    )
  }

  return (
    <article
      className={`${tailwindCommon.card} ${
        fullWidthImage ? "" : "p-8 md:px-10"
      } text-center`}
      data-aos="fade-in"
    >
      <PersonCardContent
        image={image}
        title={title}
        role={role}
        copy={copy}
        fullWidthImage={fullWidthImage}
      />
    </article>
  )
}

PersonCard.propTypes = {
  image: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  href: PropTypes.string,
}

export default PersonCard
