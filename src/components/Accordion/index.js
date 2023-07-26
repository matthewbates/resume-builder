import { useState } from "react";
import AccordionItem from "../AccordionItem";

import { skills } from "../Skills/data";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {Object.entries(skills).map(([key, value], index) => (
        <AccordionItem
          title={key}
          key={key}
          value={value}
          index={index}
          activeIndex={activeIndex}
          toggle={toggleAccordion}
        />
      ))}
    </>
  );
}
