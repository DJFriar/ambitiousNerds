import React from 'react'
import { Helmet } from "react-helmet"

const SEO = () => {
  return (
    <div>
      <Helmet>
        <title>Rewy - Gatsby IT Startup Templates Collection</title>
        <meta name="description" content="ambitiousNerds - Modern Full-Stack Web, iOS, and Android Development" />
        <meta name="og:title" property="og:title" content="ambitiousNerds - Modern Full-Stack Web, iOS, and Android Development"></meta>
        <meta name="twitter:card" content="ambitiousNerds - Modern Full-Stack Web, iOS, and Android Development"></meta>
        <link rel="canonical" href="https://www.ambitiousnerds.com/"></link>
        {/* <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" /> */}
      </Helmet>
    </div>
  )
}

export default SEO
