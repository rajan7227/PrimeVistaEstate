import Header from "../../components/header/Header";
import './Propertys.scss';

function Propertys() {
  return (
    <>
        <Header/>
      <section className="propertys">
        <div className="propertys__wrapper">
          <div className="propertys__container">
            <div className="propertys__card">
              <img className="propertys__image" src="https://lid.zoocdn.com/u/2400/1800/a9fc73e02bc011e121dca210fbf1d8d9bbfce907.jpg:p"></img> 
              <div className="propertys__details">
                <div className="propertys__details-wrapper">
                  <div className="propertys__details-title">
                      <p className="propertys__details-add">Just Added</p>
                      <p className="propertys__details-save">Save</p>
                  </div>
                  <div className="propertys__details-info">
                      <h5 className="propertys__details-price">£500,000</h5>
                      <span className="propertys__details-spec">
                        <span><p>5 Bedrooms</p></span>
                        <span><p>3 Bathrooms</p></span>
                      </span>
                      <section className="propertys__details-section">
                        <h6 className="propertys__details-name">Title</h6>
                        <p>Address</p>
                        <p>Description</p>
                      </section>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Propertys;
