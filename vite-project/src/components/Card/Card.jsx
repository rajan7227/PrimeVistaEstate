import "./Card.scss";

function Card() {
  return (
    <>
      <article className="card__main" >
        <div className="card">
        <div className="card__wrapper">
          <div className="card__card">
            <img className="card__image" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"></img>
            <div>
              <div className="card__details">
                <h4 className="card__title">DETACHED HOUSE • 5Y OLD</h4>
                <p className="card__price">$750,000</p>
                <p className="card__address">742 Evergreen Terrace</p>
              </div>
              <div className="card__feature">
              <p className="card__bedroom">3 Bedrooms</p>
              <p className="card__bathroom">2 Bathrooms</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* /////////////// */}
        <div className="card">
        <div className="card__wrapper">
          <div className="card__card">
            <img className="card__image" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"></img>
            <div>
              <div className="card__details">
                <h4 className="card__title">DETACHED HOUSE • 5Y OLD</h4>
                <p className="card__price">$750,000</p>
                <p className="card__address">742 Evergreen Terrace</p>
              </div>
              <div className="card__feature">
              <p className="card__bedroom">3 Bedrooms</p>
              <p className="card__bathroom">2 Bathrooms</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="card">
        <div className="card__wrapper">
          <div className="card__card">
            <img className="card__image" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"></img>
            <div>
              <div className="card__details">
                <h4 className="card__title">DETACHED HOUSE • 5Y OLD</h4>
                <p className="card__price">$750,000</p>
                <p className="card__address">742 Evergreen Terrace</p>
              </div>
              <div className="card__feature">
              <p className="card__bedroom">3 Bedrooms</p>
              <p className="card__bathroom">2 Bathrooms</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </article>
    </>
  );
}

export default Card;
<></>;
