import { Link } from "gatsby"
import React, { Component } from "react"
import Logo from "../images/logo.svg"
import styled from "@emotion/styled"
import MobileLogo from "../images/logo-sm.svg"

import "./header.css"

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
  @media (max-width: 719px) {
    display: none;
  }
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

  font-family: calibri;
  font-weight: 500;
  font-size: 16px;
`
const Mobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  padding-top: 1, 45em;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.14) 4px 5px 9px;
  @media (min-width: 720px) {
    display: none;
  }
`
const ML = styled.img`
  height: 40px;
`
const MobileList = styled.div`
  display: grid;
  grid-template-rows: 35px 35px 35px 35px 35px;
  grid-row-gap: 0.5em;
  grid-template-columns: 100%;
  justify-content: end;
  text-align: right;
  font-weight: bold;
  z-index: 0;
  a {
    color: #2f5495;
    font-size: 1.25em;
    text-transform: uppercase;
    font-family: calibri;
    padding-right: 1em;
  }
`
const MobileContainer = styled.div`
  padding: 3em 0;
  background-color: rgba(255, 255, 255, 0.9);
`

const LinkStyle = {
  color: "#2f5495",
  padding: "1em",
}
const ActiveLinkStyle = {
  backgroundColor: "#2f5495",
  color: "white",
}
const DownArrow = styled.span`
  @media (max-width: 785px) {
    display: none;
  }
`

class Header extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      sidebarOpen: false,
      animate: false,
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  handleMouseDown(e) {
    this.toggleMenu()
    this.animateSvg()
    console.log("clicked")
  }
  toggleMenu() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }
  animateSvg() {
    this.setState({ animate: true })
  }

  render() {
    return (
      <Absolute>
        <Mobile>
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <ML
              src={MobileLogo}
              alt="Wohlgensinger Mobile Logo"
              style={{ marginBottom: "0" }}
            />
          </Link>
          <svg
            onClick={() => this.handleMouseDown()}
            onAnimationEnd={() => this.setState({ animate: false })}
            className={this.state.animate ? "animate-pulse" : ""}
            width="29px"
            height="29px"
            viewBox="0 0 29 29"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Wohlgensinger-Mobile"
                transform="translate(-352.000000, -25.000000)"
                fill="#2f5495"
              >
                <path
                  d="M366.5,50.375 C360.494281,50.375 355.625,45.506625 355.625,39.5 C355.625,33.493375 360.494281,28.625 366.5,28.625 C372.505719,28.625 377.375,33.493375 377.375,39.5 C377.375,45.506625 372.505719,50.375 366.5,50.375 M366.5,25 C358.492375,25 352,31.4914687 352,39.5 C352,47.507625 358.492375,54 366.5,54 C374.507625,54 381,47.507625 381,39.5 C381,31.4914687 374.507625,25 366.5,25"
                  id="3"
                ></path>
              </g>
            </g>
          </svg>
        </Mobile>
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
              <ListItem id="firstli">
                <Link
                  to="/startups"
                  style={LinkStyle}
                  activeStyle={ActiveLinkStyle}
                  partiallyActive={true}
                >
                  Startups <DownArrow>&#9662;</DownArrow>
                </Link>
                <ul id="secondul">
                  <Link to="/startups/financial-modelling">
                    <li>Financial Modelling</li>
                  </Link>
                  <Link to="/startups/rating">
                    <li>Rating</li>
                  </Link>
                  <Link to="/startups/valuation">
                    <li>Valuation</li>
                  </Link>
                </ul>
              </ListItem>

              <ListItem id="firstli">
                <Link
                  to="/investors-corporations"
                  style={LinkStyle}
                  activeStyle={ActiveLinkStyle}
                  partiallyActive={true}
                >
                  Investors <DownArrow>&#9662;</DownArrow>
                </Link>
                <ul id="secondul">
                  <Link to="/investors-corporations/deepdive-valuation">
                    <li>Deepdive / Valuation</li>
                  </Link>
                  <Link to="/investors-corporations/due-diligence">
                    <li>Due Diligence</li>
                  </Link>
                  <Link to="/investors-corporations/scouting-rating">
                    <li>Scouting / Rating</li>
                  </Link>
                </ul>
              </ListItem>

              <ListItem>
                <Link
                  to="/about-us"
                  style={LinkStyle}
                  activeStyle={ActiveLinkStyle}
                >
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/contact-us"
                  style={LinkStyle}
                  activeStyle={ActiveLinkStyle}
                >
                  Contact
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/blog"
                  style={LinkStyle}
                  activeStyle={ActiveLinkStyle}
                >
                  Blog
                </Link>
              </ListItem>
            </List>
          </Menu>
        </FlexContainer>
        <div
          className={"menu" + this.state.sidebarOpen}
          onClick={() => this.toggleMenu()}
        >
          <MobileContainer>
            <MobileList>
              <Link
                to="/startups"
                style={{
                  textDecoration: `none`,
                }}
              >
                Startups
              </Link>
              <Link
                to="/investors-corporations"
                style={{
                  textDecoration: `none`,
                }}
              >
                Investors / Corporations
              </Link>
              <Link
                to="/about-us"
                style={{
                  textDecoration: `none`,
                }}
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                style={{
                  textDecoration: `none`,
                }}
              >
                Contact Us
              </Link>
              <Link
                to="/blog"
                style={{
                  textDecoration: `none`,
                }}
              >
                News & Blog
              </Link>
            </MobileList>
          </MobileContainer>
        </div>
      </Absolute>
    )
  }
}

export default Header
