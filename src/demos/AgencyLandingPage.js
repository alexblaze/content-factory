import React from "react";

import AnimationRevealPage from "../helpers/AnimationRevealPage.js";

import Hero from "../components/hero/BackgroundAsImage.js";
import Features from "../components/features/DashedBorderSixFeatures";
import MainFeature from "../components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "../components/misc/TwoColumnWithImage1.js";
import Service from "../components/features/TwoColWithTwoFeaturesAndButtons";
import Clients from "../components/cards/TabCardGrid";

import ContactUsForm from "../components/forms/TwoColContactUsWithIllustration.js";
import Footer from "../components/footers/MiniCenteredFooter";

import Review from "../components/testimonials/TwoColumnWithImage.js";




export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature />
    <Service/>
    <Features />
    <MainFeature2 />
    <Review />
    <Clients/>
    <ContactUsForm />
    <Footer />
  
  </AnimationRevealPage>
);
