import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.svg"
import styled from "@emotion/styled"

const Absolute = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
`

const FlexContainer = styled.nav`
  display: flex;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1250px;
  margin-bottom: 1.45rem;
  margin-top: 1.45rem;
  box-shadow: rgba(0, 0, 0, 0.14) 4px 5px 9px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
`

const List = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
`
const ListItem = styled.li`
  margin: 0;
  padding-right: 1.45em;
  color: #2f5495;
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
`

const Header = () => (
  <Absolute>
    <FlexContainer>
      <LogoContainer>
        <Link
          to="/"
          style={{
            padding: `1.0875rem 1.0875rem`,
            marginBottom: `0`,
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <img
            style={{
              marginBottom: `0`,
            }}
            src={Logo}
            alt="bv4 logo"
          />
        </Link>
      </LogoContainer>
      <Menu>
        <List>
          <Link to="/startups">
            <ListItem>Startups</ListItem>
          </Link>
          <Link to="/investors-corporations">
            <ListItem>Investors</ListItem>
          </Link>
          <Link to="/about-us">
            <ListItem>About</ListItem>
          </Link>
          <Link to="/contact-us">
            <ListItem>Contact</ListItem>
          </Link>
          <Link to="/">
            <ListItem>Blog</ListItem>
          </Link>
        </List>
      </Menu>
    </FlexContainer>
  </Absolute>
)

export default Header
