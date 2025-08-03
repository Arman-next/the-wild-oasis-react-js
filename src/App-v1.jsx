import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

// style function return component which is reusable and also work as a html element
const StyledApp = styled.main`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>

            <div>
              <Heading as="h2">Check In & Out</Heading>

              <Button onClick={() => alert("check in")}>Check In</Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("check out")}
              >
                Check Out
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="No of guest" />
              <Input type="number" placeholder="No of guest" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
