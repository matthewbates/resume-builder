import { FaPlus, FaMinus } from "react-icons/fa";

import { ButtonContainer } from "./ButtonElements";

import { splitAndCapitalize } from "../utils/helpers";

export default function Button({ toggle, index, activeIndex, title }) {
  return (
    <ButtonContainer onClick={() => toggle(index)}>
      {splitAndCapitalize(title)}
      <span>{activeIndex === index ? <FaMinus /> : <FaPlus />}</span>
    </ButtonContainer>
  );
}
