import styled from "styled-components";

export const AccordionItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media screen and (min-width: 820px) {
    max-width: 75%;
  }
`;

export const AccordionItemWrapper = styled.div`
  overflow: hidden;
  transition: 0.3s ease;
`;

export const AccordionItemContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
  align-items: center;

  div {
    font-family: "Open Sans";
    font-size: 1em;
    align-items: center;
    width: 100%;
    margin: auto;
    gap: 1em;
    margin-bottom: 2px;
    margin-left: 1em;
    margin-right: 1em;
  }
`;
