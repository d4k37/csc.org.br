import React from "react"
import Helmet from "react-helmet"
import { toPairs } from "ramda"

const SEOMatic = ({
  metaTitleContainer,
  metaTagContainer,
  metaLinkContainer,
  metaJsonLdContainer,
}) => {
  const {
    title: { title },
  } = JSON.parse(metaTitleContainer)

  return (
    <Helmet>
      <title>{title}</title>

      {toPairs(JSON.parse(metaTagContainer)).map(([key, value]) => (
        <meta key={key} {...value} />
      ))}

      {toPairs(JSON.parse(metaLinkContainer)).map(([key, value]) => (
        <link key={key} {...value} />
      ))}

      {toPairs(JSON.parse(metaJsonLdContainer)).map(([key, value]) => (
        <script key={key} type="application/ld+json">
          {JSON.stringify(value)}
        </script>
      ))}
    </Helmet>
  )
}

export default SEOMatic
