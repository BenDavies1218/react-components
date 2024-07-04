import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/cards" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
