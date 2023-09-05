import { Body, ContentContainer, ContentSection, Header } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <ContentSection>
    <Header buttons>
      <ContentContainer>
        <div>
          <h2>{title}</h2>
        </div>
        <div>{extraHeaderContent}</div>
      </ContentContainer>
    </Header>
    <Body>{body}</Body>
  </ContentSection>
);

export default Section;
