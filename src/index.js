import { render, hydrate } from "react-dom";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (root.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <GlobalStyles />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>,
    root
  );
} else {
  render(
    <BrowserRouter>
      <GlobalStyles />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>,
    root
  );
}
