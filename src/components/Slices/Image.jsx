import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const Content = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  @media (min-width: 600px) {
    width: 50%;
    margin: auto;
  }
`

const Image = ({ input }) => (
  <Content>
    {console.log(input.primary.image)}
    <a
      target="_blank"
      href={input.primary.image.localFile.childImageSharp.fluid.src}
    >
      <Img fluid={input.primary.image.localFile.childImageSharp.fluid} />
    </a>
  </Content>
)

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
