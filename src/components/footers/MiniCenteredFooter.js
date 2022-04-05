import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "../misc/Layouts.js"
import logo from "../../images/cf.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as LinkedinIcon} from "../../images/linkedin-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as InstagramIcon} from "../../images/iconmonstr-instagram-11.svg";



const Container = tw(ContainerBase)`bg-gray-300 text-black h-144 -mx-32 -mb-32`
const Content = tw.div`text-black max-w-screen-sm mx-auto py-20 lg:py-24`;



const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-64`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center text-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent text-center hocus:text-black hocus:border-black pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-black mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-auto font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/contentfactorynepal">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/content-factory1/">
              <LinkedinIcon />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCZ8S6KFq_TG87q49-HoJ_yQ">
              <YoutubeIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/contentfactorypl/">
              <InstagramIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CompanyAddress>
          NayaBazar, Kathmandu, Nepal
          </CompanyAddress>
          <CompanyAddress>
          Ph. : +(977) 9860635590, 9819377814
          </CompanyAddress>
          <LinksContainer>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/services">Services</Link>
          </LinksContainer>
          
          <CopyrightText>
            &copy; Copyright © 2022 Content Factory Nepal.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
