import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
  background: #f5f5f5;
  height: 100%;
  width: calc(100vw - 20%);
  max-width: 816px;
  margin: auto;

  @media screen and (max-width: 820px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  font-family: "Raleway";
  font-weight: bold;
`;

export const LinkSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25em;
`;

export const LinkA = styled.a`
  color: #3a8def;
  font-family: "Raleway";
  text-decoration: none;
`;

export const ProjectItem = styled.div`
  p {
    font-family: "Open Sans";
    font-size: 0.8em;
    font-style: italic;
  }

  ul {
  }

  li {
    font-family: "Open Sans";
    font-size: 0.8em;
  }
`;
