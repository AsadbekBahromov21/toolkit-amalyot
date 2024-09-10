import { Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./pages/category/Category";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import "swiper/css";
import "swiper/css/pagination";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/category" element={<Category />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
