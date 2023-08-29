import Header from "../../components/header/Header";
import './Propertys.scss';
import houses from '../../data/houses.json';

function Propertys() {
  return (
    
    <>
        <Header/>
        { houses.map((house,i)=>(
      <section className="propertys">
        <div className="propertys__wrapper">
          <div className="propertys__container">
            <div className="propertys__card">
              <img className="propertys__image" src={house.image}></img> 
              <div className="propertys__details">
                <div className="propertys__details-wrapper">
                  <div className="propertys__details-title">
                      <p className="propertys__details-add">Just Added</p>
                      <p className="propertys__details-save">Save</p>
                  </div>
                  <div className="propertys__details-info">
                      <h5 className="propertys__details-price">£{house.price}</h5>
                      <span className="propertys__details-spec">
                        <span><p>{house.facilities.bedrooms} Bedrooms</p></span>
                        <span><p>{house.facilities.bathrooms} Bathrooms</p></span>
                      </span>
                      <section className="propertys__details-section">
                        <h6 className="propertys__details-name">{house.title}</h6>
                        <p>{house.address}</p>
                        <p>Description</p>
                      </section>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>
      ))}
    </>
  
  );
}

export default Propertys;
