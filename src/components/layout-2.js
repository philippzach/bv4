import React from "react"

import Img from "gatsby-image"
import styled from "@emotion/styled"
import Footer from "../components/footer"

import Header from "./header"
import "./layout.css"

const Heading = styled.h1`
  position: absolute;
  z-index: 10;
  font-family: calibri;
  font-weight: bold;
  color: white;
  text-shadow: rgba(0, 0, 0, 0.5) 0 2px 4px;
  line-height: 1.25em;
  max-width: 80%;
  left: 50%;
  transform: translateX(-50%);
  top: 150px;
  @media (max-width: 410px) {
    display: none;
  }
  @media (max-width: 600px) and (min-width: 411px) {
    top: 120px;
  }
  @media (min-width: 601px) and (max-width: 850px) {
    top: 120px;
  }
  @media (min-width: 1050px) and (max-width: 1249px) {
    top: 120px;
  }
  @media (min-width: 1250px) and (max-width: 1499px) {
    top: 120px;
  }
  @media (min-width: 1500px) {
    top: 120px;
  }
`
const FooterBg = styled.footer`
  background-color: #f6f7f9;
  color: #25457f;
`

const Layout = ({ children, data, heading }) => {
  return (
    <>
      <Header />
      <Heading>{heading}</Heading>
      <Img
        className="headerpic-layout2"
        fluid={data.childImageSharp.fluid}
        alt="bv4 header image"
        style={{ zIndex: "-1", maxHeight: "250px" }}
      ></Img>

      <main>{children}</main>

      <FooterBg>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1250,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <Footer />
        </div>
      </FooterBg>
    </>
  )
}

export default Layout
