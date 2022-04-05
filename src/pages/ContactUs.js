import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../components/headers/light.js";
import Footer from "../components/footers/MiniCenteredFooter";
import AddressMap from "../pages/map.js";
import ContactUsForm from "../components/forms/TwoColContactUsWithIllustrationFullForm.js";



export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <AddressMap/>
      <Footer />
      
    </AnimationRevealPage>
  );
};
