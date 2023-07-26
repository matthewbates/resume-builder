import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f5f5f5;
  width: calc(100vw - 20%);
  max-width: 816px;
  margin: auto;
  /* padding: 2em; */

  @media screen and (max-width: 820px) {
    /* flex-direction: column;
    gap: 1em; */
    width: 100%;
    flex-direction: column;
  }
`;

export const SkillsItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 90%;

  @media screen and (min-width: 820px) {
    width: 50%;
  }
`;

export const SkillsCategory = styled.div`
  font-family: "Raleway";
  font-weight: bold;
`;

export const SkillsItem = styled.div`
  font-family: "Open Sans";
`;
