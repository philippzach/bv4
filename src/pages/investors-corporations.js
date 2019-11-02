import React from "react"
import { graphql } from "gatsby"
import Cards from "../components/startup-investors"
import IconOne from "../images/investor-icon1.svg"
import IconTwo from "../images/investor-icon2.svg"
import IconThree from "../images/investor-icon3.svg"

import Layout from "../components/layout-2"
import SEO from "../components/seo"

const Investors = ({ data }) => (
  <Layout data={data.investors} heading="Investors / Corporations">
    <SEO title="Investors" />
    <Cards
      text1="Scouting / Rating"
      link1="/investors-corporations/scouting-rating"
      text2="DeepDive / Valuation"
      link2="/investors-corporations/deepdive-valuation"
      text3="Due Diligence"
      link3="/investors-corporations/due-diligence"
      icon1={IconOne}
      icon2={IconTwo}
      icon3={IconThree}
      longtext="We are the preferred partner for corporate, institutional, and private Investors alike. With our proprietary tools and methodologies, we support you along the entire investment value chain from Startup Scouting to Due Diligence."
    />
  </Layout>
)

export default Investors

export const data = graphql`
  query {
    investors: file(relativePath: { eq: "investors.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2900
          quality: 100
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
