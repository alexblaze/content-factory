import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "../misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import {SectionDescription} from "../misc/Typography";
import { ReactComponent as TwitterIcon} from "../../images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "../../images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-cover bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`


export default ({
  heading = "Meet Our Best Experts",
  subheading = "Team",
  description = "Meet our team, The foundation of Marketing in Nepal.",
  cards = [
    {
      
        imageSrc: "https://i.ibb.co/V06tMLH/Whats-App-Image-2022-02-25-at-1-23-19-PM.jpg",
        position: "Founder/CEO",
        name: "Sanjay Nepal",
        // links: [
        //   {
        //     url: "https://twitter.com",
        //     icon: TwitterIcon,
        //   },
        //   {
        //     url: "https://linkedin.com",
        //     icon: LinkedinIcon,
        //   },
        //   {
        //     url: "https://github.com",
        //     icon: GithubIcon,
        //   },
        // ],
      },
      {
        imageSrc: "https://i.ibb.co/JzFnfn5/1646808971936.jpg",
        position: "Co-Founder",
        name: "Santosh Pyakurel",
      //   links: [
      //     {
      //       url: "https://twitter.com",
      //       icon: TwitterIcon,
      //     },
      //     {
      //       url: "https://linkedin.com",
      //       icon: LinkedinIcon,
      //     },
      //     {
      //       url: "https://github.com",
      //       icon: GithubIcon,
      //     },
      //   ],
      },
      {
        imageSrc: "https://i.ibb.co/1sBpvB7/20220211-125615-01-1.jpg",
        position: "Post Production Manager",
        name: "Shrawan Sigdel",
      //   links: [
      //     {
      //       url: "https://twitter.com",
      //       icon: TwitterIcon,
      //     },
      //     {
      //       url: "https://linkedin.com",
      //       icon: LinkedinIcon,
      //     },
      //     {
      //       url: "https://github.com",
      //       icon: GithubIcon,
      //     },
      //   ],
      },
      {
      imageSrc: "https://i.ibb.co/ZGD0532/Whats-App-Image-2022-03-09-at-12-37-02-PM.jpg",
      position: "Social Media management",
      name: "Shristi Khadka",
    //   links: [
    //     {
    //       url: "https://twitter.com",
    //       icon: TwitterIcon,
    //     },
    //     {
    //       url: "https://linkedin.com",
    //       icon: LinkedinIcon,
    //     },
    //     {
    //       url: "https://github.com",
    //       icon: GithubIcon,
    //     },
    //   ],
    },
    {
      imageSrc: "https://i.ibb.co/sb3yKgS/IMG-4809.jpg",
      position: "Full Stack Web Developer",
      name: "Sanjay Thakur",
      // links: [
      //   {
      //     url: "https://twitter.com",
      //     icon: TwitterIcon,
      //   },
      //   {
      //     url: "https://linkedin.com",
      //     icon: LinkedinIcon,
      //   },
      //   {
      //     url: "https://github.com",
      //     icon: GithubIcon,
      //   },
      // ],
    },
    {
      imageSrc: "https://i.ibb.co/Qk2TB63/q.jpg",
      position: "Content Writer",
      name: "Mirak Thebe",
      // links: [
      //   {
      //     url: "https://twitter.com",
      //     icon: TwitterIcon,
      //   },
      //   {
      //     url: "https://linkedin.com",
      //     icon: LinkedinIcon,
      //   },
      //   {
      //     url: "https://github.com",
      //     icon: GithubIcon,
      //   },
      // ],
    }
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
