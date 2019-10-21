import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import LogoSm from "../images/logo-sm.svg"
import LinkedIn from "../images/linkedin.svg"

const FooterBg = styled.footer`
  background-color: #f6f7f9;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 0 1rem 0;
`
const Grid = styled.div`
  font-family: calibri;
  font-size: 0.8em;

  padding: 1.45rem 1.5em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 669px) {
    grid-template-rows: 0.5fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`
const Span = styled.span`
  display: block;
`
const Spacer = styled.div`
  margin: 1em 0;
`
const OtherMenu = styled.div`
  display: grid;
  grid-template-rows: 1.5fr repeat(5, 1fr);
  @media (max-width: 669px) {
    display: none;
  }
`
const OtherSchreinerei = styled.div`
  display: grid;
  grid-template-rows: 1.5fr repeat(5, 1fr);
  @media (max-width: 669px) {
    padding-top: 3em;
    text-align: center;
  }
`
const OtherHolzbau = styled.div`
  display: grid;
  grid-template-rows: 1.5fr repeat(5, 1fr);
  @media (max-width: 669px) {
    padding-top: 3em;
    text-align: center;
  }
`
const Copyright = styled.div`
  padding: 0 1.5em;
  font-family: calibri;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Contact = styled.div`
  @media (max-width: 669px) {
    grid-row: 1;
    grid-column: 1 / span 2;
    text-align: center;
  }
`

const Footer = () => (
  <FooterBg>
    <Container>
      <Grid>
        <OtherSchreinerei>
          <span>
            <b>Zurich Office</b>
          </span>
          <span>BV4 Ltd.</span>
          <span>Westhive</span>
          <span>Hardturmstrasse 161 </span>
          <span>8005 Zurich</span>
          <span>Switzerland</span>
        </OtherSchreinerei>
        <OtherHolzbau>
          <span>
            <b>Head Office</b>
          </span>
          <span>BV4 Ltd.</span>
          <span>Bösch 80A </span>
          <span>6331 Zug / Hünenberg </span>

          <span>Switzerland</span>
          <span></span>
        </OtherHolzbau>
        <OtherMenu>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </OtherMenu>
        <Contact>
          <Span>
            <img
              src={LogoSm}
              alt="Bv4 logo small"
              style={{ marginBottom: "0" }}
            />
          </Span>

          <Spacer />
          <Span>
            Phone{" "}
            <a href="tel:+41442009066">
              <b style={{ fontSize: "13px" }}>+41 44 200 90 66</b>
            </a>
          </Span>
          <Span>
            Email{" "}
            <a href="mailto:info@bv4.ch">
              <b style={{ fontSize: "13px" }}>info@bv4.ch</b>
            </a>
          </Span>
        </Contact>
      </Grid>
      <hr />
      <Copyright>
        <span style={{ fontSize: "0.65em", paddingRight: "20px" }}>
          © {new Date().getFullYear()},{` `}
          BV4
        </span>
        <span>
        <a href="https://www.linkedin.com/company/bv4-ltd/">
        <img style={{marginBottom: "0", transform: "scale(0.8)"}} src={LinkedIn} />

        </a></span>
      </Copyright>
    </Container>
  </FooterBg>
)

export default Footer
