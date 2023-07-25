import { Fragment } from "react";

import {
  HeroContainer,
  HeroLeftItemsWrapper,
  HeroTitleWrapper,
  HeroImg,
  HeroTitle,
  HeroSubTitle,
  HeroRightItemsWrapper,
  HeroTextWrapper,
  HeroText,
  HeroAWrapper,
  HeroA,
} from "./HeroElements";

import { links } from "./data";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroLeftItemsWrapper>
        <HeroImg src={require("../../assets/avatar.png")} />
        <HeroTitleWrapper>
          <HeroTitle>Matthew Bates</HeroTitle>
          <HeroSubTitle>Applications Developer</HeroSubTitle>
        </HeroTitleWrapper>
      </HeroLeftItemsWrapper>
      <HeroRightItemsWrapper>
        <HeroTextWrapper>
          <HeroText>(713) 504-4436</HeroText>
          <HeroA isEmail="true" href="mailto:mhcb@tutanota.com">
            mhcb@tutanota.com
          </HeroA>
          <HeroText>📍Denver, CO</HeroText>
        </HeroTextWrapper>
        <HeroAWrapper>
          {links.map(({ id, name, link, target, rel }, index) => (
            <Fragment key={id}>
              <HeroA
                key={id}
                isEmail="false"
                href={link}
                target={target}
                rel={rel}
              >
                {name}
              </HeroA>
              {index !== links.length - 1 && "|"}
            </Fragment>
          ))}
        </HeroAWrapper>
      </HeroRightItemsWrapper>
    </HeroContainer>
  );
}
