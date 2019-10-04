import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Button = styled.button`
  color: #646464;
  font-family: futura;
  font-weight: bold;
  box-shadow: rgba(34, 34, 34, 0.3) 0 4px 7px;
  background-color: #ded2ad;
  border-color: #ded2ad;
  border-width: 0;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.5em 1.75em;
  &:hover {
    border-color: #ded2ad;
    box-shadow: rgba(39, 48, 54, 0.25) 0 8px 14px;
    transform: translateY(-0.125rem);
  }
  &:focus {
    outline: none;
    outline-offset: -4px;
  }
`
const OneButton = ({ text, link }) => (
  <a href={link}>
    <Button>{text}</Button>
  </a>
)

export default OneButton
