import styled from "styled-components";

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  width: calc(100vw - 20%);
  max-width: 816px;
  margin: auto;

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;

export const EducationItem = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Raleway";

  @media screen and (max-width: 820px) {
    font-size: 1em;
    width: 100%;
  }
`;

export const EducationSpan = styled.span`
  display: flex;
  font-family: "Raleway";
`;

export const EducationName = styled.div`
  font-weight: bold;
`;

export const EducationTitle = styled.div`
  font-family: "Open Sans";

  @media screen and (max-width: 820px) {
    font-size: 12px;
    width: 100%;
  }
`;

export const LocationName = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  font-family: "Open Sans";

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;

export const TitleDate = styled.div`
  display: flex;
  margin-bottom: 0.5em;
`;
