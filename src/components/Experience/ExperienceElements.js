import styled from "styled-components";

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
  background: #f5f5f5;
  width: calc(100vw - 20%);
  max-width: 816px;
  margin: auto;

  @media screen and (max-width: 820px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ExperienceItems = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const ExperienceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ExperienceTitle = styled.div`
  font-family: "Raleway";
  font-weight: bold;
`;

export const ExperiencePlace = styled.div`
  font-family: "Raleway";
`;

export const ExperienceTimeframe = styled.div`
  font-family: "Open Sans";
`;
