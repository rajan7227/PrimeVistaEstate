import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Propertys from "./pages/propertys/Propertys";
import Property from "./pages/property/Property";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/property" element={<Propertys />} />
          <Route path="/property/:id" element={<Property />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
