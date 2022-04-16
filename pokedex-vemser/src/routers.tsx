import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/details/Details";
import Home from "./pages/Home";
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} >
          <Route path=":id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
