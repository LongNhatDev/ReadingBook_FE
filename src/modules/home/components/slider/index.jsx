import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "../../../../slider-data";
import styled from "styled-components";
import BookDetail from "../../../components/bookdetail";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
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
            {index === currentSlide && <BookDetail book={slide} />}
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
  box-shadow: 2px 2px 6px grey;
  background-color: #f6f7fc;
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
  color: #000;
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
  color: #000;
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
