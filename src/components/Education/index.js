import Section from "../Section";
import {
  EducationContainer,
  EducationItem,
  NameWrapper,
  EducationSpan,
  EducationName,
  LocationName,
  TitleWrapper,
  EducationTitle,
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
              <EducationSpan>
                <EducationName>{name}</EducationName>
                <LocationName>{location}</LocationName>
              </EducationSpan>
              <EducationTitle>{title}</EducationTitle>
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
