import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "swiper/css";
import "swiper/css/pagination";
import "react-photo-view/dist/react-photo-view.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { store } from "./store";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} position='bottom-left' />
    </QueryClientProvider>
  </Provider>
);
