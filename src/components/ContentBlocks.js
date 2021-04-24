import React from "react"
import tailwindCommon from "~utils/tailwindCommon"
import { TwitterTweetEmbed } from "react-twitter-embed"

import Copy from "./Copy"
import Image from "./Image"
import Video from "./Video"
import Button from "./Button"
import LinkLine from "./LinkLine"
import PersonCard from "./PersonCard"

const ContentBlocks = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, i) => (
        <div key={i} data-aos="fade-in">
          {(() => {
            switch (block.typeHandle) {
              case "copy":
                return (
                  <div className="container-sm pb-8">
                    <Copy html={block.copy} />
                  </div>
                )
              case "subTitle":
                return (
                  <div className="container-sm pb-8">
                    <h2 className={`${tailwindCommon.subheading}`}>
                      {block.subTitle}
                    </h2>
                  </div>
                )
              case "image":
                return (
                  <div className="container-md pb-8">
                    <Image {...block.image[0]} useRatio={false} />
                  </div>
                )
              case "video":
                return (
                  <div className="container-md pb-8">
                    <Video id={block.videoId} vendor={block.vendorName} />
                  </div>
                )
              case "button":
                return (
                  <div className="container-sm flex justify-center pb-8">
                    <Button link={block.buttonUrl}>{block.buttonText}</Button>
                  </div>
                )
              case "pullout":
                return (
                  <div className="py-16 md:py-24 pb-8 bg-gray-300">
                    <div className="container-md">
                      <div
                        className="copy text-xl md:text-2xl"
                        dangerouslySetInnerHTML={{ __html: block.copy }}
                      ></div>
                    </div>
                  </div>
                )
              case "linkLines":
                return (
                  <div className="container-sm pb-8">
                    {block.heading && (
                      <h3 className="font-bold uppercase pb-6">
                        {block.heading}
                      </h3>
                    )}
                    {block.links.map((link, i) => (
                      <LinkLine key={i} link={link.url} usePrefix={false}>
                        {link.text}
                      </LinkLine>
                    ))}
                  </div>
                )
              case "tweet":
                return (
                  <div className="container-sm pb-8">
                    <TwitterTweetEmbed tweetId={block.tweetId} />
                    {typeof window !== "undefined" &&
                      window.navigator.userAgent.match(/(MSIE|Trident)/) && (
                        <div className="copy block">
                          <p>
                            <em>
                              You're using an outdated browser that does not
                              support Twitter embeds. <br /> You might want to{" "}
                              <a
                                href="https://browser-update.org/update.html"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                upgrade
                              </a>
                              .
                            </em>
                          </p>
                        </div>
                      )}
                  </div>
                )
              case "embed":
                let containerClass

                switch (block.size) {
                  case "tight":
                    containerClass = "container-sm"
                    break
                  case "medium":
                    containerClass = "container-md"
                    break
                  case "full":
                    containerClass = "container"
                    break
                  case "fullBleed":
                    containerClass = ""
                    break
                  default:
                    containerClass = "container"
                }

                return (
                  <>
                    <div
                      className={`${containerClass} pb-8`}
                      dangerouslySetInnerHTML={{ __html: block.html }}
                    ></div>
                  </>
                )
              case "people":
                return (
                  <div className="container-md pb-8">
                    <div className="grid md:grid-cols-2 md:col-gap-10 row-gap-12">
                      {block.people.map((person, i) => {
                        return (
                          <PersonCard
                            key={i}
                            href={
                              person.typeHandle === "multiplier"
                                ? `/${person.uri}`
                                : null
                            }
                            {...person}
                            fullWidthImage={true}
                          />
                        )
                      })}
                    </div>
                  </div>
                )
              default:
                return <>{`Missing block type - ${block.typeHandle}`}</>
            }
          })()}
        </div>
      ))}
    </>
  )
}

export default ContentBlocks
