import React from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { Container } from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { theme, GlobalStyles } from "../TasksPage";

export default () => (
  <ThemeProvider theme={theme}>
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <GlobalStyles />
      <Container>
        <Header title="O autorze" />
        <Section
          title="Mateusz Grygorowicz"
          body={
            <>
              {" "}
              <p>
                Jestem wokalistą, gitarzystą i <i>aranżerem</i>. Skończyłem
                studia na
                <strong>
                  Uniwersytecie Muzycznym Fryderyka Chopina w Warszawie
                </strong>{" "}
                i
                <strong>
                  Akademii Muzycznej im. I. J. Paderewskiego w Poznaniu.
                </strong>
              </p>
            </>
          }
        />
      </Container>
    </StyleSheetManager>
  </ThemeProvider>
);
