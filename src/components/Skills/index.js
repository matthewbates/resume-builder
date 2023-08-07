import { SkillsContainer } from "./SkillElements";

import Section from "../Section";
import Accordion from "../Accordion";

export default function Skills() {
  return (
    <SkillsContainer>
      <div style={{ padding: "1em" }}>
        <Section>Skills</Section>
        <Accordion />
      </div>
    </SkillsContainer>
  );
}
