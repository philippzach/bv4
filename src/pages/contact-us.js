import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Button from "../components/button-phone"

import Layout from "../components/layout-2"
import SEO from "../components/seo"

const Heading = styled.h1`
  font-family: futura;
  color: #2f5496;
  margin: 1.5em 0 1em 0;
`
const Text = styled.div`
  max-width: 580px;
  color: #2f5496;
  margin: 0 auto 7em auto;
  text-align: center;
`
const Phone = styled.span`
  font-family: roboto;
  font-weight: bold;
  font-size: 1.25em;
`
const Hours = styled.span`
  color: #888686;
  font-family: roboto;
  display: block;
  font-size: 0.75em;
`
const Buttons = styled.div`
  margin-top: 1.45em;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-around;
`
const Meeting = styled.h2`
  font-family: futura;
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 2em;
  margin-bottom: 1.45em;
`

const Contact = ({ data }) => (
  <Layout data={data.contactus} heading="Contact Us">
    <SEO title="Contact Us" />
    <Text>
      <Heading>Contact Us</Heading>
      <Phone>
        <a href="tel:+41442009066">+41 44 200 90 66</a>
      </Phone>
      <Hours>Monday to Friday from 8AM to 5PM</Hours>
      <Buttons>
        <Button text="Call now" link="+41 44 200 90 66" />
      </Buttons>
      <rect>
        <svg
          width="100%"
          height="4px"
          viewBox="0 0 578 4"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="50%"
              cy="0%"
              fx="50%"
              fy="0%"
              r="8231.81018%"
              gradientTransform="translate(0.500000,0.000000),scale(0.006920,1.000000),rotate(4.946195),translate(-0.500000,-0.000000)"
              id="radialGradient-1"
            >
              <stop stop-color="#D8D8D8" offset="0%"></stop>
              <stop
                stop-color="#EEEEEE"
                stop-opacity="0.127321897"
                offset="100%"
              ></stop>
            </radialGradient>
          </defs>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Contact"
              transform="translate(-418.000000, -890.000000)"
              fill="url(#radialGradient-1)"
            >
              <rect
                id="Rectangle"
                x="418"
                y="890"
                width="578"
                height="4"
              ></rect>
            </g>
          </g>
        </svg>
      </rect>
      <Meeting>Or fill out the following contact form</Meeting>
      <Buttons>
        <Button text="Submit" link="/submit"></Button>
      </Buttons>
    </Text>
  </Layout>
)

export default Contact

export const data = graphql`
  query {
    contactus: file(relativePath: { eq: "contactus.jpg" }) {
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
