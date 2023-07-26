import { Fragment } from "react";

import {
  ExperienceContainer,
  ExperienceItems,
  ExperienceWrapper,
  ExperienceTitle,
  ExperiencePlace,
  ExperienceTimeframe,
} from "./ExperienceElements";

import Section from "../Section";

import { experience } from "./data";

export default function Experience() {
  return (
    <ExperienceContainer>
      <div style={{ padding: "1em" }}>
        <Section>Experience</Section>
        {experience.map(
          ({ id, name, place, location, timeframe, description }) => (
            <>
              <ExperienceItems key={id}>
                <ExperienceWrapper>
                  <ExperienceTitle>{name}</ExperienceTitle>
                  <ExperiencePlace>{place}</ExperiencePlace>
                  <p>{location}</p>
                </ExperienceWrapper>
                <ExperienceTimeframe>{timeframe}</ExperienceTimeframe>
              </ExperienceItems>
              <ul>
                {description.map(({ id, text }) => (
                  <li
                    style={{ fontFamily: "Open Sans", fontSize: "0.8em" }}
                    key={id}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </>
          )
        )}
      </div>
    </ExperienceContainer>
  );
}
