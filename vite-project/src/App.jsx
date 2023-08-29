import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Propertys from "./pages/propertys/Propertys";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/property" element={<Propertys />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
