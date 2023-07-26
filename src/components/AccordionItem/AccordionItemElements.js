import styled from "styled-components";

export const AccordionItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 820px) {
    max-width: 60%;
  }
`;

export const AccordionItemBtn = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1em;
  background: #3a8def;
  color: #ffffff;
  text-align: left;
  font-weight: 700;
  align-items: center;
  padding: 1em;
  cursor: pointer;
  border: none;
  font-family: "Open Sans";
  transition: 0.25s ease-in-out;
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
