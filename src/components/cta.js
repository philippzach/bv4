import React from "react"
import styled from "@emotion/styled"
import Button from "../components/button"

const Container = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 4em;
`

const Heading = styled.h3`
  font-weight: bold;
  font-family: futura;
  line-height: 1.33em;
  color: #2f5495;
`

const cta = ({ text, buttonText, link }) => (
  <Container>
    <Heading>{text}</Heading>
    <Button text={buttonText} link={link}></Button>
  </Container>
)

export default cta
