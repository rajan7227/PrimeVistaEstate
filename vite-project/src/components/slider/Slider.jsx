import "./Slider.scss";
import logitech from "../../assets/logitech.png";
import amazon from "../../assets/amazon.png";
import google from "../../assets/google.png";
import spotify from "../../assets/spotify.png";
import samsung from "../../assets/samsung.png";

function Slider() {
  return (
    <>
      <div className="slider">
        <div className="slider__wrapper">
          <h5 className="slider__text">
            Trusted by 100+ Companies across the globe!{" "}
          </h5>
          <svg className="slider__circle"
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
          >
            <circle
              opacity="0.5"
              cx="50.3013"
              cy="50.3013"
              r="50"
              transform="rotate(-30 50.3013 50.3013)"
              fill="url(#paint0_linear_70_162)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70_162"
                x1="50.3013"
                y1="0.30127"
                x2="50.3013"
                y2="100.301"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4361EE" />
                <stop offset="1" stopColor="#4361EE" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="slider__icon--wrapper">
            <div className="slider__icon">
              <img src={amazon} alt="" />
            </div>
            <div className="slider__icon">
              <img src={logitech} alt="" />
            </div>
            <div className="slider__icon">
              <img src={google} alt="" />
            </div>
            <div className="slider__icon">
              <img src={samsung} alt="" />
            </div>
            <div className="slider__icon">
              <img src={spotify} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
