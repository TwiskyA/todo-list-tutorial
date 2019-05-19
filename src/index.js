import React from "react";
import ReactDOM from "react-dom";
import List from "./TodoList/List";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
