import React from "react"
import PropTypes from "prop-types"
import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
import "lazysizes/plugins/respimg/ls.respimg"

const Image = ({
  url,
  useRatio,
  imgixParams,
  ratio,
  altText,
  focalPoint,
  autoFormat,
  style,
  imageClass,
  wrapperClass,
  css,
  width,
  height,
  disableAos,
}) => {
  const imageWidths = [375, 700, 750, 1180, 1440, 1800, 2100, 2400, 2880]
  const splitRatio = useRatio ? String(ratio).split(":") : null
  const heightModifer = useRatio ? splitRatio[1] / splitRatio[0] : null

  const generateTransformedImageUrl = width => {
    return `${url.split("?")[0]}?w=${width}${
      heightModifer !== null ? "&h=" + Math.ceil(width * heightModifer) : ""
    }`
  }

  return (
    <div
      style={style}
      className={wrapperClass}
      data-aos={disableAos ? "false" : "fade-in"}
    >
      <img
        src={generateTransformedImageUrl(16)}
        data-srcset={imageWidths.map(
          width => generateTransformedImageUrl(width) + ` ${width}w`
        )}
        data-sizes="auto"
        className={`lazyload ${imageClass}`}
        alt={altText}
        style={css}
        width={useRatio ? imageWidths[0] : width}
        height={useRatio ? imageWidths[0] * heightModifer : height}
      />
    </div>
  )
}

Image.defaultProps = {
  ratio: "16:9",
  useRatio: true,
  focalPoint: [0.5, 0.5],
  autoFormat: false,
  imgixParams: ``,
  style: {},
  imageClass: `w-full h-auto relative z-10`,
  wrapperClass: `overflow-hidden`,
  disableAos: false,
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  altText: PropTypes.string,
  ratio: PropTypes.string,
  focalPoint: PropTypes.array,
  autoFormat: PropTypes.bool,
  imgixParams: PropTypes.string,
  style: PropTypes.object,
  imageClass: PropTypes.string,
  wrapperClass: PropTypes.string,
  disableAos: PropTypes.bool,
}

export default Image
