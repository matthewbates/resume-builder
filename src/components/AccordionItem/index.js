import { useRef } from "react";

import { LinearProgress } from "@mui/material";

import {
  AccordionItemContainer,
  AccordionItemBtn,
  AccordionItemWrapper,
  AccordionItemContent,
} from "./AccordionItemElements";

import { splitAndCapitalize } from "../utils/helpers";

export default function AccordionItem({
  title,
  value,
  index,
  activeIndex,
  toggle,
}) {
  const skillRef = useRef(null);

  const sortedValues = Object.values(value).sort((a, b) => b.value - a.value);

  return (
    <AccordionItemContainer>
      <AccordionItemBtn
        onClick={() => toggle(index)}
        activeIndex={activeIndex}
        index={index}
      >
        {splitAndCapitalize(title)}
        <span>{activeIndex === index ? "-" : "+"}</span>
      </AccordionItemBtn>
      <AccordionItemWrapper
        ref={skillRef}
        style={
          activeIndex === index && skillRef.current
            ? { height: skillRef.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <AccordionItemContent>
          {sortedValues.map(({ id, name, value }) => (
            <div key={id}>
              {name}
              <LinearProgress
                variant="determinate"
                value={value}
                sx={{ height: 10 }}
              />
            </div>
          ))}
        </AccordionItemContent>
      </AccordionItemWrapper>
    </AccordionItemContainer>
  );
}
