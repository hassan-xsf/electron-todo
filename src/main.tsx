import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import { ThemeProvider } from "./providers/ThemeProvider";

function render() {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(
    <>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </>
  );
}

render();
