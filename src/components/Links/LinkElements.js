import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
  gap: 0.25em;
`;

export const LinkA = styled.a`
  text-decoration: ${({ isEmail }) =>
    isEmail === "true" ? "underline" : "none"};
  color: #3a8def;
  font-family: ${({ isEmail }) => isEmail === "false" && "Space Mono"};

  &:hover {
    font-weight: ${({ isEmail }) => isEmail === "false" && "bold"};
  }
`;
