import { PopoverContainer } from "./PopoverElements";

export default function Popover({ isOpen, toggle }) {
  return (
    <PopoverContainer isOpen={isOpen}>
      <button onClick={toggle}>Skills</button>
    </PopoverContainer>
  );
}
