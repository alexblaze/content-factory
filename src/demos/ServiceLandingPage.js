import React from "react";

import AnimationRevealPage from "../helpers/AnimationRevealPage.js";


import Hero from "../components/hero/TwoColumnWithFeaturesAndTestimonial.js";

import Footer from "../components/footers/MiniCenteredFooter";
import Teams from "../components/features/TwoColWithButton";
import Features3 from "../components/features/DashedBorderSixFeatures";

// const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features3 />
      <Teams/>
      
     
      
      
      {/* <FAQ
        heading={<>Any <HighlightedText>Questions ?</HighlightedText></>}
      />
      <Blog
        subheading="Blog"
        heading={<>We love <HighlightedText>Writing</HighlightedText></>}
      /> */}
    
      <Footer />
    </AnimationRevealPage>
  );
}
