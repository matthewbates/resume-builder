import styled from "styled-components";

export const AccordionItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 820px) {
    max-width: 75%;
  }
`;

export const AccordionItemWrapper = styled.div`
  height: 0;
  overflow: hidden;
  transition: 0.3s;
`;

export const AccordionItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    font-family: "Open Sans";
    font-size: 0.9em;
    width: 75%;
    margin: 0.5em;
  }
`;
