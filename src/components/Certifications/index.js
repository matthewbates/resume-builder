import {
  CertificationContainer,
  CertificationItem,
  TitleWrapper,
  Title,
  TitlePlace,
  CertificationWrapper,
  TitleDate,
  TitleCertification,
} from "./CertificationElements";

import Section from "../Section";

import { certifications } from "./data";

const TARGET = "_blank";
const REL = "noopener noreferrer";

export default function Certifications() {
  return (
    <CertificationContainer>
      <div style={{ padding: "1em" }}>
        <Section>Certifications</Section>
        {certifications.map(({ id, title, place, date, url }) => (
          <CertificationItem key={id}>
            <TitleWrapper>
              <Title>{title}</Title>
              <TitlePlace>{place}</TitlePlace>
            </TitleWrapper>
            <CertificationWrapper>
              <TitleDate>{date}</TitleDate>
              <TitleCertification href={url} target={TARGET} rel={REL}>
                Certificate
              </TitleCertification>
            </CertificationWrapper>
          </CertificationItem>
        ))}
      </div>
    </CertificationContainer>
  );
}
