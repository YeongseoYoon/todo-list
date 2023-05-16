import { createGlobalStyle } from "styled-components";
import ToDoList from "./ToDoList";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    font-family: 'Do Hyeon', sans-serif;
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor}
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
