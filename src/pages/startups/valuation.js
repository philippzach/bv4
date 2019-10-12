import React from "react"
import Template from "../../components/sub-page-template"
import Icon1 from "../../images/valuation1.svg"
import Icon2 from "../../images/valuation2.svg"
import Icon3 from "../../images/valuation3.svg"

const Valuation = ({ data }) => (
  <Template
    heading="Valuation"
    data={data}
    SeoDescription=""
    topText="Know the True & Fair Value of your Startup"
    icon1={Icon1}
    icon1heading="Know your Value"
    icon1para="Knowing your fair value is key to make sure that you get the right investment deal. A wrong valuation, no matter if it is too high or too low, can block future opportunities and therefore have significant impact on a Startup and its true potential."
    icon2={Icon2}
    icon2heading="Be Confident when Negotiating"
    icon2para="It is important for Startups to know and understand how the Valuation process works so that they can confidently explain their numbers. BV4 provides a structured approach to value your Startup and will guide you through the process. We want to make sure you are well prepared for your Investor meetings."
    icon3={Icon3}
    icon3heading="Establish successful & lasting Partnerships"
    icon3para="We believe that an investment is only the first step to building a long-lasting partnership with your Investors. Our independent and objective valuation framework helps you build the foundation."
    howSub="Valuation Methodology"
    howText="The BV4 Startup Valuation framework consists of three different methods: discounted cash flow, market approach and the proprietary data-driven BV4 Model. Each valuation method has its own strengths and weaknesses. To receive a true & fair value, the methods are weighted according to the validity which is mainly based on the stage of the Startup."
    ctaText="Get in touch to receive more information or let us challenge your Valuation with a second opinion"
    ctaButton="Contact Us"
    ctaLink="/contact-us"
  />
)

export default Valuation

export const data = graphql`
  query {
    landing: file(relativePath: { eq: "valuation.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1900
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    how: file(relativePath: { eq: "valuation-bottom.jpg" }) {
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
