import React from "react"
import Template from "../../components/sub-page-template"
import Icon1 from "../../images/due1.svg"
import Icon2 from "../../images/due2.svg"
import Icon3 from "../../images/due3.svg"

const Due = ({ data }) => (
  <Template
    heading="Due Diligence"
    data={data}
    SeoDescription=""
    topText="Maximize your Deal Value"
    icon1={Icon1}
    icon1heading="Be prepared to Manage your Startup Investment

"
    icon1para="Being aware of the potential, value drivers and risks associated with your Startup investment enables you to develop and implement strategies together with the Startup to exploit opportunities and mitigate risks."
    icon2={Icon2}
    icon2heading="Minimize Deal Risks"
    icon2para="Identified risks can normally be removed or mitigated before the deal gets executed. Hence, associated risks will be lowered significantly during the Due Diligence, and the value of your investment maximized."
    icon3={Icon3}
    icon3heading="Create trust
"
    icon3para="BV4’s legal framework ensures the good faith of your transaction. Hence, it aims to create a lasting partnership between you and the Startup based on mutual trust."
    howSub="Due Diligence"
    howText="BV4’s Due Diligence process prepares Investors to execute the deal and helps to minimize Startup deal risks in four dimensions: finance, commercial, legal, and valuation. 
"
    ctaText="Get in touch to receive more information about our Due Diligence services"
    ctaButton="Contact Us"
    ctaLink="/contact-us"
  />
)

export default Due

export const data = graphql`
  query {
    landing: file(relativePath: { eq: "due.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1900
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    how: file(relativePath: { eq: "due-bottom.jpg" }) {
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
