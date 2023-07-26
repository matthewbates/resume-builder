import { Fragment } from "react";

import {
  ProjectContainer,
  HeaderWrapper,
  HeaderTitle,
  LinkSpan,
  LinkA,
  ProjectItem,
} from "./ProjectElements";

import Section from "../Section";

import { projects } from "./data";

const TARGET = "_blank";
const REL = "noopener noreferrer";

export default function Projects() {
  return (
    <ProjectContainer>
      <div style={{ padding: "1em" }}>
        <Section>Projects</Section>
        {Object.entries(projects).map(([key, value]) => (
          <Fragment key={key}>
            <HeaderWrapper>
              <HeaderTitle>{value.name}</HeaderTitle>
              <LinkSpan>
                <LinkA href={value.github} target={TARGET} rel={REL}>
                  Github
                </LinkA>
                {"/"}
                <LinkA href={value.link} target={TARGET} rel={REL}>
                  Link
                </LinkA>
              </LinkSpan>
            </HeaderWrapper>
            <ProjectItem>
              <p>{value.description}</p>
              <ul>
                {value.list.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </ProjectItem>
          </Fragment>
        ))}
      </div>
    </ProjectContainer>
  );
}
