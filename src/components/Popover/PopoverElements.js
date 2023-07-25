import styled from "styled-components";

export const PopoverContainer = styled.div`
  width: ${({ isOpen }) => (isOpen ? "100vw" : "0")};
  height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
  background: lightgray;

  button {
  }
`;
