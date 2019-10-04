import React from "react"

import Img from "gatsby-image"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const Heading = styled.h1`
  position: absolute;
  z-index: 100;
  font-family: futura;
  font-weight: bold;
  color: white;
  text-shadow: rgba(0, 0, 0, 0.5) 0 2px 4px;
  line-height: 1.25em;
  max-width: 80%;
  left: 50%;
  transform: translateX(-50%);
  top: 250px;
`
const Footer = styled.footer`
  background-color: #f6f7f9;
  color: #25457f;
`

const Layout = ({ children, data, heading }) => {
  return (
    <>
      <Header />
      <Heading>{heading}</Heading>
      <Img
        fluid={data.childImageSharp.fluid}
        alt="bv4 header image"
        style={{ zIndex: "-1" }}
      ></Img>

      <main>{children}</main>

      <Footer>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1250,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          © {new Date().getFullYear()},{` `}
          <a href="https://www.gatsbyjs.org">BV4</a>
        </div>
      </Footer>
    </>
  )
}

export default Layout
