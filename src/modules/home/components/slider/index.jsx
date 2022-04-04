import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "../../../../slider-data";
import Button from "../../../auth/components/button";
import styled from "styled-components";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <Sliders>
      <PrevArrow onClick={prevSlide} />
      <NextArrow onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <Slide className={index === currentSlide && "current"} key={index}>
            {index === currentSlide && (
              <div>
                <Image src={slide.image} alt="slide" />
                <Content>
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <hr />
                  <Button>Get Started</Button>
                </Content>
              </div>
            )}
          </Slide>
        );
      })}
    </Sliders>
  );
};

export default Slider;

const Sliders = styled.div`
  width: 100%;
  height: 510px;
  position: relative;
  overflow: hidden;
`;
const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateX(-50%);
  &.current {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.5s ease;
  }

  transition: all 0.5s ease & img {
    height: 100%;
  }
`;

const PrevArrow = styled(AiOutlineArrowLeft)`
  border: 2px solid white;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  position: absolute;
  z-index: 999;
  top: 35%;
  left: 1.5rem;

  &:hover {
    background-color: #fff;
    color: #777;
  }
`;

const NextArrow = styled(AiOutlineArrowRight)`
  border: 2px solid white;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  position: absolute;
  z-index: 999;
  top: 35%;
  right: 1.5rem;

  &:hover {
    background-color: #fff;
    color: #777;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 23rem;
  left: 5rem;
  opacity: 0;
  width: 50%;
  color: #fff;
  padding: 3rem;
  background: rgba(0, 0, 0, 0.3);
  animation: slide-up 1s ease 0.5s;
  animation-fill-mode: forwards;
  visibility: hidden;
  & > * {
    color: #fff;
    margin-bottom: 1rem;
  }
`;
