import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";

function App() {


  return (
    <div className="app">
      <Header />
      <Hero />
      <Slider />
      <Card />
    </div>
  );
}

export default App;
