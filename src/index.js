import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
// import { ChannelService } from "../src/common/channelTalk";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <BrowserRouter>
      <GlobalStyles />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  );
} else {
  root.render(
    <BrowserRouter>
      <GlobalStyles />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  );
}
