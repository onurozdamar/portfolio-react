import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Abalone from "./pages/projects/Abalone";
import Calis from "./pages/projects/Calis";
import Ingilizce from "./pages/projects/Ingilizce";
import Shoplist from "./pages/projects/Shoplist";
import Sudoku from "./pages/projects/Sudoku";
import Xox from "./pages/projects/Xox";
import "./index.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/abalone" element={<Abalone />} />
      <Route path="/calis" element={<Calis />} />
      <Route path="/inglizce" element={<Ingilizce />} />
      <Route path="/shoplist" element={<Shoplist />} />
      <Route path="/sudoku" element={<Sudoku />} />
      <Route path="/xox" element={<Xox />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
