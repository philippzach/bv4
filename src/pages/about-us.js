import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Layout from "../components/layout-2"
import SEO from "../components/seo"
import Container from "../components/container"
import Line from "../images/line.png"
import Icon1 from "../images/about1.svg"
import Icon2 from "../images/about2.svg"
import Icon3 from "../images/about3.svg"
import Icon4 from "../images/about4.svg"
import Icon5 from "../images/about5.svg"
import Icon6 from "../images/about6.svg"

const Heading = styled.h2`
  font-family: futura;
  font-weight: bold;
  color: #2f5496;
  margin: 2em 0;
`

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 4em;
`

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.08) 0 2px 10px 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
`
const TextContainer = styled.div`
  text-align: center;
`
const Text = styled.span`
  text-transform: uppercase;
  font-family: futura;
  font-weight: bold;
  color: #2f5496;
`
const Subheading = styled.p`
  font-family: roboto;
  color: #2f5496;
  max-width: 30em;
  font-weight: 500;
  line-height: 1.75em;
`

const TeamGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 6em;
`
const SingleTeam = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.25fr;
`
const MemberInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`
const ImageContainer = styled.div``
const Name = styled.span`
  font-family: futura;
  font-weight: bold;
  color: #2f5496;
`
const Title = styled.span`
  font-family: roboto;
  color: #2f5496;
  font-weight: 500;
`
const Do = styled.span`
  font-family: roboto;
  color: #2f5496;
  font-weight: 400;
`

const About = ({ data }) => (
  <Layout data={data.about} heading="About Us">
    <SEO title="About Us" />
    <Container>
      <Heading>Why work with us?</Heading>
      <Grid>
        <Card>
          <div>
            <img src={Icon1} alt="bv4 icon" />
          </div>
          <TextContainer>
            <Text>Industry tested Rating model and Valuation framework</Text>
          </TextContainer>
        </Card>
        <Card>
          <div>
            <img src={Icon2} alt="bv4 icon" />
          </div>
          <TextContainer>
            <Text>Assessed over 12,000 startups and brands </Text>
          </TextContainer>
        </Card>
        <Card>
          <div>
            <img src={Icon3} alt="bv4 icon" />
          </div>
          <TextContainer>
            <Text>Global network of Scouts, Experts and Partners</Text>
          </TextContainer>
        </Card>
        <Card>
          <div>
            <img src={Icon4} alt="bv4 icon" />
          </div>
          <TextContainer>
            <Text>ISO Certified Independent</Text>
          </TextContainer>
        </Card>
        <Card>
          <div>
            <img src={Icon5} alt="bv4 icon" />
          </div>
          <TextContainer>
            <Text>Key Partner of Swiss Startup Capital AG</Text>
          </TextContainer>
        </Card>
        <Card>
          <div>
            <img src={Icon6} alt="bv4 icon" />
          </div>
          <TextContainer>
            <Text>
              Driven team with a wide range of Know-How related to the Startup
              ecosystem
            </Text>
          </TextContainer>
        </Card>
      </Grid>
      <div style={{ padding: "2em" }} />
      <div style={{ textAlign: "center" }}>
        <img style={{ marginBottom: "0" }} src={Line} alt="line" />
      </div>

      <Heading>Our Team</Heading>
      <Subheading>
        {" "}
        We are a diverse team driven by our passion for the global Startup
        ecosystem and its investment enviroment.
      </Subheading>
      <TeamGrid>
        <SingleTeam>
          <ImageContainer>
            <Img fixed={data.team1.childImageSharp.fixed} alt="" />
          </ImageContainer>
          <MemberInfo>
            <Name>Peter Schmid</Name>
            <Title>CEO</Title>
            <Do>Business Development</Do>
          </MemberInfo>
        </SingleTeam>
        <SingleTeam>
          <ImageContainer>
            <Img fixed={data.team2.childImageSharp.fixed} alt="" />
          </ImageContainer>
          <MemberInfo>
            <Name>Pascal Stämpfli</Name>
            <Title>Lead Analyst, CFA</Title>
            <Do>Finance</Do>
          </MemberInfo>
        </SingleTeam>
        <SingleTeam>
          <ImageContainer>
            <Img fixed={data.team3.childImageSharp.fixed} alt="" />
          </ImageContainer>
          <MemberInfo>
            <Name>Dorian Ebneter</Name>
            <Title>Associate</Title>
            <Do>Consulting</Do>
          </MemberInfo>
        </SingleTeam>
        <SingleTeam>
          <ImageContainer>
            <Img fixed={data.team4.childImageSharp.fixed} alt="" />
          </ImageContainer>
          <MemberInfo>
            <Name> Anna Sereika</Name>
            <Title>Startup Analyst</Title>
            <Do>Finance</Do>
          </MemberInfo>
        </SingleTeam>
        <SingleTeam>
          <ImageContainer>
            <Img fixed={data.team5.childImageSharp.fixed} alt="" />
          </ImageContainer>
          <MemberInfo>
            <Name> Jeremy Meier</Name>
            <Title>Startup Analyst</Title>
            <Do>Consulting</Do>
          </MemberInfo>
        </SingleTeam>
        <SingleTeam>
          <ImageContainer>
            <Img fixed={data.team6.childImageSharp.fixed} alt="" />
          </ImageContainer>
          <MemberInfo>
            <Name>Vuk Vegezzi</Name>
            <Title>Startup Analyst</Title>
            <Do>Consulting</Do>
          </MemberInfo>
        </SingleTeam>
      </TeamGrid>
    </Container>
  </Layout>
)

export default About

export const data = graphql`
  query {
    about: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1900
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    team1: file(relativePath: { eq: "team1.jpg" }) {
      childImageSharp {
        fixed(
          height: 300
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    team2: file(relativePath: { eq: "team2.jpg" }) {
      childImageSharp {
        fixed(
          height: 300
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    team3: file(relativePath: { eq: "team3.jpg" }) {
      childImageSharp {
        fixed(
          height: 300
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    team4: file(relativePath: { eq: "team4.jpg" }) {
      childImageSharp {
        fixed(
          height: 300
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    team5: file(relativePath: { eq: "team5.jpg" }) {
      childImageSharp {
        fixed(
          height: 300
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    team6: file(relativePath: { eq: "team6.jpg" }) {
      childImageSharp {
        fixed(
          height: 300
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`
