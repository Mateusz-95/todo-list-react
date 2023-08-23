import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container";
import {
  StyleSheetManager,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

export const theme = {
  colors: {
    normal: "hsl(180, 100%, 25%)",
    hover: "hsl(180, 100%, 35%)",
    active: "hsl(180, 100%, 40%)",
  },
};

export const GlobalStyles = createGlobalStyle`
html {
box-sizing: border-box;
font-family: 'Lato', sans-serif;
}

*,
::after,
::before {
box-sizing: inherit;
}

body {
background-color: #f0f0f0;
}
`;

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <GlobalStyles />
        <Container>
          <Header title="Szczegóły zadania" />
          <Section
            title={task ? task.content : "Nie znaleziono zadania 🥲"}
            body={
              <>
                <strong>
                  {task ? (task.done ? "Ukończono: ✔︎" : "Ukończono: ❌") : ""}
                </strong>
              </>
            }
          />
        </Container>
      </StyleSheetManager>
    </ThemeProvider>
  );
}

export default TaskPage;
