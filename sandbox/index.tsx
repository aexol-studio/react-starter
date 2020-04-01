import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
const AppContainer = styled.div`
  /* height: 100vh;
  width: 100%; */
  margin: 0;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <h2>React Starter</h2>
    </AppContainer>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
