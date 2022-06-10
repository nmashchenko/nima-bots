import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const youtubeLink = 'https://www.instagram.com/nima_international/'
const tgLink = 'https://t.me/pRod1gyy'
const linkedLink = 'https://www.linkedin.com/company/nimainternational'

const toggleHome = () => {
  scroll.scrollToTop();
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/" onClick={toggleHome}>NIMA</SocialLogo>
            <SocialIcons>
              <SocialIconLink href={youtubeLink} target="_blank" arial-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href={tgLink} target="_blank" arial-label="Telegram">
                <FaTelegram />
              </SocialIconLink>
              <SocialIconLink href={linkedLink} target="_blank" arial-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Linkedin">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
            <WebsiteRights>NIMA Ⓒ {new Date().getFullYear()}</WebsiteRights>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
