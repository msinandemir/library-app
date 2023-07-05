import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
