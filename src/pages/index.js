import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import Container from "../components/container"

import Investor from "../images/lp-investor.svg"
import Startup from "../images/pl-startup.svg"

import Layout from "../components/layout"
import Cta from "../components/cta"

import SEO from "../components/seo"

const BlueBackground = styled.div`
  background-color: #294881;
`
const LogoContainer = styled.div`
  background-color: white;
  height: 90px;
  box-shadow: rgba(0, 0, 0, 0.14) 4px 5px 9px;
  margin-top: -2.5em;
  margin-bottom: 5em;
`

const Card = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 6px;
  align-items: center;
  justify-content: center;
  display: grid;
  text-align: center;
  grid-template-rows: 2fr 4fr 1fr;
  z-index: 1000;
  margin-top: -5em;
  h2 {
    margin-bottom: 0;
    font-family: futura;
    font-weight: bold;
    color: #2f5495;
    padding: 1em 0 0.7em;
  }
  img {
    margin-bottom: 0;
  }
  span {
    font-family: roboto;
    font-weight: bold;
    color: #2f5495;
    margin-top: -1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    box-shadow: 0 1rem 2.5rem 0 rgba(39, 48, 54, 0.25);
    transform: translateY(-0.125rem);
  }
`
const ImgContainer = styled.div``
const CardLayout = styled.div`
  display: grid;
  grid-template-columns: 350px 350px;
  grid-gap: 3em;
  justify-content: center;
  padding: 0 0 6em 0;
`

const IndexPage = ({ data }) => (
  <Layout data={data.landing}>
    <SEO title="Home" />
    <BlueBackground>
      <Container>
        <CardLayout>
          <Card>
            <Link to="/investors-corporations">
              <h2>
                For Investors / <br />
                Corporations
              </h2>
            </Link>
            <Link to="/investors-corporations">
              <ImgContainer>
                <img src={Investor} alt="bv4 investor icon" />
              </ImgContainer>
            </Link>
            <Link to="/investors-corporations">
              <span>
                Learn more{" "}
                <svg
                  style={{ marginLeft: "8px" }}
                  width="14px"
                  height="15px"
                  viewBox="0 0 14 15"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Page-2"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="BV4_Landing_V4"
                      transform="translate(-547.000000, -1076.000000)"
                      fill="#2F5495"
                      stroke="#2F5495"
                    >
                      <g
                        id="Group-4"
                        transform="translate(548.000000, 1077.000000)"
                      >
                        <path
                          d="M6.1138167,0.195519624 C6.37803713,-0.0651732081 6.79400578,-0.0651732081 7.05822621,0.195519624 C7.31352027,0.447405266 7.31352027,0.866627524 7.05822621,1.11792602 L2.2695285,5.84269003 L11.2418728,5.84269003 C11.6102341,5.84269003 12,6.13655661 12,6.5 C12,6.86344339 11.6102341,7.15672282 11.2418728,7.15672282 L2.2695285,7.15672282 L7.05822621,11.8726796 C7.31352027,12.1333725 7.31352027,12.5531819 7.05822621,12.8044804 C6.79400578,13.0651732 6.37803713,13.0651732 6.1138167,12.8044804 L0.191470546,6.9612032 C-0.0638235154,6.70931756 -0.0638235154,6.2900953 0.191470546,6.0387968 L6.1138167,0.195519624 Z"
                          id="Fill-1"
                          transform="translate(6.000000, 6.500000) scale(-1, 1) translate(-6.000000, -6.500000) "
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </Link>
          </Card>

          <Card>
            <Link to="/startups">
              <h2>For Startups</h2>
            </Link>
            <Link to="/startups">
              <ImgContainer>
                <img src={Startup} alt="bv4 startup icon" />
              </ImgContainer>
            </Link>
            <Link to="/startups">
              <span>
                Learn more{" "}
                <svg
                  style={{ marginLeft: "8px" }}
                  width="14px"
                  height="15px"
                  viewBox="0 0 14 15"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Page-2"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="BV4_Landing_V4"
                      transform="translate(-547.000000, -1076.000000)"
                      fill="#2F5495"
                      stroke="#2F5495"
                    >
                      <g
                        id="Group-4"
                        transform="translate(548.000000, 1077.000000)"
                      >
                        <path
                          d="M6.1138167,0.195519624 C6.37803713,-0.0651732081 6.79400578,-0.0651732081 7.05822621,0.195519624 C7.31352027,0.447405266 7.31352027,0.866627524 7.05822621,1.11792602 L2.2695285,5.84269003 L11.2418728,5.84269003 C11.6102341,5.84269003 12,6.13655661 12,6.5 C12,6.86344339 11.6102341,7.15672282 11.2418728,7.15672282 L2.2695285,7.15672282 L7.05822621,11.8726796 C7.31352027,12.1333725 7.31352027,12.5531819 7.05822621,12.8044804 C6.79400578,13.0651732 6.37803713,13.0651732 6.1138167,12.8044804 L0.191470546,6.9612032 C-0.0638235154,6.70931756 -0.0638235154,6.2900953 0.191470546,6.0387968 L6.1138167,0.195519624 Z"
                          id="Fill-1"
                          transform="translate(6.000000, 6.500000) scale(-1, 1) translate(-6.000000, -6.500000) "
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </Link>
          </Card>
        </CardLayout>
      </Container>
    </BlueBackground>
    <Container>
      <LogoContainer></LogoContainer>
      <Cta
        text="Learn more abut our unique approach and what we offer"
        buttonText="Contact us"
        link="/contact-us"
      />
    </Container>
  </Layout>
)

export const data = graphql`
  query {
    landing: file(relativePath: { eq: "lp-header.jpg" }) {
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

export default IndexPage
