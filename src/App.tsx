import { Routes, Route } from "react-router";
import Hero from "./components/Hero/Hero";
import Home from "./pages/Home/Home";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
