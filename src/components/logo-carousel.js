import React from "react"
import styled from "@emotion/styled"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

import Logo1 from "../images/logo1.svg"
import Logo2 from "../images/logo2.svg"
import Logo3 from "../images/logo3.svg"
import Logo4 from "../images/logo4.svg"
import Logo5 from "../images/logo5.svg"
import Logo6 from "../images/logo6.svg"
import Logo7 from "../images/logo7.svg"
import Logo8 from "../images/logo8.svg"
import Logo9 from "../images/logo9.svg"
import Logo10 from "../images/logo10.svg"

const Container = styled.div`
  position: relative;
  z-index: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.14) 4px 5px 9px;
  margin-top: -2.5em;
  margin-bottom: 5em;
  padding: 0 40px;
`
const ButtonLeft = styled.button`
  position: absolute;
  z-index: 100;
  top: 50%;
left: -20px;
  background: white;
  transform: translateY(-50%);
  padding: 1em;
  box-shadow: rgba(35, 35, 35, 0.08) 0 11px 22px 0;
  border: none;
  outline: none;
  transition: all ease-in 100ms;
  &:hover {
    box-shadow: rgba(35, 35, 35, 0.2) 0 11px 22px 0;
  }
 
`
const ButtonRight = styled.button`
  position: absolute;
  z-index: 100;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  background: white;
  padding: 1em;
  box-shadow: rgba(35, 35, 35, 0.08) 0 11px 22px 0;
  border: none;
  outline: none;
  transition: all ease-in 100ms;
  &:hover {
    box-shadow: rgba(35, 35, 35, 0.2) 0 11px 22px 0;
  }
  
`

class Gallery extends React.Component {
    items = [Logo1, Logo2, Logo3,Logo4, Logo5]

    state = {
        currentIndex: 0,
        responsive: {  0: { items: 2 },
        600: {items: 4},
        1024: { items: 6 } },
        galleryItems: this.galleryItems(),
      }
      slideTo = (i) => this.setState({ currentIndex: i })

      onSlideChanged = (e) => this.setState({ currentIndex: e.item })
    
      slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })
    
      slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })
    galleryItems() {
        return this.items.map((i) => <img src={i}></img>)
      }
  
        render() {
            const { currentIndex, galleryItems, responsive } = this.state
       
       
  return (
    <Container>
    <ButtonLeft onClick={() => this.slidePrev()}><svg  height="15px" viewBox="0 0 451.847 451.847" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="m97.141 225.92c0-8.095 3.091-16.192 9.259-22.366l194.289-194.284c12.359-12.359 32.397-12.359 44.751 0 12.354 12.354 12.354 32.388 0 44.748l-171.915 171.902 171.903 171.909c12.354 12.354 12.354 32.391 0 44.744-12.354 12.365-32.386 12.365-44.745 0l-194.29-194.281c-6.167-6.177-9.252-14.274-9.252-22.372z"/></svg></ButtonLeft>
      <AliceCarousel
        mouseDragEnabled
       items={galleryItems}
        dotsDisabled={true}
        buttonsDisabled={true}
       responsive={responsive}
       slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
      >
       
      </AliceCarousel>
      <ButtonRight onClick={() => this.slideNext()}>
          <svg
            x="0px"
            y="0px"
            width="15px"
            height="15px"
            viewBox="0 0 451.846 451.847"
          >
            <g>
              <path
                d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </ButtonRight>
    </Container>
  )
  }
}


export default Gallery