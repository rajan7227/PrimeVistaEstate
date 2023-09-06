import "./Card.scss";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import houses from "../../data/houses.json";
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
      <article>
        <div className="card">
          <Swiper {...sliderSettings}>
            <SliderButtons />
            {property.slice(0,8).map((card, i) => (
              <SwiperSlide key={i} className="one">
                <div className="card__wrapper">
                  <div className="card__card">
                    <AiFillHeart size={30} className="card__like" />
                    <img className="card__image" src={card.image}></img>
                    <div>
                      <div className="card__details">
                        <h4 className="card__title">{card.title}</h4>
                        <p className="card__price">{card.price}</p>
                        <p className="card__address">{card.address}</p>
                      </div>
                      <div className="card__feature">
                        <p className="card__bedroom">
                          {card.facilities.bathrooms} Bathrooms
                        </p>
                        <p className="card__bathroom">
                          {card.facilities.bedrooms} Bedrooms
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
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
      <button onClick={() => swiper.slidePrev()}>Back</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};
