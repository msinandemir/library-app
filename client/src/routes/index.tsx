import { Routes, Route } from "react-router-dom";
import WebLayout from "../layouts/WebLayout";
import Home from "../pages/Home";
import { SearchBook } from "../pages/SearchBook";

function index() {
  return (
    <Routes>
      <Route element={<WebLayout />}>
        <Route index element={<Home />} />
        <Route path='search' element={<SearchBook />} />
      </Route>
    </Routes>
  );
}

export default index;
