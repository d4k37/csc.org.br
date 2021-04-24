import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import moment from "moment"
import tailwindCommon from "./../utils/tailwindCommon"
import Image from "./Image"

const BlogCard = ({ uri, image, title, postDate }) => {
  const formattedDate = moment(postDate).format("Do MMMM YYYY")

  return (
    <div data-aos="fade-in">
      <Link to={uri} aria-label={title}>
        <div
          className={`${tailwindCommon.card} overflow-hidden flex flex-col h-full ${tailwindCommon.transition} ${tailwindCommon.hover}`}
        >
          {image && image.length > 0 && (
            <Image
              {...image[0]}
              ratio="16:9"
              wrapperClass="overflow-hidden flex-shrink-0"
            />
          )}
          <div className="flex flex-col h-full justify-between p-5 md:p-10">
            <h3 className="md:text-xl md:mb-12 leading-normal mb-3">{title}</h3>
            <time
              className="text-sm text-gray leading-snug"
              dateTime={formattedDate}
            >
              {formattedDate}
            </time>
          </div>
        </div>
      </Link>
    </div>
  )
}

BlogCard.propTypes = {
  uri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  image: PropTypes.array,
}

export default BlogCard
