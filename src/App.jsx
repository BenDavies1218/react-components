import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";
import ContactPage from "./pages/ContactPage";
import Challenge1 from "./pages/Challenge1";
import Challenge2 from "./pages/Challenge2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/cards" element={<CardPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Challenge1" element={<Challenge1 />} />
          <Route path="/Challenge2" element={<Challenge2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
