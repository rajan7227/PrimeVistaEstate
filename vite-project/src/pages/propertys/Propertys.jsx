import Header from "../../components/header/Header";
import "./propertys.scss";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";
import Heart from "../../components/Heart/Heart";
import bedIcon from "../../assets/bedroom.png";
import bathroomIcon from "../../assets/bathroom.png";
import sqftIcon from "../../assets/sqft.png"

function Propertys() {
  const [property, setProperty] = useState([]);
  const [filter, setFilter] = useState("");
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
      <Header />
      <SearchBar
        filter={filter}
        setFilter={setFilter}
        className="propertys__search"
      />
      {property
        .filter(
          (property) =>
            property.title.toLowerCase().includes(filter.toLowerCase()) ||
            property.city.toLowerCase().includes(filter.toLowerCase()) ||
            property.country.toLowerCase().includes(filter.toLowerCase())
        )
        .map((house, i) => (
          <section className="property" key={house.id}>
            <div className="property__wrapper">
              <Link to={`/property/${house.id}`}>
                <div className="property__container">
                  <div className="property__card">
                    <img
                      className="property__image"
                      src={house.image}
                      alt={house.title}
                    />
                    <div className="property__details">
                      <div className="property__details-wrapper">
                        <div className="property__details-title">
                          <p className="property__details-add">Just Added</p>
                          {/* <Heart id={house.id} />
                    <p className="property__details-save">Save</p> */}
                          <div className="property__details-circle"></div>
                        </div>
                        <div className="property__details-info">
                          <h5 className="property__details-price">
                            £{house.price.toLocaleString()}
                          </h5>
                          <span className="property__details-spec">
                            <span>
                              <img src={bedIcon} alt="bedIcon" width={"24px"} height={"24px"}/>
                              <p className="property__details-bedrooms">{house.facilities.bedrooms} Bedrooms</p>
                            </span>
                            <span>
                              <img src={bathroomIcon} alt="bathroomIcon" width={"24px"} height={"24px"}/>
                              <p className="property__details-bathrooms">{house.facilities.bathrooms} Bathrooms</p>
                            </span>
                            <span>
                              <img src={sqftIcon} alt="SqftIcon"  width={"24px"} height={"24px"}/>
                              <p className="property__details-bathrooms">{house.facilities.sqft} Sqft</p>
                            </span>
                          </span>
                          <section className="property__details-section">
                            <h6 className="property__details-name">
                              {house.title}
                            </h6>
                            <p className="property__address">{house.address}</p>
                            <p className="property__description">{house.description}</p>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        ))}
    </>
  );
}

export default Propertys;
