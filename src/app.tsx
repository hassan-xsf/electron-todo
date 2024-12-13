import React from "react";
import * as ReactDOM from "react-dom/client";

const App = () => <h1>Test</h1>;

function render() {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(<App />);
}

render();
