import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  margin: auto;
  background: #f5f5f5;
  height: 100%;
  width: calc(100vw - 30%);
  justify-content: space-between;
  align-items: center;
  padding: 2em;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const HeroLeftItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const HeroTitleWrapper = styled.div``;

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
  color: #363636;
  font-family: "Open Sans";
`;

export const HeroTextWrapper = styled.div`
  text-align: right;
`;

export const HeroText = styled.p``;

export const HeroAWrapper = styled.div`
  display: flex;
  gap: 0.25em;
`;

export const HeroA = styled.a`
  text-decoration: ${({ isEmail }) =>
    isEmail === "true" ? "underline" : "none"};
  color: ${({ isEmail }) => (isEmail === "true" ? "#363636" : "#05386b")};
  font-family: ${({ isEmail }) => isEmail === "false" && "Space Mono"};

  &:hover {
    font-weight: ${({ isEmail }) => isEmail === "false" && "bold"};
  }
`;
