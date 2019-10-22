import React, { Component } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "./blog.css"

const List = styled.article`
font-family: calibri;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  background: #fff;
  position: relative;
  margin-bottom: 4rem;
  box-shadow: 2px 2px 30px #949e9b35;
  :hover {
    box-shadow: 2px 2px 30px #949e9b;
    transform: translateY(-1px);
    transition: all 0.2s ease;
  }
  @media (min-width: 64em) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1.5fr;
  }
`

const Footer = styled.p`
font-family: calibri;
  color: rgb(55, 55, 54);
  margin-bottom: 0;
  font-size: 0.75em;
  padding: 1.5rem 0;
  a {
    font-style: normal;
    font-weight: normal;
  }
`

const StyledLink = styled.p`
  font-size: 1.5rem;
  margin-bottom: 0;
  color: rgb(55, 55, 54);
  font-style: normal;
  margin-bottom: 1.3rem;
  line-height: 1.35em;
  font-weight: 600;
`
const Description = styled.p`
  color: rgb(55, 55, 54);
  line-height: 25px;
  font-size: 1rem;
  margin-bottom: 0;
`
const Text = styled.div`
  padding: 1.5em;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

export default class BlogItemDE extends Component {
  render() {
    const { node } = this.props
    const DateString = new Date(node.data.date)
    let options = { year: "numeric", month: "long", day: "numeric" }
    const PubDate = DateString.toLocaleDateString("de-AT", options)
    return (
      <List className="blogpost">
        <Link className="blogitemlink" to={`/blog/${node.uid}`}>
          <Img
            className="shadowblog"
            fluid={node.data.headerimage.localFile.childImageSharp.fluid}
            alt={node.data.headerimage.alt}
          />
        </Link>
        <Text>
          <Link className="blogitemlink" to={`/blog/${node.uid}`}>
            <StyledLink>{node.data.title.text}</StyledLink>
          </Link>
          <Link className="blogitemlink" to={`/blog/${node.uid}`}>
            <Description>{node.data.description}</Description>
          </Link>
          <Footer>
            {PubDate} · von <b>{node.data.author.text}</b>
          </Footer>
        </Text>
      </List>
    )
  }
}
