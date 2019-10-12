import React from "react"

import Layout from "../components/layout-2"
import SEO from "../components/seo"

const NotFoundPage = ({ data }) => (
  <Layout data={data.contact} heading="Not Found">
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

export const data = graphql`
  query {
    contact: file(relativePath: { eq: "contactus.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1900
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
