import { SectionContainer, SectionItems } from "./SectionElements";

export default function Section({ title, children }) {
  return (
    <SectionContainer>
      {children}
      <SectionItems />
    </SectionContainer>
  );
}
