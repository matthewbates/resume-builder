import styled from "styled-components";

export const CertificationContainer = styled.div`
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

export const CertificationItem = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const TitleWrapper = styled.div``;

export const Title = styled.div`
  font-family: "Raleway";
  font-weight: bold;
`;

export const TitlePlace = styled.div`
  font-family: "Open Sans";
`;

export const CertificationWrapper = styled.div`
  text-align: right;
  font-family: "Open Sans";
`;

export const TitleDate = styled.div`
  @media screen and (max-width: 820px) {
    display: flex;
  }
`;

export const TitleCertification = styled.a`
  color: #3a8def;
  font-weight: bold;
  margin-bottom: 0.5em;

  @media screen and (max-width: 820px) {
    display: flex;
  }
`;
