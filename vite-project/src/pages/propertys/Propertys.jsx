import Header from "../../components/header/Header";
import "./Propertys.scss";
import houses from "../../data/houses.json";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";
import axios from 'axios'
import { useEffect, useState } from "react";
import Heart from "../../components/Heart/Heart";




function Propertys() {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9090/property")
      .then((response) => {
        setProperty(response.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [setProperty]);

  return (
    <>
      <Header />
      <SearchBar className="propertys__search" />
      {property.map((house, i) => (
        <section className="propertys" key={i}>
          <div className="propertys__wrapper">
            <Link to={`/property/${house.id}`}>
              <div className="propertys__container">
                <div className="propertys__card">
                  <img
                    className="propertys__image"
                    src={house.image}
                    alt={house.title}
                  />
                  <div className="propertys__details">
                    <div className="propertys__details-wrapper">
                      <div className="propertys__details-title">
                        <p className="propertys__details-add">Just Added</p>
                        <Heart id={house.id}/>
                        <p className="propertys__details-save">Save</p>
                      </div>
                      <div className="propertys__details-info">
                        <h5 className="propertys__details-price">
                          £{house.price}
                        </h5>
                        <span className="propertys__details-spec">
                          <span>
                            <p>{house.facilities.bedrooms} Bedrooms</p>
                          </span>
                          <span>
                            <p>{house.facilities.bathrooms} Bathrooms</p>
                          </span>
                        </span>
                        <section className="propertys__details-section">
                          <h6 className="propertys__details-name">
                            {house.title}
                          </h6>
                          <p>{house.address}</p>
                          <p>Description</p>
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
