import styled from "styled-components";

import { CONSTANTS } from "../utils/constants";

export const HeroContainer = styled.div`
  display: flex;
  margin: auto;
  background: ${CONSTANTS.colors.resumeWhite};
  height: 100%;
  width: calc(100vw - 20%);
  max-width: 816px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 820px) {
    /* flex-direction: column;
    gap: 1em; */
    width: 100%;
    flex-direction: column;
  }
`;

export const HeroLeftItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1em;
  line-height: 0.5em;
`;

export const HeroImg = styled.img`
  display: flex;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  filter: brightness(150%);
`;

export const HeroTitle = styled.h1`
  font-family: "Raleway";
`;

export const HeroSubTitle = styled.h5`
  font-family: "Open Sans";
`;

export const HeroRightItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.5em;
  font-family: "Open Sans";
  padding: 1em;
`;

export const HeroTextWrapper = styled.div`
  text-align: right;

  @media screen and (max-width: 820px) {
    text-align: center;
  }
`;

export const HeroEmail = styled.a`
  text-decoration: underline;
  color: #363636;
`;
