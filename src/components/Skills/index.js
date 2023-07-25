import { useState } from "react";

import { LinearProgress } from "@mui/material";

import {
  SkillsContainer,
  SkillsTitle,
  SkillsWrapper,
  SkillsItems,
} from "./SkillElements";

import { skills } from "./data";
import Popover from "../Popover";
import Section from "../Section";

export default function Skills() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <Popover isOpen={isOpen} toggle={togglePopover} /> */}
      <SkillsContainer>
        <Section>Skills</Section>
        {/* {Object.entries(skills).map(([key, value]) => (
          <>
            <SkillsWrapper>
              <SkillsTitle>{key}</SkillsTitle>
              {Object.values(value)
                .sort((a, b) => b.value - a.value)
                .map(({ id, name, value }) => (
                  <SkillsItems key={id}>
                    <span>{name}</span>
                    <LinearProgress variant="determinate" value={value} />
                  </SkillsItems>
                ))}
            </SkillsWrapper>
          </>
        ))} */}
      </SkillsContainer>
    </>
  );
}
