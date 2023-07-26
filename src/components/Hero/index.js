import {
  HeroContainer,
  HeroLeftItemsWrapper,
  HeroImg,
  HeroTitle,
  HeroSubTitle,
  HeroRightItemsWrapper,
  HeroTextWrapper,
  HeroEmail,
} from "./HeroElements";

import Links from "../Links";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroLeftItemsWrapper>
        <HeroImg src={require("../../assets/avatar.png")} />
        <div>
          <HeroTitle>Matthew Bates</HeroTitle>
          <HeroSubTitle>Applications Developer</HeroSubTitle>
        </div>
      </HeroLeftItemsWrapper>
      <HeroRightItemsWrapper>
        <HeroTextWrapper>
          <p>(713) 504-4436</p>
          <HeroEmail isEmail="true" href="mailto:mhcb@tutanota.com">
            mhcb@tutanota.com
          </HeroEmail>
          <p>📍Denver, CO</p>
        </HeroTextWrapper>
        <Links />
      </HeroRightItemsWrapper>
    </HeroContainer>
  );
}
