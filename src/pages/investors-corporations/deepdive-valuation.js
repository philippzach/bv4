import React from "react"
import Template from "../../components/sub-page-template"
import Icon1 from "../../images/deepdive1.svg"
import Icon2 from "../../images/deepdive2.svg"
import Icon3 from "../../images/deepdive3.svg"

const Deep = ({ data }) => (
  <Template
    heading=" DeepDive / Valuation"
    data={data}
    SeoDescription=""
    topText="Make the right Investment Decisions"
    icon1={Icon1}
    icon1heading="Make an informed Decision
"
    icon1para="The DeepDive provides you with a solid basis in your decision-making process. The document captures relevant investment criteria and is tailored to the requirements of your investment committee."
    icon2={Icon2}
    icon2heading="Avoid biased Decisions"
    icon2para="We are trained to conduct assessments in an objective and independent way. Hence, the DeepDive provides you with an unbiased analysis and investment recommendation."
    icon3={Icon3}
    icon3heading="Minimize your Valuation Risks
"
    icon3para="The BV4 Startup Valuation framework is based on three different approaches to identify the true & fair value of a Startup, minimizing the risks of overpaying."
    howSub="DeepDive"
    howText="Next to the team assessment, the DeepDive provides you with a detailed analysis of the product, market, and business model. Positive as well as negative findings are summarized in each section. The management report concludes with a synthesis, an independent valuation, and investment recommendation by BV4.
"
    ctaText="Get in touch to receive more information or let us challenge your valuation with a second opinion"
    ctaButton="Contact Us"
    ctaLink="/contact-us"
  />
)

export default Deep

export const data = graphql`
  query {
    landing: file(relativePath: { eq: "deepdive.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1900
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    how: file(relativePath: { eq: "deepdive-bottom.jpg" }) {
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
