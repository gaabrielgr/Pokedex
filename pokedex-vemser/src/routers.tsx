import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/details/Details";
import Home from "./pages/Home";
import NotFound from "./pages/notFound/NotFound";
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/details" element={<Details />} >
          <Route path=":idPoke" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
