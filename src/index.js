import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import useClickPower from "./useClickPower";
import { a } from "react-spring";
import "./styles.css";

function App() {
  const [dist, toggle] = useClickPower();
  return (
    <div className="App">
      <Card {...toggle()}>
        <Power {...dist()} />
      </Card>
    </div>
  );
}
const Power = styled(a.div)`
  position: relative;
  background: green;
  z-index: 6;
  width: 200px;
  border-radius: 50%;
  height: 200px;
  &::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
  }
`;
const Card = styled.div`
  width: 250px;
  overflow: hidden;
  height: 250px;
  background: tomato;
  position: relative;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
