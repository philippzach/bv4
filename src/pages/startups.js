import React from "react"
import { graphql } from "gatsby"
import Cards from "../components/startup-investors"
import IconOne from "../images/startups-icon1.svg"
import IconTwo from "../images/startups-icon2.svg"
import IconThree from "../images/startups-icon3.svg"

import Layout from "../components/layout-2"
import SEO from "../components/seo"

const Startups = ({ data }) => (
  <Layout data={data.startups} heading="Startups">
    <SEO title="Startups" />
    <Cards
      text1="Rating"
      link1="/startups/rating"
      text2="Valuation"
      link2="/startups/valuation"
      text3="Financial
Modelling"
      link3="/startups/financial-modelling"
      icon1={IconOne}
      icon2={IconTwo}
      icon3={IconThree}
      longtext="We are the preferred partner for Startups looking for an independent assessment on their business. We are well connected with Venture Investors and can support you to increase your offering towards them."
    />
  </Layout>
)

export default Startups

export const data = graphql`
  query {
    startups: file(relativePath: { eq: "startups.jpg" }) {
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
