import React from "react"
import Template from "../../components/sub-page-template"
import Icon1 from "../../images/financial1.svg"
import Icon2 from "../../images/financial2.svg"
import Icon3 from "../../images/financial3.svg"

const Financial = ({ data }) => (
  <Template
    heading="Financial Modeling"
    data={data}
    SeoDescription=""
    topText="Be financially savvy"
    icon1={Icon1}
    icon1heading="Know your Value Drivers"
    icon1para="Be able to demonstrate Investors that you understand the unit economics of your business and that you have a strategy in place how to improve them over time."
    icon2={Icon2}
    icon2heading="Increase the Value of your Startup"
    icon2para="Knowing the composition and mechanics of your cash flows helps you to understand your funding requirements but also how to increase the value of your business."
    icon3={Icon3}
    icon3heading="Be prepared for various Scenarios"
    icon3para="The future is uncertain. Hence, various financial scenarios will help you prepare to manage your business in any situation."
    howSub="Business Modeling"
    howText="BV4 has assessed and supported many Startups in financial modeling in the past. We can develop and improve your existing financial model or build one from scratch."
    ctaText="Get in touch to receive more information about our Financial Modeling services"
    ctaButton="Contact Us"
    ctaLink="/contact-us"
  />
)

export default Financial

export const data = graphql`
  query {
    landing: file(relativePath: { eq: "financial.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1900
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    how: file(relativePath: { eq: "financial-bottom.jpg" }) {
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
