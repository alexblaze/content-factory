import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "../misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/graphic-design.png";
import ShieldIconImage from "../../images/video-editing-app.png";
import CustomizeIconImage from "../../images/world-wide-web.png";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/seo.png";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/2 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xl items-center px-6 py-10 border-2 border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-gray-900 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-orange-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-8 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Interactive Videos",
      description: "Content Factory Nepal creates interactive content in your Social Media Accounts like Tiktok, Instagram and Messenger. Interactive Content are necessary to engage more audiences in a time frame so that your business could grow. Keeping that in mind, Content Factory Nepal creates content that align perfectly with your business and today’s trend, making it more interesting and engaging."
    },
    { imageSrc: SupportIconImage, 
      title: "Creative Graphics " ,
      description: "Cool graphics are very necessary to display your business’s worth. Content Factory will help you create engaging and aesthetic graphics and reflect your brand. Content Factory creates graphic content like infographic, holiday posts etc that coincide perfectly with your brand. "
  },
    { imageSrc: CustomizeIconImage, 
      title: "Website Development",
      description: "A website which tells everything is the website that attract more attention. Our company, CF Nepal, creates aesthetic, customised and branded websites. Not only the creation of impactful websites, we also tend to engage more interactive audiences so that the traffic in your business could spike up." 
    },
    { imageSrc: SimpleIconImage, 
      title: "SEO Friendly Contents ",
      description: "Google ranking is very important for your business to grow and attract more people. Content Factory creates SEO friendly content so that your business could be easily accessible to the audiences seeking your services."
    }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-gray-900">Services</span></Heading>
        <br></br>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
                <img src={card.imageSrc} alt="" />
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
