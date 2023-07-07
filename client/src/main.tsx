import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "swiper/css";
import "swiper/css/pagination";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
