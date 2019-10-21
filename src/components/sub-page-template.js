import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import Layout from "../components/layout-2"
import SEO from "../components/seo"
import Container from "../components/container"
import Button from "../components/button"
import CTA from "../components/cta"

const Header = styled.div`
  padding: 2em 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`
const Top = styled.h2`
  color: #2f5496;
  font-family: calibri;
  font-weight: bold;
  max-width: 650px;
  line-height: 1.25em;
  @media (min-width: 750px) {
    padding-right: 1em;
  }
`

const IconsLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: center;
  }
`
const IconsRight = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: center;
  }
`
const IconContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.14) 0 4px 6px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 750px) {
    width: 350px;
    height: 350px;
  }
  img {
    padding: 2em 1em;
    margin-bottom: 0;
  }
`
const IconTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1.45em;
  @media (min-width: 750px) {
    align-items: ${props => (props.right ? "flex-end" : "flex-start")};
    width: 50%;
    padding-top: 0em;
  }
  div {
    max-width: 350px;
  }
  h3 {
    color: #2f5496;
    font-family: calibri;
    font-weight: 400;
    line-height: 1.2em;
  }
  p {
    color: #2f5496;
    font-family: calibri;
    font-weight: 400;
  }
`

const Spacer = styled.div`
  padding: 2.5em 0;
`

const HowContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: center;
  }
`

const HowText = styled.div`
  background-color: #2f5495;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.45em;
  @media (min-width: 750px) {
    width: 50%;
    padding: 0;
  }
  div {
    max-width: 350px;
  }
  h3 {
    color: white;
    font-family: calibri;
    font-weight: bold;
    margin-bottom: 0.5em;
  }
  span {
    color: white;
    font-family: calibri;
    font-weight: 400;
  }
  p {
    color: white;
    font-family: calibri;
    font-weight: 400;
    padding-top: 2em;
    line-height: 2em;
  }
`
const HowImage = styled.div`
  width: 100%;
  @media (min-width: 750px) {
    width: 50%;
  }
`

const Template = props => (
  <Layout data={props.data.landing} heading={props.heading}>
    <SEO title={props.heading} />
    <Container>
      <Header>
        <Top>{props.topText}</Top>
        <Button link="/contact-us" text="Contact Us" />
      </Header>
      <IconsLeft>
        <IconContainer>
          <img src={props.icon1} alt={props.icon1heading} />
        </IconContainer>
        <IconTextContainer right>
          <div>
            <h3>{props.icon1heading}</h3>
            <p>{props.icon1para}</p>
          </div>
        </IconTextContainer>
      </IconsLeft>
      <Spacer />
      <IconsRight>
        <IconTextContainer>
          <div>
            <h3>{props.icon2heading}</h3>
            <p>{props.icon2para}</p>
          </div>
        </IconTextContainer>
        <IconContainer>
          <img src={props.icon2} alt={props.icon2heading} />
        </IconContainer>
      </IconsRight>
      <Spacer />
      <IconsLeft>
        <IconContainer>
          <img src={props.icon3} alt={props.icon3heading} />
        </IconContainer>
        <IconTextContainer right>
          <div>
            <h3>{props.icon3heading}</h3>
            <p>{props.icon3para}</p>
          </div>
        </IconTextContainer>
      </IconsLeft>
      <Spacer />
    </Container>
    <HowContainer>
      <HowText>
        <div>
          <h3>How it works:</h3>
          <span>{props.howSub}</span>
          <p>{props.howText}</p>
        </div>
      </HowText>
      <HowImage>
        <Img
          style={{ maxHeight: "375px" }}
          fluid={props.data.how.childImageSharp.fluid}
          alt="how to image"
        />
      </HowImage>
    </HowContainer>
    <Spacer />
    <CTA
      text={props.ctaText}
      buttonText={props.ctaButton}
      link={props.ctaLink}
    />
  </Layout>
)

export default Template
