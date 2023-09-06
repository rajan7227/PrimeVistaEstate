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
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
              malesuada leo volutpat.
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
                    <stop stop-color="#4361EE" />
                    <stop offset="1" stop-color="#4361EE" stop-opacity="0" />
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
