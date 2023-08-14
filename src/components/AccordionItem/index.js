import { useRef } from "react";

import { LinearProgress, Typography } from "@mui/material";

import {
  AccordionItemContainer,
  AccordionItemWrapper,
  AccordionItemContent,
} from "./AccordionItemElements";

import LinearProgressWithLabel from "../LinearProgressWIthLabel";

import { splitAndCapitalize } from "../utils/helpers";
import Button from "../Button";

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
      <Button
        toggle={toggle}
        index={index}
        activeIndex={activeIndex}
        title={title}
      />
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
            <>
              <div style={{ fontWeight: "bold" }}>{name}</div>
              <LinearProgressWithLabel key={id} name={name} value={value} />
            </>
          ))}
        </AccordionItemContent>
      </AccordionItemWrapper>
    </AccordionItemContainer>
  );
}
