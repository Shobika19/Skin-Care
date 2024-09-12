import React from 'react';
import cr1 from './images/cr1.webp';
import cr2 from './images/cr2.webp';
import cr3 from './images/cr3.webp';
import cr4 from './images/cr4.webp';
import cr5 from './images/cr5.webp';
import './home.css'; // Import custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JavaScript
import p1 from './images/p1.webp';
import p2 from './images/p2.webp';
import p3 from './images/p3.webp';
import p4 from './images/p4.webp';
import p5 from './images/p5.webp';
import p6 from './images/p6.webp';
import p7 from './images/p7.webp';
import p8 from './images/p8.webp';
import r1 from './images/r1.avif';
import r2 from './images/r2.avif';
import r3 from './images/r3.avif'
import r4 from './images/r4.avif'
import r5 from './images/r5.avif'
import s1 from './images/s1.webp'
import s2 from './images/s2.webp'
import s3 from './images/s3.webp'
import s4 from './images/s4.webp'
import s5 from './images/s5.webp'
import s6 from './images/s6.webp'
import b1 from './images/b1.webp'
import b2 from './images/b2.webp'
import b3 from './images/b3.webp'
import b4 from './images/b4.webp'
import b5 from './images/b5.webp'
import g1 from './images/g1.webp'
import g2 from './images/g2.webp'
import g3 from './images/g3.webp'
import blog1 from './images/blog1.webp'
import blog2 from './images/blog2.webp'
import blog3 from './images/blog3.webp'
import skin from './images/skin.webp'
import testimonial from './images/testimonial.jpg'
import footer from './images/footer.webp';

const Home = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cr1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={cr2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={cr3} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={cr4} className="d-block w-100" alt="Slide 4" />
          </div>
          <div className="carousel-item">
            <img src={cr5} className="d-block w-100" alt="Slide 4" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="flex" style={{ width: '150px' }}>
        <img src={r1} className="card-img-top" alt="Product" />
        <div className="card-body">
          <p className="flex-text" style={{fontSize:'17px'}}>Clean ingredients</p>
        </div>
      </div>
      <div className="flex" style={{ width: '150px' }}>
        <img src={r2} className="card-img-top" alt="Product" />
        <div className="card-body">
          <p className="flex-text" style={{fontSize:'17px'}}>Result Oriented</p>
        </div>
      </div>
      <div className="flex" style={{ width: '150px' }}>
        <img src={r3} className="card-img-top" alt="Product" />
        <div className="card-body">
          <p className="flex-text" style={{fontSize:'17px'}}>Ayurveda Inspired</p>
        </div>
      </div>
      <div className="flex" style={{ width: '150px' }}>
        <img src={r4} className="card-img-top" alt="Product" />
        <div className="card-body">
          <p className="flex-text" style={{fontSize:'17px'}} >Cruelty Free</p>
        </div>
      </div>
      <div className="flex" style={{ width: '150px' }}>
        <img src={r5} className="card-img-top" alt="Product" />
        <div className="card-body">
          <p className="flex-text" style={{fontSize:'17px'}}>Gain Profits</p>
        </div>
      </div>
      <div className="mt-4"> {/* Added some margin-top for spacing */}
        <h1>Our Self-Care Products</h1>
      </div>

      <div className='eight'>
        <div className="card" style={{ width: '350px' }} id="pink">
          <img src={p1} className="card-img-top" alt="Product"  />
          <div className="card-body">
            <h5 className="card-title">Gheesutra</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '350px' }}>
          <img src={p2} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Kumkumadi oil</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '350px' }}>
          <img src={p3} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Restorative skin Elixir</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '350px' }}>
          <img src={p4} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Moisturizer</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '350px' }}>
          <img src={p5} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Moisturizer</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '350px' }}>
          <img src={p6} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Moisturizer</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '350px' }}>
          <img src={p7} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Moisturizer</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '350px' }}>
          <img src={p8} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Moisturizer</h5>
            <p className="card-text" style={{ color: 'black' }}>Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
      </div>

      <div className="mt-4 display container-fluid"> {/* Added container-fluid for full-width responsiveness */}
        <div className="row justify-content-center text-center"> {/* Centered content */}
          <div className="col-lg-8"> {/* Column with responsive width */}
            <h1 className="text-dark mb-4">Our Philosophy</h1> {/* Added margin-bottom */}
            <p className="text-dark mb-3">
              At Shankara, we believe that natural beauty should be celebrated. Shankara aims to modernize Ayurvedic skincare, inspire positivity in people,
              and celebrate radiance among all ages.
            </p>
            <p className="text-dark mb-4">
              Our 100% natural products combine Ayurvedic Wisdom with Modern Scientific Advancements to enhance an individual’s life on every level.
              Shankara supports many humanitarian causes worldwide. Every order you place makes a difference.
            </p>
            <a href="#" className="btn btn-light">Discover More</a> {/* Removed margin-top */}
          </div>
        </div>
      </div>

      <div className="mt-4 inline"> {/* Added some margin-top for spacing */}
        <h1>Shop by Category</h1>
        <div className="card" style={{ width: '450px' }}>
          <img src={s1} className="card-img-top" alt="Product" />
          <div className="card-body" >
            <h5 className="card-title">Facial cleansers</h5>
            <p className="card-text">Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '450px' }}>
          <img src={s2} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Facial Scruber</h5>
            <p className="card-text">Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '450px' }}>
          <img src={s3} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">Moisturizer</h5>
            <p className="card-text">Penetrates into the skin into a deepest layer</p>
            <a href="#" className="btn btn-warning">Buy Now</a>
          </div>
        </div>
      </div><br />
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
      <div className="mt-4"> {/* Added some margin-top for spacing */}
        <h1>Shop by wellness concern</h1>
      </div><br></br>

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
      </div>


      <div className="mt-4 ">{/* Added some margin-top for spacing */}
        <h1>Gifting combo</h1>
        <div className="images" style={{ width: '300px', }}>
          <img src={g1} className="card-img-top rounded-pill" alt="Product" style={{ marginRight: '50px', border: '1px solid black' }} />
          <img src={g2} className="card-img-top  rounded-pill" alt="Product" style={{ marginRight: '50px', border: '1px solid black' }} />
          <img src={g3} className="card-img-top rounded-pill" alt="Product" style={{ marginRight: '50px', border: '1px solid black' }} />
          <img src={g2} className="card-img-top rounded-pill " alt="product" style={{ marginRight: '50px', border: '1px solid black' }} />
        </div>
      </div>
      <div class="review">
        <div class="card" style={{ marginTop: '60px' }}>
          <img src={skin} class="card-img img-fluid " alt="..." style={{ marginLeft: '200px' }} />
          <div class="card-img-overlay">
            <h1 class="card-texted">What's your Skin type?</h1>
            <p class="card-texts">Discover now and get personalized recommendations for your skin</p>
            <button class="btn btn-warning" style={{ marginLeft: '850px', marginTop: '30px' }}>Take the Quiz</button>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className='row' style={{ marginLeft: '70px' }}>
          <h1 style={{ marginTop: '30px'}}>Blogs</h1>
          <div className="pic2" style={{ width: '450px' }}>
            <img src={blog1} className="card-img-top" alt="Product" />
            <div className="card-body">
              <h5 className="card-title">Face Mask</h5>
              <p className="card-text" style={{ color: 'black' }}>We all know that Almonds are nutritional powerhouses, <br />they are loaded with healthy fats, fiber, phytochemicals,<br /> vitamins, and minerals. Almonds are the superhero when it comes to building strength ...</p>
              <a href="#" className="btn btn-warning">View Products</a>
              <h6>Read more</h6>
            </div>
          </div>
          <div className="pic3" style={{ width: '450px' }}>
            <img src={blog2} className="card-img-top" alt="Product" />
            <div className="card-body">
              <h5 className="card-title">Enriching Serums</h5>
              <p className="card-text" style={{ color: 'black' }}>We all know that Almonds are nutritional powerhouses, <br />they are loaded with healthy fats, fiber, phytochemicals,<br /> vitamins, and minerals. Almonds are the superhero when it comes to building strength ...</p>
              <a href="#" className="btn btn-warning">View Products</a>
              <h6>Read more</h6>
            </div>
          </div>
          <div className="pic3" style={{ width: '450px' }}>
            <img src={blog3} className="card-img-top" alt="Product" />
            <div className="card-body">
              <h5 className="card-title">Face Oil</h5>
              <p className="card-text" style={{ color: 'black' }}>We all know that Almonds are nutritional powerhouses, <br />they are loaded with healthy fats, fiber, phytochemicals,<br /> vitamins, and minerals. Almonds are the superhero when it comes to building strength ...</p>
              <a href="#" className="btn btn-warning">View Products</a>
              <h6>Read more</h6>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Other sections of your component */}

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
      <div className='foot'>
        <div className='foot-img' style={{ position: 'relative' }}>
          <img src={footer} alt='Foot image' style={{ width: '100%', height: 'auto' }} />
          <div className='card-img-overlay' style={{ position: 'absolute', left: '50px', textAlign: 'center', color: 'white', padding: '20px' }}>
            <h1>News Letter</h1>
            <p>Get updates on our new launches, offers, Ayurvedic skincare tips, and more</p>
            <div className='subscription-form' style={{ marginTop: '20px' }}>
              <input type="email" placeholder="Enter your Email Id" style={{ marginLeft: '500px' }} />
              <button className='btn btn-danger'>Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <footer
          className="text-center text-lg-start text-black"
          style={{ backgroundColor:'lightsalmon' }}
        >
          <div className="container p-4 pb-0">
            <section>
              <div className="row">
                {/* Shop Name */}
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6
                    className="text-uppercase mb-4 font-weight-bold"
                    style={{ textDecoration: 'underline' }}
                  >
                    Shop name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>

                {/* Products */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6
                    className="text-uppercase mb-4 font-weight-bold"
                    style={{ textDecoration: 'underline' }}
                  >
                    Products
                  </h6>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">MDBootstrap</a></p>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">MDWordPress</a></p>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">BrandFlow</a></p>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">Bootstrap Angular</a></p>
                </div>

                {/* Useful Links */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6
                    className="text-uppercase mb-4 font-weight-bold"
                    style={{ textDecoration: 'underline' }}
                  >
                    Useful links
                  </h6>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">Your Account</a></p>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">Become an Affiliate</a></p>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">Shipping Rates</a></p>
                  <p><a href="#" style={{ color: 'black', fontWeight: 600 }} className="text">Help</a></p>
                </div>

                {/* Contact */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6
                    className="text-uppercase mb-4 font-weight-bold"
                    style={{ textDecoration: 'underline' }}
                  >
                    Contact
                  </h6>
                  <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p><i className="fa fa-envelope mr-3"></i> info@gmail.com</p>
                  <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                </div>
              </div>
            </section>

            <hr className="my-3" />


            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                {/* Copyright */}
                <div className="col-md-7 col-lg-8 text-center text-md-start ">
                  <div className=" p-3">
                    © 2020 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">MDSHANKARA.com</a>
                  </div>
                </div>
                <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                    <i class="fab fa-google"></i>
                  </a>
                  <a class="btn btn-outline-light btn-floating m-1 text-black bg-white" role="button">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>

              </div>


            </section>

          </div>
        </footer>
      </div>
    </div>

  );
};
export default Home;

