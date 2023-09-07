import Header from "../../components/header/Header";
import "./Bookings.scss";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Heart from "../../components/Heart/Heart";
import AllDetails from "../../components/context/AllDetails";
import { useAuth0 } from "@auth0/auth0-react";

function Bookings() {
  const [property, setProperty] = useState([]);

  const [filter, setFilter] = useState("");
  const {
    allDeatils: { bookings },
  } = useContext(AllDetails);
  const { user } = useAuth0();

  useEffect(() => {
    console.log("access bookings");
    console.log(user?.email);

    axios
      .post("http://localhost:9090/user/bookings", { email: user?.email })
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
        .filter((propertys) =>
          bookings.map((booking) => booking.id).includes(propertys.id)
        )
        .filter(
          (propertys) =>
            propertys.title.toLowerCase().includes(filter.toLowerCase())
        )
        .map((house, i) => (
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
                          <Heart id={house.id} />
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

export default Bookings;
