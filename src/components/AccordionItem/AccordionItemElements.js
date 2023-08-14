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
  font-family: "Raleway";
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;
