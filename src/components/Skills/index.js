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
    //  <SkillsContainer>
    //   <Section>Skills</Section>
    //   {Object.entries(skills).map(([key, value]) => (
    //     <>
    //       <SkillsWrapper>
    //         <SkillsTitle>{key}</SkillsTitle>
    //         {Object.values(value)
    //           .sort((a, b) => b.value - a.value)
    //           .map(({ id, name, value }) => (
    //             <SkillsItems key={id}>
    //               <span>{name}</span>
    //               <LinearProgress variant="determinate" value={value} />
    //             </SkillsItems>
    //           ))}
    //       </SkillsWrapper>
    //     </>
    //   ))}
    // </SkillsContainer>
  );
}
