import "./WhoWeAre.scss";
import imageOne from "../../assets/landscapeone.jpeg";
import imageSecound from "../../assets/landscapesecound.jpeg";
import imageThird from "../../assets/landscapeonethird.jpeg";

function WhoWeAre() {
  return (
    <>
      <article className="who">
        <div className="who__wrapper">
          <div className="who__context">
            <p className="who__title"> WHO ARE WE</p>
            <h2 className="who__head">
              Assisting individuals in locating the appropriate real estate.
            </h2>
            <p className="who__paragraph">
            We are a dedicated team committed to helping individuals find their ideal real estate properties. Additionally, we offer a unique opportunity for homeowners to list their houses for sale at absolutely no cost, ensuring a hassle-free and cost-effective way to connect buyers with their dream homes.
            </p>
          </div>
          <div className="who__image">
            <div>
              <img
                className="who__image-first"
                src={imageOne}
                alt=""
                width={"280px"}
                height={"500px"}
              />
            </div>
            <div>
              <img
                className="who__image-secound"
                src={imageSecound}
                alt=""
                width={"277px"}
                height={"280px"}
              />
              <img
                className="who__image-third"
                src={imageThird}
                alt=""
                width={"277px"}
                height={"180px"}
              />
            </div>
            <span className="who__image-circle">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
              >
                <circle
                  opacity="0.5"
                  cx="30.9808"
                  cy="30.9808"
                  r="30"
                  transform="rotate(30 30.9808 30.9808)"
                  fill="url(#paint0_linear_70_161)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_70_161"
                    x1="30.9808"
                    y1="0.980762"
                    x2="30.9808"
                    y2="60.9808"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4361EE" />
                    <stop offset="1" stopColor="#4361EE" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </article>
    </>
  );
}

export default WhoWeAre;
