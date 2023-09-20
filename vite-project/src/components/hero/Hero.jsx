import SearchBar from "../searchBar/SearchBar";
import "./Hero.scss";
import heroImage from "../../assets/hero-image.jpeg";
import groupOne from "../../assets/Group20.png";
import groupTwo from "../../assets/Ellipsehouse.png";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__container">
            <div className="hero__context">
              <h2 className="hero__context-h2">REAL ESTATE</h2>
              <h3 className="hero__context-h3">
                Find a perfect home you love..!
              </h3>
              <p className="hero__context-p">
                {" "}
                Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
                Integer a dolor eu sapien sodales vulputate ac in purus.
              </p>
            </div>
            <div className="hero__image-wrapper">
              <span className="hero__image-circle">
                <svg className="hero__image-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="61"
                  height="61"
                  viewBox="0 0 61 61"
                  fill="none"
                >
                  <circle
                    cx="30.1698"
                    cy="30.1699"
                    r="30"
                    transform="rotate(30 30.1698 30.1699)"
                    fill="url(#paint0_linear_29_153)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_29_153"
                      x1="30.1698"
                      y1="0.16988"
                      x2="30.1698"
                      y2="60.1699"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4361EE" />
                      <stop offset="1" stopColor="#4361EE" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <img
                className="hero__image-image"
                src={heroImage}
                alt=""
                width={"540px"}
                height={"340px"}
              ></img>
            </div>
          </div>
          <div className="ellipse">
            <div className="ellipse__wrapper">
              <div className="ellipse__customer">
                <img
                  src={groupOne}
                  width={"155px"}
                  height={"36px"}
                  alt="people images"
                />
                <p>72k+ Happy Customers</p>
              </div>
              <div className="ellipse__property">
                <img
                  src={groupTwo}
                  width={"60px"}
                  height={"60px"}
                  alt="house image in circle "
                />
                <p>200+ New Listings Everyday!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="hero">
        <div className="hero__wrapper">
          <div>
            <h2>Find Accessible Homes To Buy</h2>
            <SearchBar />
          </div>
          <div>
            <div className="hero__image"></div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Hero;
