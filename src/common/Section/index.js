import { Body, ContentSection, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <ContentSection>
    <Header buttons>
      <h2>{title}</h2>
      {extraHeaderContent}
    </Header>
    <Body>{body}</Body>
  </ContentSection>
);

export default Section;
