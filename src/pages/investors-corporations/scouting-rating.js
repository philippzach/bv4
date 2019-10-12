import React from "react"
import Template from "../../components/sub-page-template"
import Icon1 from "../../images/scouting1.svg"
import Icon2 from "../../images/scouting2.svg"
import Icon3 from "../../images/scouting3.svg"

const Scout = ({ data }) => (
  <Template
    heading="Scouting"
    data={data}
    SeoDescription=""
    topText="Find and Select the best Startup Deals according to your Investment Strategy "
    icon1={Icon1}
    icon1heading="Find the most promising Startup Cases"
    icon1para="BV4’s scouting methodology enables us to detect the most promising Startup cases for you. BV4 is well connected in the Startup ecosystem and has access to relevant databases and events."
    icon2={Icon2}
    icon2heading="Select the Startups with the highest Potential"
    icon2para="BV4’s rating model is based on scientifically proven Startup success factors in four dimensions: team, product, market, and business model. Our ratings are executed independently and objectively to ensure the comparability of the different Startup cases. To this day, we have rated over 3’000 Startups and are continuously tracking them in our database."
    icon3={Icon3}
    icon3heading="Increase your Efficiency in the Evaluation Phase"
    icon3para="Thanks to our extensive knowledge and expertise, we can rate and assess your Startup cases in an efficient way that saves you time and costs in the evaluation phase."
    howSub="Rating Method"
    howText="The independent Startup Rating of BV4 evaluates the attractiveness of a Startup to a potential Investor. It covers four dimensions: team, product, market, and business model. The rating model is especially suited for evaluating Early Stage Startups such as Seed and Series A."
    ctaText="Get in touch to receive more information about our Scouting / Rating services"
    ctaButton="Contact Us"
    ctaLink="/contact-us"
  />
)

export default Scout

export const data = graphql`
  query {
    landing: file(relativePath: { eq: "scouting.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1900
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    how: file(relativePath: { eq: "scouting-bottom.jpg" }) {
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
