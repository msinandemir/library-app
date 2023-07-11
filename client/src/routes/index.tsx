import { Routes, Route } from "react-router-dom";
import WebLayout from "../layouts/WebLayout";
import Home from "../pages/Home";

function index() {
  return (
    <Routes>
      <Route element={<WebLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default index;
