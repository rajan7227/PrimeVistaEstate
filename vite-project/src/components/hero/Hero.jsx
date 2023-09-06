import SearchBar from "../searchBar/SearchBar";
import "./Hero.scss";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <div>
            <h2>Find Accessible Homes To Buy</h2>
            <SearchBar />
          </div>
          <div>
            <div className="hero__image"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
