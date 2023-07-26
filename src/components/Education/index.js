import Section from "../Section";
import {
  EducationContainer,
  EducationItem,
  NameWrapper,
  EducationName,
  LocationName,
  TitleWrapper,
  TitleDate,
  TitleName,
} from "./EducationElements";

import { education } from "./data";

export default function Education() {
  return (
    <EducationContainer>
      <div style={{ padding: "1em" }}>
        <Section>Education</Section>
        {education.map(({ id, name, location, date, title, gpa }) => (
          <EducationItem key={id}>
            <NameWrapper>
              <span style={{ display: "flex" }}>
                <EducationName>{name}</EducationName>
                <LocationName>{location}</LocationName>
              </span>
              <div>{title}</div>
            </NameWrapper>
            <TitleWrapper>
              <TitleDate>{date}</TitleDate>
            </TitleWrapper>
          </EducationItem>
        ))}
      </div>
    </EducationContainer>
  );
}
