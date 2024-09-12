
import s5 from './images/s5.webp';
import s4 from './images/s4.webp';
import s6 from './images/s6.webp';
import max from './images/max.webp';
import b1 from './images/b1.webp';
import b2 from './images/b2.webp';
import b3 from './images/b3.webp';
import b4 from './images/b4.webp';
import b5 from './images/b5.webp';
import testimonial from './images/testimonial.jpg';

// import nopg from './images/nopg';
const NoPage = () => {
  return (
    <div>
      
      <div className="maximum">
        <div className="image">
          <img src={max}  width="100%" height="450px"/>
          {/* <h2 style={{textAlign:'center', marginTop:'100px'}}>Maximize Your Result</h2>
          <p style={{marginTop:'50px',fontSize:'18px',float:'center'}}> Morning: During the Kapha time (6:00 AM - 10:00 AM), the body's energy rises, aiding in <br/>rejuvenation and protection throughout the day.<br/>
           According to Ayurvedic tradition, the optimal times for skincare<br/> routines correspond with the body's natural rhythms. <br/>
            You can dispense/pump a customized dosage for your skin.</p> */}
        </div>
      </div> 
      <div className="mt-4 logo">
        <h1>Best seller products</h1>
        <div className="card" style={{ width: '450px' }}>
          <img src={s4} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Face Mask</h5>
            <p className="card-text">Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '450px' }}>
          <img src={s5} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Enriching Serums</h5>
            <p className="card-text">Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '450px' }}>
          <img src={s6} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Face Oil</h5>
            <p className="card-text">Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
      </div> 
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='row g-3'>
              <div className="col-md-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img src={b1} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Healthy Hair</h5>
                    <p className="card-text">Penetrates into the skin into the deepest layer</p>
                    <a href="#" className="btn btn-warning">Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img src={b2} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Muscle Joints</h5>
                    <p className="card-text">Penetrates into the skin into the deepest layer</p>
                    <a href="#" className="btn btn-warning">Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img src={b3} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Rested Feet</h5>
                    <p className="card-text">Penetrates into the skin into the deepest layer</p>
                    <a href="#" className="btn btn-warning">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className='row g-3'>
              <div className="col-md-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img src={b4} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Peaceful sleep</h5>
                    <p className="card-text">Penetrates into the skin into the deepest layer</p>
                    <a href="#" className="btn btn-warning">Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img src={b5} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">stress Relief</h5>
                    <p className="card-text">Penetrates into the skin into the deepest layer</p>
                    <a href="#" className="btn btn-warning">Buy Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex">
                <div className="card" style={{ width: '100%' }}>
                  <img src={b2} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">Muscle joints</h5>
                    <p className="card-text">Penetrates into the skin into the deepest layer</p>
                    <a href="#" className="btn btn-warning">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden text-white">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div><hr/>
      <div className="end">
          <h4 style={{ textAlign: 'center', color: 'brown', marginTop: '150px' }}>Our Testimonials</h4>
          <h1 style={{ textAlign: 'center', color: 'rgb(87, 83, 83)' }}>Our Client Saying</h1>
        </div>

        <section id="testimonials" className="py-5">
          <div className="container">
            <div className="row">
              {/* Testimonial 1 */}
              <div className="col-md-4 mb-4">
                <div className="testimonial-box">
                  <div className="customer-detail mb-3">
                    <div className="customer-photo mb-2">
                      <img src={testimonial} alt="Ross Lee" />
                      <p className="customer-name mt-2 mb-0">Ross Lee</p>
                      <hr />
                    </div>
                  </div>
                  <p className="testimonial-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptas cupiditate aspernatur odit doloribus non.
                  </p>
                  <div className="star-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="col-md-4 mb-4">
                <div className="testimonial-box">
                  <div className="customer-detail mb-3">
                    <div className="customer-photo mb-2">
                      <img src={testimonial} alt="Amelia Watson" />
                      <p className="customer-name mt-2 mb-0">Amelia Watson</p>
                      <hr />
                    </div>
                  </div>
                  <p className="testimonial-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptas cupiditate aspernatur odit doloribus non.
                  </p>
                  <div className="star-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="col-md-4 mb-4">
                <div className="testimonial-box">
                  <div className="customer-detail mb-3">
                    <div className="customer-photo mb-2">
                      <img src={testimonial} alt="Ben Roy" />
                      <p className="customer-name mt-2 mb-0">Ben Roy</p>
                      <hr />
                    </div>
                  </div>
                  <p className="testimonial-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptas cupiditate aspernatur odit doloribus non.
                  </p>
                  <div className="star-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default NoPage;
