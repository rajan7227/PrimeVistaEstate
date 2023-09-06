import "./Card.scss";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import bedIcon from "../../assets/bedroom.png";
import bathroomIcon from "../../assets/bathroom.png";
import React from "react";
import { sliderSettings } from "../../utils/slidersetting";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";

function Card() {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9090/property")
      .then((response) => {
        setProperty(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [setProperty]);

  return (
    <>
      <section className="card">
        <div className="card__wrapper">
          <div className="card__context">
            <div>
              <p className="card__title">CHECKOUT OUR NEW</p>
              <h2 className="card__head">Latest Listed Properties</h2>
              <p className="card__paragraph">
              We're thrilled to showcase our most recent property listings, each with its unique charm and potential.
              </p>
            </div>
          </div>
          <div className="card__houses">
            <div>
              <div className="card_houses-wrapper">
                <Swiper {...sliderSettings}>
                  <SliderButtons />
                  {property.slice(0, 8).map((card, i) => (
                    <SwiperSlide key={i} className="one">
                      <div className="card__houses-cardwrapper">
                        <div className="card__card">
                          {/* <AiFillHeart size={30} className="card__like" /> */}
                          <img
                            className="card__image"
                            src={card.image}
                            width={"440px"}
                            height={"340px"}
                          ></img>
                          <div>
                            <div className="card__details">
                              <h3 className="card__price">£ {card.price}</h3>
                              <h4 className="card__house-title">
                                {card.title}
                              </h4>
                              <p className="card__address">{card.address}</p>
                              <div>
                                <div className="card__feature">
                                  <div className="card__bed">
                                    <img
                                      className="card__bedicon"
                                      src={bedIcon}
                                      alt="bed icon"
                                      width={"24px"}
                                      height={"24px"}
                                    />
                                    <p className="card__bedrooms">
                                      {card.facilities.bedrooms} Beds
                                    </p>
                                  </div>
                                  <div className="card__bath">
                                    <img
                                      className="card__"
                                      src={bathroomIcon}
                                      alt="bathroom icon"
                                      width={"24px"}
                                      height={"24px"}
                                    />
                                    <p className="card__bathrooms">
                                      {card.facilities.bathrooms} Bath
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
<></>;

//using custom hook for the slider button
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="sliderbuttons">
      <button
        className="button button-default"
        onClick={() => swiper.slidePrev()}
      >
        Back
      </button>
      <button
        className="button button-default"
        onClick={() => swiper.slideNext()}
      >
        Next
      </button>
    </div>
  );
};
