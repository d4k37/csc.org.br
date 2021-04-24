import React from "react"
import PropTypes from "prop-types"
import moment from "moment"
import tailwindCommon from "~utils/tailwindCommon"
import Twitter from "~icons/twitter.svg"

const TweetCard = ({ postDate, tweet, tweetUrl }) => {
  const formattedDate = moment(postDate).format("Do MMMM YYYY")
  const tweetDate = moment(postDate).format("Do MMMM YYYY [at] kk:mm")
  return (
    <article
      className={`${tailwindCommon.card} border-l-4 border-twitter-blue p-8 text-lg`}
      data-aos="fade-in"
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <Twitter className="mb-8" />
          <p>{tweet}</p>
        </div>
        <a
          className={`${tailwindCommon.transition} ${tailwindCommon.hover}`}
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <time
            className="text-sm text-gray leading-snug"
            dateTime={formattedDate}
          >
            {tweetDate}
          </time>
        </a>
      </div>
    </article>
  )
}

TweetCard.propTypes = {
  tweet: PropTypes.string.isRequired,
  tweetUrl: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
}

export default TweetCard
