import React from "react"
import { graphql } from "gatsby"
import Template from "../../components/sub-page-template"
import Icon1 from "../../images/rating1.svg"
import Icon2 from "../../images/rating2.svg"
import Icon3 from "../../images/rating3.svg"

const Scouting = ({ data }) => (
  <Template
    heading="Scouting / Rating"
    data={data}
    SeoDescription=""
    topText="Rate your Startup for free and Identify your Strengths & Weaknesses from an Investor’s Perspective"
    icon1={Icon1}
    icon1heading="Improve your Pitch"
    icon1para="Receive timely and detailed feedback that helps you to improve your pitch deck and increase your potential for funding."
    icon2={Icon2}
    icon2heading="Increase Credibility"
    icon2para="Leverage our experience and network by obtaining an industry recognized rating for your Startup. BV4 has reviewed over 12,000 Startups and brands making us a trusted partner in the Startup ecosystem. "
    icon3={Icon3}
    icon3heading="Gain Exposure"
    icon3para="The services of BV4 are highly trusted by a wide range of Investors in Switzerland and internationally. Rated Startups benefit from an increased exposure and visibility to potential investors via the BV4 network. This increases the possibility of funding as well as market recognition. "
    howSub="Rating Model"
    howText="BV4’s independent Startup Rating evaluates the attractiveness of a Startup to a potential Investor. The model is especially suited for evaluating Early Stage startups such as Seed and Series A. Our methodology was developed together with the University of St. Gallen."
    ctaText="Apply for a FREE Rating"
    ctaButton="Now"
    ctaLink="/contact-us"
  />
)

export default Scouting

export const data = graphql`
  query {
    landing: file(relativePath: { eq: "rating.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1900
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    how: file(relativePath: { eq: "rating-bottom.jpg" }) {
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
