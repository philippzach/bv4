import React, { Component } from "react"
import { Link } from "gatsby"
import Container from "./container"
import styled from "@emotion/styled"

const Card = styled.div`
  background-color: #2f5495;
  box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 6px;
  align-items: center;
  justify-content: center;
  display: grid;
  text-align: center;
  grid-template-rows: 2fr 4fr 1fr;
  margin-top: 4em;

  a {
    padding: 0.5em 0;
  }
  h2 {
    margin-bottom: 0;
    font-family: futura;
    font-weight: bold;
    color: white;
    padding: 1em 0 0.7em;
  }
  img {
    margin-bottom: 0;
  }
  span {
    font-family: roboto;
    font-weight: bold;
    color: white;
    margin-top: -1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    box-shadow: 0 1rem 2.5rem 0 rgba(39, 48, 54, 0.25);
    transform: translateY(-0.125rem);
  }
`
const ImgContainer = styled.div``
const CardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4em;
  justify-content: center;
  padding: 0 0 6em 0;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`
const Subheading = styled.h3`
  max-width: 40em;
  color: #2f5495;
  font-family: roboto;
  font-weight: 500;
  line-height: 1.75em;
`

export class investors extends Component {
  render() {
    return (
      <Container>
        <CardLayout>
          <Card>
            <Link to={this.props.link1}>
              <h2>{this.props.text1}</h2>
            </Link>
            <Link to={this.props.link1}>
              <ImgContainer>
                <img src={this.props.icon1} alt="bv4 investor icon" />
              </ImgContainer>
            </Link>
            <Link to={this.props.link1}>
              <span>
                Learn more{" "}
                <svg
                  style={{ marginLeft: "8px" }}
                  width="14px"
                  height="15px"
                  viewBox="0 0 14 15"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Page-2"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="BV4_Landing_V4"
                      transform="translate(-547.000000, -1076.000000)"
                      fill="#fff"
                      stroke="#fff"
                    >
                      <g
                        id="Group-4"
                        transform="translate(548.000000, 1077.000000)"
                      >
                        <path
                          d="M6.1138167,0.195519624 C6.37803713,-0.0651732081 6.79400578,-0.0651732081 7.05822621,0.195519624 C7.31352027,0.447405266 7.31352027,0.866627524 7.05822621,1.11792602 L2.2695285,5.84269003 L11.2418728,5.84269003 C11.6102341,5.84269003 12,6.13655661 12,6.5 C12,6.86344339 11.6102341,7.15672282 11.2418728,7.15672282 L2.2695285,7.15672282 L7.05822621,11.8726796 C7.31352027,12.1333725 7.31352027,12.5531819 7.05822621,12.8044804 C6.79400578,13.0651732 6.37803713,13.0651732 6.1138167,12.8044804 L0.191470546,6.9612032 C-0.0638235154,6.70931756 -0.0638235154,6.2900953 0.191470546,6.0387968 L6.1138167,0.195519624 Z"
                          id="Fill-1"
                          transform="translate(6.000000, 6.500000) scale(-1, 1) translate(-6.000000, -6.500000) "
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </Link>
          </Card>

          <Card>
            <Link to={this.props.link2}>
              <h2>{this.props.text2}</h2>
            </Link>
            <Link to={this.props.link2}>
              <ImgContainer>
                <img src={this.props.icon2} alt="bv4 startup icon" />
              </ImgContainer>
            </Link>
            <Link to={this.props.link2}>
              <span>
                Learn more{" "}
                <svg
                  style={{ marginLeft: "8px" }}
                  width="14px"
                  height="15px"
                  viewBox="0 0 14 15"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Page-2"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="BV4_Landing_V4"
                      transform="translate(-547.000000, -1076.000000)"
                      fill="#fff"
                      stroke="#fff"
                    >
                      <g
                        id="Group-4"
                        transform="translate(548.000000, 1077.000000)"
                      >
                        <path
                          d="M6.1138167,0.195519624 C6.37803713,-0.0651732081 6.79400578,-0.0651732081 7.05822621,0.195519624 C7.31352027,0.447405266 7.31352027,0.866627524 7.05822621,1.11792602 L2.2695285,5.84269003 L11.2418728,5.84269003 C11.6102341,5.84269003 12,6.13655661 12,6.5 C12,6.86344339 11.6102341,7.15672282 11.2418728,7.15672282 L2.2695285,7.15672282 L7.05822621,11.8726796 C7.31352027,12.1333725 7.31352027,12.5531819 7.05822621,12.8044804 C6.79400578,13.0651732 6.37803713,13.0651732 6.1138167,12.8044804 L0.191470546,6.9612032 C-0.0638235154,6.70931756 -0.0638235154,6.2900953 0.191470546,6.0387968 L6.1138167,0.195519624 Z"
                          id="Fill-1"
                          transform="translate(6.000000, 6.500000) scale(-1, 1) translate(-6.000000, -6.500000) "
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </Link>
          </Card>
          <Card>
            <Link to={this.props.link3}>
              <h2>{this.props.text3}</h2>
            </Link>
            <Link to={this.props.link3}>
              <ImgContainer>
                <img src={this.props.icon3} alt="bv4 startup icon" />
              </ImgContainer>
            </Link>
            <Link to={this.props.link3}>
              <span>
                Learn more{" "}
                <svg
                  style={{ marginLeft: "8px" }}
                  width="14px"
                  height="15px"
                  viewBox="0 0 14 15"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Page-2"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="BV4_Landing_V4"
                      transform="translate(-547.000000, -1076.000000)"
                      fill="#fff"
                      stroke="#fff"
                    >
                      <g
                        id="Group-4"
                        transform="translate(548.000000, 1077.000000)"
                      >
                        <path
                          d="M6.1138167,0.195519624 C6.37803713,-0.0651732081 6.79400578,-0.0651732081 7.05822621,0.195519624 C7.31352027,0.447405266 7.31352027,0.866627524 7.05822621,1.11792602 L2.2695285,5.84269003 L11.2418728,5.84269003 C11.6102341,5.84269003 12,6.13655661 12,6.5 C12,6.86344339 11.6102341,7.15672282 11.2418728,7.15672282 L2.2695285,7.15672282 L7.05822621,11.8726796 C7.31352027,12.1333725 7.31352027,12.5531819 7.05822621,12.8044804 C6.79400578,13.0651732 6.37803713,13.0651732 6.1138167,12.8044804 L0.191470546,6.9612032 C-0.0638235154,6.70931756 -0.0638235154,6.2900953 0.191470546,6.0387968 L6.1138167,0.195519624 Z"
                          id="Fill-1"
                          transform="translate(6.000000, 6.500000) scale(-1, 1) translate(-6.000000, -6.500000) "
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </Link>
          </Card>
        </CardLayout>
        <Subheading>{this.props.longtext}</Subheading>
        <div style={{ padding: "2em" }} />
      </Container>
    )
  }
}

export default investors
