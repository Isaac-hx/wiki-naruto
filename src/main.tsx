import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Hero from "./pages/Home/Hero.tsx";
import CharacterDetail from "./pages/ChracterDetail/CharacterDetail.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/detail/:id" element={<CharacterDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
