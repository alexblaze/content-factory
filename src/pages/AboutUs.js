import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import tw from "twin.macro";

import Header from "../components/headers/light.js";
import Footer from "../components/footers/MiniCenteredFooter";
import MainFeature1 from "../components/features/TwoColWithButton.js";

import TeamCardGrid from "../components/misc/TwoColumnWithImage1.js";
import MainFeature5 from "../components/misc/TwoColWithButton.js"



const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Content Factory</Subheading>}
        heading="Invest your time and efforts on running your business. Leave the Marketing for us."
        buttonRounded={false}
        primaryButtonText="Offers"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature5
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We work for your Profit."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
