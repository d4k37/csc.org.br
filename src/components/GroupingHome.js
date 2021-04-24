import React from "react"
import Image from "~components/Image"
import LinkLine from "~components/LinkLine"
import tailwindCommon from "~utils/tailwindCommon"

const GroupingHome = ({ title, introText, pagesInThisGroup, image }) => {
  return (
    <div data-aos="fade-in">
      <article className="flex flex-col">
        <div className="mb-6 lg:w-56 md:h-40 lg:h-56 flex align-middle items-center">
          <Image {...image[0]} useRatio={false} />
        </div>

        <h2 className={`mb-4 ${tailwindCommon.subheading}`}>{title}</h2>
        <p className="text-gray mb-8">{introText}</p>
        <ul>
          {pagesInThisGroup.map(page => (
            <li key={page.uid}>
              <LinkLine link={page.uri}>{page.title}</LinkLine>
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}

export default GroupingHome
