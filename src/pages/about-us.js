import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Layout from "../components/layout-2"
import SEO from "../components/seo"
import Container from "../components/container"
import Line from "../images/line.png"
import Linked from "../images/linkedin.svg"
import Icon1 from "../images/about1.svg"
import Icon2 from "../images/about2.svg"
import Icon3 from "../images/about3.svg"
import Icon4 from "../images/about4.svg"
import Icon5 from "../images/about5.svg"
import Icon6 from "../images/about6.svg"

const Heading = styled.h2`
  font-family: calibri;
  font-weight: bold;
  color: #2f5496;
  margin: 2em 0;
`

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 4em;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.08) 0 2px 10px 6px;
  background-color: #2f5496;
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
  font-family: calibri;
  font-size: 1.3em;
  font-weight: bold;
  color: #fff;
`
const Subheading = styled.p`
  font-family: calibri;
  color: #2f5496;
  max-width: 30em;
  font-weight: 500;
  line-height: 1.75em;
`

const TeamGrid = styled.section`
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 6em;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`
const TeamGridCon = styled.div`
  margin: 5em 0;
  display: flex;
  justify-content: center;
`
const SingleTeam = styled.div`
  text-align: center;
  display: grid;
  box-shadow: rgba(0, 0, 0, 0.1) 4px 0px 6px 0;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.25fr;
`
const MemberInfo = styled.div`
  display: grid;
  background-color: #fafafa;
  padding: 0.5em 0;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`
const ImageContainer = styled.div``
const Name = styled.span`
  font-family: calibri;
  font-weight: bold;
  color: #2f5496;
`
const Title = styled.span`
  font-family: calibri;
  color: #2f5496;
  font-weight: 500;
`
const Do = styled.span`
  font-family: calibri;
  color: #2f5496;
  font-weight: 400;
`
const Linke = styled.div`
  text-align: center;
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
            <Text>Industry tested Rating Model and Valuation Framework</Text>
          </TextContainer>
        </Card>
        <Card>
          <div>
            <img src={Icon2} alt="bv4 icon" />
          </div>
          <TextContainer>
            <Text>Assessed over 12’000 Startups and Brands</Text>
          </TextContainer>
        </Card>
        <Card>
          <div>
            <img src={Icon3} alt="bv4 icon" />
          </div>
          <TextContainer>
            <Text>Global Network of Scouts, Experts and Partners</Text>
          </TextContainer>
        </Card>
        <Card>
          <div>
            <img src={Icon4} alt="bv4 icon" />
          </div>
          <TextContainer>
            <Text>ISO-certified ​&​ Independent</Text>
          </TextContainer>
        </Card>
        <Card>
          <div>
            <img src={Icon5} alt="bv4 icon" />
          </div>
          <TextContainer>
            <Text>Proud Partner of key Startup Organisations</Text>
          </TextContainer>
        </Card>
        <Card>
          <div>
            <img src={Icon6} alt="bv4 icon" />
          </div>
          <TextContainer>
            <Text>
              Driven Team with a wide range of Know-How related of the Startup
              Ecosystem
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
        ecosystem and its investment environment.
      </Subheading>
      <TeamGridCon>
        <TeamGrid>
          <SingleTeam>
            <ImageContainer>
              <Img fixed={data.team1.childImageSharp.fixed} alt="" />
            </ImageContainer>
            <MemberInfo>
              <Name>Peter Schmid</Name>
              <Title>CEO</Title>
              <Do>Business Development</Do>
              <Linke>
                <a href="https://www.linkedin.com/in/peter-schmid-9049a68/">
                  <img style={{ marginBottom: "0" }} src={Linked} />
                </a>
              </Linke>
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
              <Linke>
                <a href="https://www.linkedin.com/in/pascal-st%C3%A4mpfli/">
                  <img style={{ marginBottom: "0" }} src={Linked} />
                </a>
              </Linke>
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
              <Linke>
                <a href="https://www.linkedin.com/in/dorian-ebneter-aa63aa143/">
                  <img style={{ marginBottom: "0" }} src={Linked} />
                </a>
              </Linke>
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
              <Linke>
                <a href="ttps://www.linkedin.com/in/vuk-vegezzi-114880104/">
                  <img style={{ marginBottom: "0" }} src={Linked} />
                </a>
              </Linke>
            </MemberInfo>
          </SingleTeam>
          <SingleTeam>
            <ImageContainer>
              <Img fixed={data.team4.childImageSharp.fixed} alt="" />
            </ImageContainer>
            <MemberInfo>
              <Name>Anna Sereika</Name>
              <Title>Startup Analyst</Title>
              <Do>Finance</Do>
              <Linke>
                <a href="https://www.linkedin.com/in/anna-sereika-a8256258/">
                  <img style={{ marginBottom: "0" }} src={Linked} />
                </a>
              </Linke>
            </MemberInfo>
          </SingleTeam>
          <SingleTeam>
            <ImageContainer>
              <Img fixed={data.team5.childImageSharp.fixed} alt="" />
            </ImageContainer>
            <MemberInfo>
              <Name>Edgar Kussberg</Name>
              <Title>Senior Expert</Title>
              <Do>Technology</Do>
              <Linke>
                <a href="https://www.linkedin.com/in/kussberg/">
                  <img style={{ marginBottom: "0" }} src={Linked} />
                </a>
              </Linke>
            </MemberInfo>
          </SingleTeam>
        </TeamGrid>
      </TeamGridCon>
    </Container>
  </Layout>
)

export default About

export const data = graphql`
  query {
    about: file(relativePath: { eq: "about.jpg" }) {
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
    team1: file(relativePath: { eq: "team1.jpg" }) {
      childImageSharp {
        fixed(
          height: 300
          quality: 100
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    team2: file(relativePath: { eq: "team2.jpg" }) {
      childImageSharp {
        fixed(
          height: 300
          quality: 100
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    team3: file(relativePath: { eq: "team3.jpg" }) {
      childImageSharp {
        fixed(
          height: 300
          quality: 100
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    team4: file(relativePath: { eq: "team4.jpg" }) {
      childImageSharp {
        fixed(
          height: 300
          quality: 100
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    team5: file(relativePath: { eq: "team5.jpg" }) {
      childImageSharp {
        fixed(
          height: 300
          quality: 100
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    team6: file(relativePath: { eq: "team6.jpg" }) {
      childImageSharp {
        fixed(
          height: 300
          quality: 100
          traceSVG: { background: "#ffff", color: "#2f5495" }
        ) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
