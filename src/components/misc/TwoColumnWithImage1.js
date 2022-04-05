import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "./Headings.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ArrowLeftIcon } from "../../images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right-2-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";

import "slick-carousel/slick/slick.css";

const Container = tw.div`relative`;
const Content = tw.div`items-center`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center `;

const TestimonialSliderContainer = tw.div`mt-16`;
const TestimonialSlider = styled(Slider)``;
const Testimonial = tw.div``;
const ImageContainer = styled.div`
  ${tw`flex items-center md:justify-center`}
  img {
    ${tw`rounded w-80`}
  }
`;
const TextContainer = tw.div`text-center`;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = tw.blockquote`text-center md:text-left font-medium text-lg`;
const CustomerInfo = tw.div`px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0`;
const CustomerName = tw.h5`font-bold text-lg text-orange-500 text-center`;
const CustomerTitle = tw.p`font-medium text-sm text-center`;

const QuotesLeft = tw(QuotesLeftIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute top-0 left-0`;
const QuotesRight = tw(QuotesRightIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute bottom-0 right-0`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

export default () => {
  /*
   * You can modify the testimonials shown by modifying the array below
   * You can add or remove objects from the array as you need.
   */
  const testimonials = [
    {
      imageSrc:
        "https://i.ibb.co/V06tMLH/Whats-App-Image-2022-02-25-at-1-23-19-PM.jpg",
      quote:
        "I was desperate for a good content to decorate my firm digitally. I happened to find their page on Facebook randomly. The people on CONTENT FACTORY are so nice and generous. They captured my every needs, every tiny details I needed to be escorted on my website . When they presented the content, I was simply awestruck. It was like especially customized for me and my company only. Good Job CONTENT FACTORY!!",
      customerName: "Sanjay Nepal",
      customerTitle: "Founder/CEO"
    },
    {
      imageSrc:
        "https://i.ibb.co/JzFnfn5/1646808971936.jpg",
      quote:        "I hired The CONTENT FACTORY, to digitalized my business. It has assisted me in routinely updating content about our trip packages for our customers. This company has assisted me and my business in developing advertising campaigns that increase key performance at the lowest possible cost. And I'm glad I chose CONTENT FACTORY for social media management.",
      customerName: "Santosh Pyakurel",
      customerTitle: "Co Founder"
    },
    {
      imageSrc:
        "https://i.ibb.co/1sBpvB7/20220211-125615-01-1.jpg",
      quote:
        "Absolutely amazing. Our firm is so much happy to choose them as our content providers. I am truly speaking, the hike of our business is ever growing after uploading the interacting content provided by CONTENT FACTORY. Our website is looking far more beautiful than before. They select such a perfectly fitting words, that are mesmerising for any businesses to flourish. We are really proud of their services.",
      customerName: "Shrawan Sigdel",
      customerTitle: "Post Production Manager"
    },
    {
      imageSrc:
        "https://i.ibb.co/ZGD0532/Whats-App-Image-2022-03-09-at-12-37-02-PM.jpg",
      quote:        "I hired The CONTENT FACTORY, to digitalized my business. It has assisted me in routinely updating content about our trip packages for our customers. This company has assisted me and my business in developing advertising campaigns that increase key performance at the lowest possible cost. And I'm glad I chose CONTENT FACTORY for social media management.",
      customerName: "Shristi Khadka",
      customerTitle: "Social Media management"
    },
    {
      imageSrc:
        "https://i.ibb.co/sb3yKgS/IMG-4809.jpg",
      quote:        "I hired The CONTENT FACTORY, to digitalized my business. It has assisted me in routinely updating content about our trip packages for our customers. This company has assisted me and my business in developing advertising campaigns that increase key performance at the lowest possible cost. And I'm glad I chose CONTENT FACTORY for social media management.",
      customerName: "Sanjay Thakur",
      customerTitle: "Full Stack Web Developer"
    },
    {
      imageSrc:
        "https://i.ibb.co/Qk2TB63/q.jpg",
      quote:        "I hired The CONTENT FACTORY, to digitalized my business. It has assisted me in routinely updating content about our trip packages for our customers. This company has assisted me and my business in developing advertising campaigns that increase key performance at the lowest possible cost. And I'm glad I chose CONTENT FACTORY for social media management.",
      customerName: "Mirak Thebe",
      customerTitle: "Content Writer"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Meet Our Best Experts</HeadingTitle>
          <HeadingDescription>Meet our team, The foundation of Marketing in Nepal.</HeadingDescription>
        </HeadingInfoContainer>
        <TestimonialSliderContainer>
          <TestimonialSlider nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index}>
                <ImageContainer>
                  <img src={testimonial.imageSrc} alt={testimonial.customerName} />
                </ImageContainer>
                <TextContainer>
                  <CustomerInfo>
                    <CustomerName>{testimonial.customerName}</CustomerName>
                    <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                    <br></br>
                  </CustomerInfo>
                </TextContainer>
              </Testimonial>
            ))}
          </TestimonialSlider>
        </TestimonialSliderContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
